import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon, Filter, Star, MapPin, TrendingUp, ExternalLink, Store, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts, searchProducts, getLocalStores, type Product } from "../data/products";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [sortBy, setSortBy] = useState("relevance");
  const [filterBy, setFilterBy] = useState("all");
  const [showLocalStores, setShowLocalStores] = useState(true);

  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  // Get search results using the imported function
  const searchResults = searchProducts(query);
  const localStores = getLocalStores();

  const getPriceComparisonCard = (product: Product) => {
    const { prices } = product;
    const bestStore = product.bestPrice;
    
    return (
      <Card key={product.id} className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Image and Info */}
            <div className="lg:w-1/3">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <p key={index} className="text-sm text-muted-foreground">• {feature}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Comparison */}
            <div className="lg:w-2/3">
              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Price Comparison
                </h4>
                <div className="text-sm text-muted-foreground">
                  Best deal: Save up to {prices[bestStore as keyof typeof prices].discount} with{" "}
                  {bestStore === 'amazon' ? 'Amazon' : bestStore === 'flipkart' ? 'Flipkart' : prices.localStore.storeName}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Amazon */}
                <div className={`border rounded-lg p-4 ${bestStore === 'amazon' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <span className="font-medium">Amazon</span>
                    </div>
                    {bestStore === 'amazon' && (
                      <Badge className="bg-primary text-primary-foreground">Best Price</Badge>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-primary">{prices.amazon.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{prices.amazon.originalPrice}</div>
                    <Badge variant="destructive" className="text-xs">{prices.amazon.discount}</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-3 bg-orange-500 hover:bg-orange-600" 
                    onClick={() => window.open(`https://amazon.in/s?k=${encodeURIComponent(product.title)}`, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View on Amazon
                  </Button>
                </div>

                {/* Flipkart */}
                <div className={`border rounded-lg p-4 ${bestStore === 'flipkart' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">F</span>
                      </div>
                      <span className="font-medium">Flipkart</span>
                    </div>
                    {bestStore === 'flipkart' && (
                      <Badge className="bg-primary text-primary-foreground">Best Price</Badge>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-primary">{prices.flipkart.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{prices.flipkart.originalPrice}</div>
                    <Badge variant="destructive" className="text-xs">{prices.flipkart.discount}</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-3 bg-blue-500 hover:bg-blue-600" 
                    onClick={() => window.open(`https://flipkart.com/search?q=${encodeURIComponent(product.title)}`, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View on Flipkart
                  </Button>
                </div>

                {/* Local Store */}
                <div className={`border rounded-lg p-4 ${bestStore === 'localStore' ? 'border-primary bg-primary/5' : 'border-border'} ${!prices.localStore.available ? 'opacity-50' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="font-medium text-sm">{prices.localStore.storeName}</span>
                    </div>
                    {bestStore === 'localStore' && prices.localStore.available && (
                      <Badge className="bg-primary text-primary-foreground text-xs">Best Price</Badge>
                    )}
                  </div>
                  {prices.localStore.available ? (
                    <>
                      <div className="space-y-1 mb-3">
                        <div className="text-lg font-bold text-primary">{prices.localStore.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{prices.localStore.originalPrice}</div>
                        <Badge variant="destructive" className="text-xs">{prices.localStore.discount}</Badge>
                      </div>
                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          className="w-full text-xs" 
                          variant={bestStore === 'localStore' ? 'default' : 'outline'}
                          onClick={() => {
                            const store = prices.localStore;
                            if (store.coordinates) {
                              const url = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}&destination_place_id=${encodeURIComponent(store.storeName + ', ' + store.address)}`;
                              window.open(url, '_blank');
                            }
                          }}
                        >
                          <Navigation className="h-3 w-3 mr-1" />
                          Get Directions
                        </Button>
                        <div className="text-xs text-center text-muted-foreground">
                          📍 {prices.localStore.distance} • {prices.localStore.address}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full text-xs"
                          onClick={() => window.open(`tel:${prices.localStore.phone}`, '_self')}
                        >
                          📞 Call Store
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-sm text-muted-foreground">Currently out of stock</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Search Results for "{query}"
                </h1>
                <p className="text-muted-foreground">
                  Found {searchResults.length} products across Amazon, Flipkart, and local stores
                </p>
              </div>
              
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search: Samsung mobile, gym equipment, cosmetics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 w-full md:w-80"
                  />
                </div>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="smartphone">Smartphones</SelectItem>
                    <SelectItem value="gym-equipment">Gym Equipment</SelectItem>
                    <SelectItem value="cosmetics">Cosmetics</SelectItem>
                    <SelectItem value="mens-fashion">Men's Fashion</SelectItem>
                    <SelectItem value="womens-fashion">Women's Fashion</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="home-decor">Home Decor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Local Stores Section */}
          {showLocalStores && localStores.length > 0 && (
            <Card className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-primary" />
                  Local Stores Near You
                  <Badge variant="secondary">{localStores.length} stores</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {localStores.slice(0, 6).map((store, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-border hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{store.storeName}</h4>
                        <Badge variant="outline" className="text-xs">{store.distance}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{store.address}</p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 text-xs h-8"
                          onClick={() => {
                            if (store.coordinates) {
                              const url = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`;
                              window.open(url, '_blank');
                            }
                          }}
                        >
                          <Navigation className="h-3 w-3 mr-1" />
                          Navigate
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-xs h-8"
                          onClick={() => window.open(`tel:${store.phone}`, '_self')}
                        >
                          📞 Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={() => window.open('/stores', '_blank')}>
                    View All Local Stores
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* No Results */}
          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try searching for: "Samsung mobile", "gym equipment", "makeup", "men's shirt", "study table", "ceiling fan"
              </p>
              <Button onClick={() => setQuery("")}>Show All Products</Button>
            </div>
          )}

          {/* Results */}
          <div className="space-y-6">
            {searchResults.map((product) => getPriceComparisonCard(product))}
          </div>

          {/* Load More */}
          {searchResults.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Results ({allProducts.length - searchResults.length} more products)
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
