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

// Mock search results data
const searchResults = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 2847,
    prices: {
      amazon: { price: "₹1,39,900", discount: "13% OFF", originalPrice: "₹1,59,900", available: true },
      flipkart: { price: "₹1,42,900", discount: "10% OFF", originalPrice: "₹1,59,900", available: true },
      localStore: { price: "₹1,45,000", discount: "9% OFF", originalPrice: "₹1,59,900", available: true, storeName: "Tech Hub" }
    },
    bestPrice: "amazon",
    features: ["6.7-inch Super Retina XDR display", "A17 Pro chip", "Triple camera system", "5G connectivity"]
  },
  {
    id: 2,
    title: "iPhone 15 Pro 128GB", 
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 1923,
    prices: {
      amazon: { price: "₹1,24,900", discount: "12% OFF", originalPrice: "₹1,41,900", available: true },
      flipkart: { price: "₹1,26,900", discount: "10% OFF", originalPrice: "₹1,41,900", available: true },
      localStore: { price: "₹1,28,000", discount: "9% OFF", originalPrice: "₹1,41,900", available: false, storeName: "Mobile World" }
    },
    bestPrice: "amazon",
    features: ["6.1-inch Super Retina XDR display", "A17 Pro chip", "Triple camera system", "5G connectivity"]
  },
  {
    id: 3,
    title: "iPhone 15 Plus 256GB",
    image: "/placeholder.svg", 
    rating: 4.6,
    reviews: 1456,
    prices: {
      amazon: { price: "₹1,09,900", discount: "15% OFF", originalPrice: "₹1,29,900", available: true },
      flipkart: { price: "₹1,12,900", discount: "13% OFF", originalPrice: "₹1,29,900", available: true },
      localStore: { price: "₹1,15,000", discount: "11% OFF", originalPrice: "₹1,29,900", available: true, storeName: "Digital Plaza" }
    },
    bestPrice: "amazon",
    features: ["6.7-inch Super Retina XDR display", "A16 Bionic chip", "Dual camera system", "5G connectivity"]
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

  const getPriceComparisonCard = (product: typeof searchResults[0]) => {
    const { prices } = product;
    const bestStore = product.bestPrice;
    
    return (
      <Card className="hover:shadow-lg transition-shadow">
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
                  {product.features.slice(0, 2).map((feature, index) => (
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
                  Best deal: Save up to {prices[bestStore as keyof typeof prices].discount} with {bestStore === 'amazon' ? 'Amazon' : bestStore === 'flipkart' ? 'Flipkart' : prices.localStore.storeName}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Amazon */}
                <div className={`border rounded-lg p-4 ${bestStore === 'amazon' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" alt="Amazon" className="w-6 h-6" />
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
                    className="w-full mt-3" 
                    variant={bestStore === 'amazon' ? 'default' : 'outline'}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View on Amazon
                  </Button>
                </div>

                {/* Flipkart */}
                <div className={`border rounded-lg p-4 ${bestStore === 'flipkart' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img src="/placeholder.svg" alt="Flipkart" className="w-6 h-6" />
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
                    className="w-full mt-3" 
                    variant={bestStore === 'flipkart' ? 'default' : 'outline'}
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
                    <SelectItem value="all">All Stores</SelectItem>
                    <SelectItem value="amazon">Amazon Only</SelectItem>
                    <SelectItem value="flipkart">Flipkart Only</SelectItem>
                    <SelectItem value="local">Local Stores</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {searchResults.map((product) => (
              <div key={product.id}>
                {getPriceComparisonCard(product)}
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Results
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
