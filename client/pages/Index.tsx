import { useState, useEffect } from "react";
import { Search, TrendingUp, ShoppingBag, Star, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
    count: "12,450+ products",
    trending: true,
  },
  {
    name: "Home Appliances", 
    icon: "🏠",
    count: "8,230+ products",
    trending: false,
  },
  {
    name: "Fashion",
    icon: "👗",
    count: "15,670+ products", 
    trending: true,
  },
  {
    name: "Smartwatches",
    icon: "⌚",
    count: "3,450+ products",
    trending: true,
  },
  {
    name: "Traditional Watches",
    icon: "⏰", 
    count: "2,890+ products",
    trending: false,
  },
  {
    name: "Shoes",
    icon: "👟",
    count: "9,120+ products",
    trending: true,
  },
];

const hotDeals = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    originalPrice: "₹1,59,900",
    discountPrice: "₹1,39,900", 
    discount: "13% OFF",
    rating: 4.8,
    reviews: 2847,
    stores: ["Amazon", "Flipkart", "Local Store"],
    bestStore: "Amazon",
    timeLeft: "2 days left",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch 6",
    originalPrice: "₹32,999",
    discountPrice: "₹24,999",
    discount: "24% OFF", 
    rating: 4.6,
    reviews: 1523,
    stores: ["Flipkart", "Amazon"],
    bestStore: "Flipkart",
    timeLeft: "1 day left",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    originalPrice: "₹29,990", 
    discountPrice: "₹22,990",
    discount: "23% OFF",
    rating: 4.9,
    reviews: 934,
    stores: ["Amazon", "Local Store"],
    bestStore: "Local Store",
    timeLeft: "5 hours left",
    image: "/placeholder.svg"
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 py-20">
            <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Animated illustration */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="floating">
                    <ShoppingBag className="h-32 w-32 text-white/80" />
                  </div>
                  <div className="absolute -top-4 -right-4 animate-bounce-gentle">
                    <TrendingUp className="h-12 w-12 text-accent" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 animate-pulse-glow">
                    <Star className="h-10 w-10 text-warning" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Find the <span className="text-accent">Best Prices</span>
                <br />Across All Stores
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Compare prices from Amazon, Flipkart, and local stores instantly. 
                Save money on electronics, fashion, home appliances, and more with real-time price tracking.
              </p>

              {/* Hero search */}
              <div className="max-w-2xl mx-auto mt-8">
                <div className="flex flex-col sm:flex-row gap-4 glass p-4 rounded-2xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
                    <Input
                      placeholder="Search for any product..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white h-12 px-8"
                    asChild
                  >
                    <Link to={`/search?q=${encodeURIComponent(searchQuery)}`}>
                      Compare Prices
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50K+</div>
                  <div className="text-white/80">Products Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-white/80">Major Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">₹2M+</div>
                  <div className="text-white/80">Money Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100K+</div>
                  <div className="text-white/80">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our wide range of categories and find the latest 2025 models 
                with the best prices across all platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <Card 
                  key={category.name} 
                  className={`relative group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    {category.trending && (
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                        Trending
                      </Badge>
                    )}
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                  <Link 
                    to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
                    className="absolute inset-0"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Deals Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                  <Zap className="h-8 w-8 text-accent" />
                  Hot Deals
                </h2>
                <p className="text-lg text-muted-foreground">
                  Limited time offers with the biggest savings
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/deals">View All Deals</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotDeals.map((deal, index) => (
                <Card 
                  key={deal.id} 
                  className={`group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                        {deal.discount}
                      </Badge>
                      <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                        <Clock className="h-3 w-3 text-destructive" />
                        <span className="text-xs font-medium text-destructive">{deal.timeLeft}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {deal.title}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(deal.rating) ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          {deal.rating} ({deal.reviews} reviews)
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-primary">{deal.discountPrice}</span>
                          <span className="text-lg text-muted-foreground line-through">{deal.originalPrice}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          Best price at <span className="font-medium text-foreground ml-1">{deal.bestStore}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          {deal.stores.map((store) => (
                            <Badge key={store} variant="secondary" className="text-xs">
                              {store}
                            </Badge>
                          ))}
                        </div>
                        <Button size="sm" asChild>
                          <Link to={`/product/${deal.id}`}>Compare</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose PriceCompare?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make price comparison simple, fast, and reliable for all your shopping needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Comparison</h3>
                <p className="text-muted-foreground">
                  Get instant price comparisons across Amazon, Flipkart, and local stores with live data updates.
                </p>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Store Integration</h3>
                <p className="text-muted-foreground">
                  Find nearby stores with GPS-enabled location services and get the best local deals.
                </p>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
                <p className="text-muted-foreground">
                  Get notified about price drops, exclusive deals, and limited-time offers on your favorite products.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
