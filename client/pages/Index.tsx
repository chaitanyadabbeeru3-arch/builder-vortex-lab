import { useState, useEffect } from "react";
import { Search, TrendingUp, ShoppingBag, Star, MapPin, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { allProducts } from "../data/products";

const categories = [
  {
    name: "Electronics",
    icon: "📱",
    count: "12,450+ products",
    trending: true,
    route: "/category/electronics"
  },
  {
    name: "Gym Equipment",
    icon: "🏋️",
    count: "5,230+ products",
    trending: true,
    route: "/search?q=gym equipment"
  },
  {
    name: "Cosmetics",
    icon: "💄",
    count: "18,670+ products",
    trending: true,
    route: "/search?q=cosmetics"
  },
  {
    name: "Men's Fashion",
    icon: "👔",
    count: "7,450+ products",
    trending: true,
    route: "/search?q=mens fashion"
  },
  {
    name: "Women's Fashion",
    icon: "👗",
    count: "15,890+ products",
    trending: true,
    route: "/search?q=womens fashion"
  },
  {
    name: "Furniture",
    icon: "🪑",
    count: "6,120+ products",
    trending: false,
    route: "/search?q=furniture"
  },
  {
    name: "Home Appliances",
    icon: "🏠",
    count: "8,230+ products",
    trending: false,
    route: "/category/home-appliances"
  },
  {
    name: "Home Decor",
    icon: "🖼️",
    count: "4,560+ products",
    trending: true,
    route: "/search?q=home decor"
  },
  {
    name: "Electrical",
    icon: "⚡",
    count: "3,340+ products",
    trending: false,
    route: "/search?q=electrical"
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
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop"
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className={`relative group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {category.trending && (
                    <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">
                      🔥 Hot
                    </Badge>
                  )}
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-1 text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </CardContent>
                <Link
                  to={category.route}
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

                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 text-white"
                            onClick={() => window.open(`https://amazon.in/s?k=${encodeURIComponent(deal.title)}`, '_blank')}
                          >
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjcgMTEuNUMxMS4yIDEyLjcgOS4xIDEzLjMgNy4zIDEzLjNDNC42IDEzLjMgMi4yIDEyLjIgMC41IDEwLjNDMC4zIDEwLjEgMC41IDkuOCAwLjggOS45QzIuNyAxMSA0LjkgMTEuNiA3LjIgMTEuNkM4LjcgMTEuNiAxMC40IDExLjIgMTEuOSAxMC4zQzEyLjMgMTAuMSAxMi42IDEwLjUgMTIuNCAxMC44TDEyLjcgMTEuNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMy4yIDEwLjhDMTMgMTAuNSAxMi4yIDEwLjMgMTEuNiAxMC4yQzEwLjggMTAuMSA5LjggMTAuMSA5IDE0LjFDOSA5LjQgOC42IDkuMiA4LjMgOS40QzcuNiA5LjggNy4yIDEwLjUgNy4xIDExLjJDNy4xIDExLjUgNy4zIDExLjcgNy42IDExLjZDOC42IDExLjQgOS41IDEwLjkgMTAuMiAxMC4yQzEwLjcgOS43IDExLjQgOS40IDEyLjEgOS40QzEyLjcgOS40IDEzLjQgMTAuNCAxMy4yIDEwLjhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" className="w-4 h-4 mr-1" alt="Amazon" />
                            Amazon
                          </Button>

                          <Button
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                            onClick={() => window.open(`https://flipkart.com/search?q=${encodeURIComponent(deal.title)}`, '_blank')}
                          >
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDg3NGQ5Ii8+CjxwYXRoIGQ9Ik0zIDNIMTNWMTNIM1YzWiIgZmlsbD0id2hpdGUiLz4KPHA+PC9wPgo8L3N2Zz4K" className="w-4 h-4 mr-1" alt="Flipkart" />
                            Flipkart
                          </Button>
                        </div>

                        <Button size="sm" variant="outline" className="w-full" asChild>
                          <Link to={`/search?q=${encodeURIComponent(deal.title)}`}>
                            Compare All Prices
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Stores Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                📍 Local Stores Near You
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit nearby stores for instant pickup, better deals, and personalized service with GPS-enabled directions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-3xl mb-3">🏪</div>
                <h3 className="font-semibold mb-2">Mobile World</h3>
                <p className="text-sm text-muted-foreground mb-3">📍 MG Road • 0.8 km</p>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/stores">Get Directions</Link>
                </Button>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-3xl mb-3">🏋️</div>
                <h3 className="font-semibold mb-2">Fitness World</h3>
                <p className="text-sm text-muted-foreground mb-3">📍 Koramangala • 2.1 km</p>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/stores">Get Directions</Link>
                </Button>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-pink-100">
                <div className="text-3xl mb-3">💄</div>
                <h3 className="font-semibold mb-2">Beauty Palace</h3>
                <p className="text-sm text-muted-foreground mb-3">📍 UB City Mall • 1.5 km</p>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/stores">Get Directions</Link>
                </Button>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="text-3xl mb-3">🪑</div>
                <h3 className="font-semibold mb-2">Furniture World</h3>
                <p className="text-sm text-muted-foreground mb-3">📍 Commercial St • 1.2 km</p>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/stores">Get Directions</Link>
                </Button>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/stores">
                  📍 View All Local Stores & Get GPS Directions
                </Link>
              </Button>
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
