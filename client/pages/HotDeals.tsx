import { useState } from "react";
import { Star, Clock, Zap, ShoppingCart, Heart, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const hotDeals = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    image: "/placeholder.svg",
    category: "Smartphones",
    originalPrice: "₹1,59,900",
    salePrice: "₹1,39,900",
    discount: "13% OFF",
    savings: "₹20,000",
    rating: 4.8,
    reviews: 2847,
    timeLeft: {
      hours: 23,
      minutes: 45,
      seconds: 30
    },
    stockLeft: 75,
    totalStock: 100,
    stores: {
      amazon: { price: "₹1,39,900", available: true },
      flipkart: { price: "₹1,42,900", available: true },
      local: { price: "₹1,45,000", available: true }
    },
    bestStore: "amazon",
    trending: true,
    flashSale: true
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch 6",
    image: "/placeholder.svg",
    category: "Smartwatches",
    originalPrice: "₹32,999",
    salePrice: "₹24,999",
    discount: "24% OFF",
    savings: "₹8,000",
    rating: 4.6,
    reviews: 1523,
    timeLeft: {
      hours: 11,
      minutes: 20,
      seconds: 15
    },
    stockLeft: 45,
    totalStock: 80,
    stores: {
      amazon: { price: "₹25,999", available: true },
      flipkart: { price: "₹24,999", available: true },
      local: { price: "₹26,500", available: false }
    },
    bestStore: "flipkart",
    trending: true,
    flashSale: true
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    image: "/placeholder.svg",
    category: "Audio",
    originalPrice: "₹29,990",
    salePrice: "₹22,990",
    discount: "23% OFF",
    savings: "₹7,000",
    rating: 4.9,
    reviews: 934,
    timeLeft: {
      hours: 5,
      minutes: 30,
      seconds: 45
    },
    stockLeft: 90,
    totalStock: 120,
    stores: {
      amazon: { price: "₹22,990", available: true },
      flipkart: { price: "₹24,990", available: true },
      local: { price: "₹25,500", available: true }
    },
    bestStore: "amazon",
    trending: false,
    flashSale: true
  },
  {
    id: 4,
    title: "MacBook Air M3",
    image: "/placeholder.svg",
    category: "Laptops",
    originalPrice: "₹1,34,900",
    salePrice: "₹1,14,900",
    discount: "15% OFF",
    savings: "₹20,000",
    rating: 4.9,
    reviews: 1456,
    timeLeft: {
      hours: 35,
      minutes: 10,
      seconds: 20
    },
    stockLeft: 30,
    totalStock: 50,
    stores: {
      amazon: { price: "₹1,14,900", available: true },
      flipkart: { price: "₹1,16,900", available: true },
      local: { price: "₹1,18,000", available: true }
    },
    bestStore: "amazon",
    trending: true,
    flashSale: false
  },
  {
    id: 5,
    title: "Nike Air Jordan 1",
    image: "/placeholder.svg",
    category: "Shoes",
    originalPrice: "₹12,495",
    salePrice: "₹8,747",
    discount: "30% OFF",
    savings: "₹3,748",
    rating: 4.5,
    reviews: 856,
    timeLeft: {
      hours: 2,
      minutes: 15,
      seconds: 50
    },
    stockLeft: 20,
    totalStock: 60,
    stores: {
      amazon: { price: "₹8,999", available: true },
      flipkart: { price: "₹8,747", available: true },
      local: { price: "₹9,200", available: true }
    },
    bestStore: "flipkart",
    trending: true,
    flashSale: true
  },
  {
    id: 6,
    title: "Samsung 55\" QLED TV",
    image: "/placeholder.svg",
    category: "Home Appliances",
    originalPrice: "₹74,999",
    salePrice: "₹54,999",
    discount: "27% OFF",
    savings: "₹20,000",
    rating: 4.4,
    reviews: 743,
    timeLeft: {
      hours: 47,
      minutes: 25,
      seconds: 10
    },
    stockLeft: 15,
    totalStock: 25,
    stores: {
      amazon: { price: "₹56,999", available: true },
      flipkart: { price: "₹54,999", available: true },
      local: { price: "₹57,500", available: true }
    },
    bestStore: "flipkart",
    trending: false,
    flashSale: false
  }
];

export default function HotDeals() {
  const [filter, setFilter] = useState("all");

  const filteredDeals = hotDeals.filter(deal => {
    if (filter === "flash") return deal.flashSale;
    if (filter === "trending") return deal.trending;
    return true;
  });

  const formatTime = (time: { hours: number; minutes: number; seconds: number }) => {
    return `${time.hours}h ${time.minutes}m ${time.seconds}s`;
  };

  const getStockColor = (percentage: number) => {
    if (percentage > 50) return "bg-success";
    if (percentage > 20) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              🔥 Hot Deals & Flash Sales
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Limited time offers with massive savings! Grab these deals before they're gone.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("all")}
                className="rounded-md"
              >
                All Deals
              </Button>
              <Button
                variant={filter === "flash" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("flash")}
                className="rounded-md"
              >
                <Zap className="h-4 w-4 mr-1" />
                Flash Sales
              </Button>
              <Button
                variant={filter === "trending" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("trending")}
                className="rounded-md"
              >
                <TrendingUp className="h-4 w-4 mr-1" />
                Trending
              </Button>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal) => {
              const stockPercentage = (deal.stockLeft / deal.totalStock) * 100;
              
              return (
                <Card key={deal.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <Badge variant="destructive" className="font-bold">
                          {deal.discount}
                        </Badge>
                        {deal.flashSale && (
                          <Badge className="bg-accent text-accent-foreground animate-pulse">
                            <Zap className="h-3 w-3 mr-1" />
                            Flash Sale
                          </Badge>
                        )}
                        {deal.trending && (
                          <Badge className="bg-primary text-primary-foreground">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>

                      {/* Wishlist */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>

                      {/* Timer */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-black/70 text-white rounded-lg p-2 text-center">
                          <div className="flex items-center justify-center gap-1 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>Ends in: {formatTime(deal.timeLeft)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {deal.category}
                        </Badge>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {deal.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(deal.rating) ? 'text-warning fill-warning' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          {deal.rating} ({deal.reviews})
                        </span>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-primary">{deal.salePrice}</div>
                            <div className="text-sm text-muted-foreground line-through">{deal.originalPrice}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-success">Save {deal.savings}</div>
                            <div className="text-xs text-muted-foreground">You save</div>
                          </div>
                        </div>

                        {/* Stock Progress */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Stock left: {deal.stockLeft}</span>
                            <span>{Math.round(stockPercentage)}% remaining</span>
                          </div>
                          <Progress 
                            value={stockPercentage} 
                            className={`h-2 ${getStockColor(stockPercentage)}`}
                          />
                        </div>

                        {/* Best Store */}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          Best price at <span className="font-medium text-foreground capitalize ml-1">{deal.bestStore}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button className="w-full" size="lg" asChild>
                          <Link to={`/search?q=${encodeURIComponent(deal.title)}`}>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Compare All Prices
                          </Link>
                        </Button>
                        
                        <div className="grid grid-cols-3 gap-1 text-xs">
                          <div className="text-center p-1 bg-muted rounded">
                            <div className="font-medium">Amazon</div>
                            <div>{deal.stores.amazon.price}</div>
                          </div>
                          <div className="text-center p-1 bg-muted rounded">
                            <div className="font-medium">Flipkart</div>
                            <div>{deal.stores.flipkart.price}</div>
                          </div>
                          <div className="text-center p-1 bg-muted rounded">
                            <div className="font-medium">Local</div>
                            <div>{deal.stores.local.available ? deal.stores.local.price : "N/A"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Deals
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
