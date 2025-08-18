import { useState, useEffect } from "react";
import { MapPin, Navigation, Phone, Clock, Star, Directions, Filter, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stores = [
  {
    id: 1,
    name: "TechHub Electronics",
    type: "Electronics Store",
    address: "MG Road, Brigade Road, Bangalore",
    distance: "0.8 km",
    rating: 4.6,
    reviews: 234,
    phone: "+91 98765 43210",
    hours: "10:00 AM - 9:00 PM",
    categories: ["Electronics", "Smartphones", "Laptops"],
    offers: ["10% off on iPhones", "Free delivery above ₹5000"],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    verified: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Fashion Central",
    type: "Fashion Store",
    address: "Commercial Street, Bangalore",
    distance: "1.2 km",
    rating: 4.4,
    reviews: 567,
    phone: "+91 98765 43211",
    hours: "11:00 AM - 10:00 PM",
    categories: ["Fashion", "Shoes", "Accessories"],
    offers: ["Buy 2 Get 1 Free", "Flat 30% off on brands"],
    coordinates: { lat: 12.9817, lng: 77.6098 },
    verified: true,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Home & Kitchen World",
    type: "Home Appliances",
    address: "Koramangala, Bangalore",
    distance: "2.1 km",
    rating: 4.5,
    reviews: 189,
    phone: "+91 98765 43212",
    hours: "9:00 AM - 8:00 PM",
    categories: ["Home Appliances", "Kitchen", "Furniture"],
    offers: ["EMI options available", "Extended warranty"],
    coordinates: { lat: 12.9279, lng: 77.6271 },
    verified: true,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Watch Gallery",
    type: "Watch Store",
    address: "UB City Mall, Bangalore",
    distance: "1.5 km",
    rating: 4.7,
    reviews: 345,
    phone: "+91 98765 43213",
    hours: "10:00 AM - 9:30 PM",
    categories: ["Smartwatches", "Traditional Watches", "Accessories"],
    offers: ["Luxury watch collection", "Trade-in available"],
    coordinates: { lat: 12.9698, lng: 77.5954 },
    verified: true,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Shoe Paradise",
    type: "Footwear Store",
    address: "Forum Mall, Bangalore",
    distance: "3.2 km",
    rating: 4.3,
    reviews: 456,
    phone: "+91 98765 43214",
    hours: "10:30 AM - 9:00 PM",
    categories: ["Shoes", "Sports Footwear", "Formal Shoes"],
    offers: ["Buy 1 Get 1 at 50%", "Student discounts"],
    coordinates: { lat: 12.9279, lng: 77.6271 },
    verified: false,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Smart Appliances Hub",
    type: "Electronics Store",
    address: "Indiranagar, Bangalore",
    distance: "2.8 km",
    rating: 4.8,
    reviews: 123,
    phone: "+91 98765 43215",
    hours: "9:30 AM - 8:30 PM",
    categories: ["Home Appliances", "Smart Devices", "Electronics"],
    offers: ["Smart home setup", "Installation included"],
    coordinates: { lat: 12.9784, lng: 77.6408 },
    verified: true,
    image: "/placeholder.svg"
  }
];

export default function Stores() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationPermission, setLocationPermission] = useState<"pending" | "granted" | "denied">("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("distance");
  const [locationAccuracy, setLocationAccuracy] = useState<number | null>(null);

  useEffect(() => {
    requestLocation();
  }, []);

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      // Request high accuracy GPS location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationAccuracy(position.coords.accuracy);
          setLocationPermission("granted");
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationPermission("denied");
          // Fallback to Bangalore coordinates
          setUserLocation({ lat: 12.9716, lng: 77.5946 });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    } else {
      setLocationPermission("denied");
      setUserLocation({ lat: 12.9716, lng: 77.5946 });
    }
  };

  // Update store distances based on user location
  const storesWithCalculatedDistance = stores.map(store => {
    if (userLocation) {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        store.coordinates.lat,
        store.coordinates.lng
      );
      return {
        ...store,
        distance: `${distance.toFixed(1)} km`,
        calculatedDistance: distance
      };
    }
    return store;
  });

  // Sort stores by calculated distance
  const sortedStores = storesWithCalculatedDistance.sort((a, b) => {
    if (sortBy === "distance" && a.calculatedDistance && b.calculatedDistance) {
      return a.calculatedDistance - b.calculatedDistance;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const filteredStores = sortedStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === "All" || store.categories.includes(filterCategory);
    return matchesSearch && matchesCategory;
  });

  const StoreCard = ({ store }: { store: typeof stores[0] }) => (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img 
            src={store.image} 
            alt={store.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {store.name}
                  {store.verified && (
                    <Badge className="bg-success text-success-foreground text-xs">
                      Verified
                    </Badge>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{store.type}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-warning fill-warning" />
                  <span className="font-medium">{store.rating}</span>
                  <span className="text-sm text-muted-foreground">({store.reviews})</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{store.address}</span>
                <Badge variant="outline" className="text-xs">
                  {store.distance}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{store.hours}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{store.phone}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Categories:</p>
                <div className="flex flex-wrap gap-1">
                  {store.categories.map((category, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Current Offers:</p>
                <div className="space-y-1">
                  {store.offers.map((offer, index) => (
                    <p key={index} className="text-xs text-success">• {offer}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => {
                    if (userLocation && store.coordinates) {
                      // Open Google Maps with turn-by-turn navigation
                      const url = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${store.coordinates.lat},${store.coordinates.lng}/@${userLocation.lat},${userLocation.lng},15z/data=!3m1!4b1!4m2!4m1!3e0`;
                      window.open(url, '_blank');
                    } else {
                      // Fallback to search if no user location
                      const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(store.name + ' ' + store.address)}`;
                      window.open(searchUrl, '_blank');
                    }
                  }}
                >
                  <Navigation className="h-4 w-4 mr-1" />
                  Get Directions
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    window.open(`tel:${store.phone}`, '_self');
                  }}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              📍 Local Stores Near You
            </h1>
            <p className="text-muted-foreground">
              Find nearby stores with real-time inventory, exclusive offers, and GPS-enabled directions. Compare prices and visit stores in your area.
            </p>
          </div>

          {/* Location Status */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Your Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              {locationPermission === "pending" && (
                <div className="flex items-center gap-3">
                  <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                  <span>Requesting location permission...</span>
                </div>
              )}
              {locationPermission === "granted" && userLocation && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-success text-success-foreground">
                      📍 GPS Enabled
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Lat: {userLocation.lat.toFixed(4)}, Lng: {userLocation.lng.toFixed(4)}
                      {locationAccuracy && (
                        <span className="block text-xs">
                          Accuracy: ±{Math.round(locationAccuracy)}m
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={requestLocation}>
                      <Navigation className="h-4 w-4 mr-1" />
                      Refresh GPS
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        if (userLocation) {
                          const url = `https://www.google.com/maps/@${userLocation.lat},${userLocation.lng},17z`;
                          window.open(url, '_blank');
                        }
                      }}
                    >
                      📍 View on Map
                    </Button>
                  </div>
                </div>
              )}
              {locationPermission === "denied" && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive">Location Access Denied</Badge>
                    <span className="text-sm text-muted-foreground">
                      Using default location (Bangalore)
                    </span>
                  </div>
                  <Button size="sm" onClick={requestLocation}>
                    <MapPin className="h-4 w-4 mr-1" />
                    Enable Location
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search stores or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Home Appliances">Home Appliances</SelectItem>
                <SelectItem value="Shoes">Shoes</SelectItem>
                <SelectItem value="Smartwatches">Smartwatches</SelectItem>
                <SelectItem value="Traditional Watches">Traditional Watches</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="verified">Verified First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-muted-foreground">
              Found {filteredStores.length} stores near your location
            </span>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Stores List */}
          <div className="space-y-6">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stores
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
