import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon, Filter, Star, MapPin, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Comprehensive product database with latest 2025 models
const allProducts = [
  // Samsung Smartphones
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra 256GB",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 3247,
    category: "smartphone",
    brand: "Samsung",
    keywords: ["samsung", "galaxy", "s24", "ultra", "android", "smartphone", "mobile", "phone"],
    prices: {
      amazon: { price: "₹1,24,999", discount: "15% OFF", originalPrice: "₹1,46,999", available: true },
      flipkart: { price: "₹1,26,999", discount: "13% OFF", originalPrice: "₹1,46,999", available: true },
      localStore: { price: "₹1,28,500", discount: "12% OFF", originalPrice: "₹1,46,999", available: true, storeName: "Mobile World" }
    },
    bestPrice: "amazon",
    features: ["200MP Camera", "S Pen", "Titanium Build", "AI Features"]
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Plus 128GB",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 2134,
    category: "smartphone",
    brand: "Samsung",
    keywords: ["samsung", "galaxy", "s24", "plus", "android", "smartphone", "mobile", "phone"],
    prices: {
      amazon: { price: "₹89,999", discount: "18% OFF", originalPrice: "₹1,09,999", available: true },
      flipkart: { price: "₹91,999", discount: "16% OFF", originalPrice: "₹1,09,999", available: true },
      localStore: { price: "₹93,500", discount: "15% OFF", originalPrice: "₹1,09,999", available: true, storeName: "Tech Hub" }
    },
    bestPrice: "amazon",
    features: ["Triple Camera", "Dynamic AMOLED", "Wireless Charging", "5G"]
  },
  // iPhone Models
  {
    id: 3,
    title: "iPhone 15 Pro Max 256GB",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    rating: 4.9,
    reviews: 4567,
    category: "smartphone", 
    brand: "Apple",
    keywords: ["iphone", "apple", "15", "pro", "max", "ios", "smartphone", "mobile", "phone"],
    prices: {
      amazon: { price: "₹1,39,900", discount: "13% OFF", originalPrice: "₹1,59,900", available: true },
      flipkart: { price: "₹1,42,900", discount: "10% OFF", originalPrice: "₹1,59,900", available: true },
      localStore: { price: "₹1,45,000", discount: "9% OFF", originalPrice: "₹1,59,900", available: true, storeName: "iStore" }
    },
    bestPrice: "amazon",
    features: ["A17 Pro Chip", "Titanium Design", "Action Button", "USB-C"]
  },
  {
    id: 4,
    title: "iPhone 15 128GB",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
    rating: 4.7,
    reviews: 3456,
    category: "smartphone",
    brand: "Apple", 
    keywords: ["iphone", "apple", "15", "ios", "smartphone", "mobile", "phone"],
    prices: {
      amazon: { price: "₹79,900", discount: "11% OFF", originalPrice: "₹89,900", available: true },
      flipkart: { price: "₹81,900", discount: "9% OFF", originalPrice: "₹89,900", available: true },
      localStore: { price: "₹83,500", discount: "7% OFF", originalPrice: "₹89,900", available: true, storeName: "Apple Store" }
    },
    bestPrice: "amazon",
    features: ["A16 Bionic", "48MP Camera", "Dynamic Island", "5G"]
  },
  // OnePlus Smartphones
  {
    id: 5,
    title: "OnePlus 12 Pro 256GB",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 2345,
    category: "smartphone",
    brand: "OnePlus",
    keywords: ["oneplus", "12", "pro", "android", "smartphone", "mobile", "phone", "oxygen"],
    prices: {
      amazon: { price: "₹64,999", discount: "19% OFF", originalPrice: "₹79,999", available: true },
      flipkart: { price: "₹66,999", discount: "16% OFF", originalPrice: "₹79,999", available: true },
      localStore: { price: "₹68,500", discount: "14% OFF", originalPrice: "₹79,999", available: true, storeName: "OnePlus Store" }
    },
    bestPrice: "amazon",
    features: ["Snapdragon 8 Gen 3", "Hasselblad Camera", "120Hz Display", "100W Charging"]
  },
  // Xiaomi Smartphones
  {
    id: 6,
    title: "Xiaomi 14 Ultra 512GB",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=300&fit=crop",
    rating: 4.4,
    reviews: 1876,
    category: "smartphone",
    brand: "Xiaomi",
    keywords: ["xiaomi", "mi", "14", "ultra", "android", "smartphone", "mobile", "phone", "miui"],
    prices: {
      amazon: { price: "₹89,999", discount: "25% OFF", originalPrice: "₹1,19,999", available: true },
      flipkart: { price: "₹92,999", discount: "22% OFF", originalPrice: "₹1,19,999", available: true },
      localStore: { price: "₹94,500", discount: "21% OFF", originalPrice: "₹1,19,999", available: true, storeName: "Mi Store" }
    },
    bestPrice: "amazon",
    features: ["Leica Camera", "Snapdragon 8 Gen 3", "120W Charging", "2K Display"]
  },
  // Laptops
  {
    id: 7,
    title: "MacBook Air M3 15-inch 256GB",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 2134,
    category: "laptop",
    brand: "Apple",
    keywords: ["macbook", "air", "m3", "apple", "laptop", "mac", "15", "inch"],
    prices: {
      amazon: { price: "₹1,34,900", discount: "8% OFF", originalPrice: "₹1,46,900", available: true },
      flipkart: { price: "₹1,36,900", discount: "7% OFF", originalPrice: "₹1,46,900", available: true },
      localStore: { price: "₹1,38,500", discount: "6% OFF", originalPrice: "₹1,46,900", available: true, storeName: "Apple Store" }
    },
    bestPrice: "amazon",
    features: ["M3 Chip", "18-hour Battery", "Liquid Retina Display", "1080p Camera"]
  },
  {
    id: 8,
    title: "Dell XPS 13 Plus Intel Core i7",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 1678,
    category: "laptop",
    brand: "Dell",
    keywords: ["dell", "xps", "13", "plus", "intel", "i7", "laptop", "windows"],
    prices: {
      amazon: { price: "₹1,24,990", discount: "15% OFF", originalPrice: "₹1,46,990", available: true },
      flipkart: { price: "₹1,26,990", discount: "14% OFF", originalPrice: "₹1,46,990", available: true },
      localStore: { price: "₹1,28,500", discount: "13% OFF", originalPrice: "₹1,46,990", available: true, storeName: "Dell Store" }
    },
    bestPrice: "amazon",
    features: ["12th Gen Intel i7", "16GB RAM", "512GB SSD", "4K OLED Display"]
  },
  // Samsung Laptops
  {
    id: 9,
    title: "Samsung Galaxy Book 4 Pro 16-inch",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop",
    rating: 4.3,
    reviews: 1234,
    category: "laptop",
    brand: "Samsung",
    keywords: ["samsung", "galaxy", "book", "4", "pro", "laptop", "windows", "16"],
    prices: {
      amazon: { price: "₹1,09,999", discount: "12% OFF", originalPrice: "₹1,24,999", available: true },
      flipkart: { price: "₹1,11,999", discount: "10% OFF", originalPrice: "₹1,24,999", available: true },
      localStore: { price: "₹1,13,500", discount: "9% OFF", originalPrice: "₹1,24,999", available: true, storeName: "Samsung Store" }
    },
    bestPrice: "amazon",
    features: ["Intel Core i7", "Dynamic AMOLED 2X", "S Pen", "Dolby Atmos"]
  },
  // Home Appliances
  {
    id: 10,
    title: "Samsung 676L Side by Side Refrigerator",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 1834,
    category: "appliance",
    brand: "Samsung",
    keywords: ["samsung", "refrigerator", "fridge", "676l", "side", "by", "side", "appliance"],
    prices: {
      amazon: { price: "₹89,900", discount: "15% OFF", originalPrice: "₹1,05,900", available: true },
      flipkart: { price: "₹92,900", discount: "12% OFF", originalPrice: "₹1,05,900", available: true },
      localStore: { price: "₹94,500", discount: "11% OFF", originalPrice: "₹1,05,900", available: true, storeName: "Home Store" }
    },
    bestPrice: "amazon",
    features: ["Twin Cooling Plus", "Digital Inverter", "SpaceMax Technology", "5 Star Rating"]
  }
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [sortBy, setSortBy] = useState("relevance");
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    const queryParam = searchParams.get("q");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  // Enhanced search function
  const getSearchResults = () => {
    if (!query.trim()) return allProducts;
    
    const searchTerm = query.toLowerCase().trim();
    
    return allProducts.filter(product => {
      // Search in title
      const titleMatch = product.title.toLowerCase().includes(searchTerm);
      
      // Search in keywords
      const keywordMatch = product.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm) ||
        searchTerm.includes(keyword.toLowerCase())
      );
      
      // Search in brand
      const brandMatch = product.brand.toLowerCase().includes(searchTerm);
      
      // Search in category
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      
      return titleMatch || keywordMatch || brandMatch || categoryMatch;
    });
  };

  const searchResults = getSearchResults();

  const getPriceComparisonCard = (product: typeof allProducts[0]) => {
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
                      <span className="font-medium">{prices.localStore.storeName}</span>
                    </div>
                    {bestStore === 'localStore' && prices.localStore.available && (
                      <Badge className="bg-primary text-primary-foreground">Best Price</Badge>
                    )}
                  </div>
                  {prices.localStore.available ? (
                    <>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-primary">{prices.localStore.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{prices.localStore.originalPrice}</div>
                        <Badge variant="destructive" className="text-xs">{prices.localStore.discount}</Badge>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full mt-3" 
                        variant={bestStore === 'localStore' ? 'default' : 'outline'}
                      >
                        <MapPin className="h-4 w-4 mr-1" />
                        Visit Store
                      </Button>
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
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 w-full md:w-64"
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
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="smartphone">Smartphones</SelectItem>
                    <SelectItem value="laptop">Laptops</SelectItem>
                    <SelectItem value="appliance">Appliances</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* No Results */}
          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try searching for "Samsung mobile", "iPhone", "Dell laptop", or "Samsung refrigerator"
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
                Load More Results
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
