import { useState } from "react";
import { Star, Filter, Grid, List, ShoppingCart, Heart, Zap, TrendingUp, Watch, Activity, Smartphone, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const smartwatches = [
  {
    id: 1,
    name: "Apple Watch Series 10 (2025)",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 3456,
    prices: {
      amazon: "₹44,900",
      flipkart: "₹46,900",
      local: "₹47,500"
    },
    originalPrice: "₹49,900",
    discount: "10% OFF",
    bestPrice: "amazon",
    features: ["Blood Oxygen", "ECG", "Always-On Display", "GPS + Cellular"],
    trending: true,
    category: "Premium",
    brand: "Apple",
    batteryLife: "18 hours",
    display: "45mm Retina",
    compatibility: "iOS",
    healthFeatures: ["Heart Rate", "Blood Oxygen", "ECG", "Sleep Tracking"]
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 7 Ultra (2025)",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 2834,
    prices: {
      amazon: "₹39,999",
      flipkart: "₹38,999",
      local: "₹41,000"
    },
    originalPrice: "₹45,999",
    discount: "15% OFF",
    bestPrice: "flipkart",
    features: ["BioActive Sensor", "Sapphire Crystal", "Titanium Case"],
    trending: true,
    category: "Premium",
    brand: "Samsung",
    batteryLife: "4 days",
    display: "47mm Super AMOLED",
    compatibility: "Android/iOS",
    healthFeatures: ["Body Composition", "Blood Pressure", "Sleep Score"]
  },
  {
    id: 3,
    name: "Garmin Forerunner 965 (2025)",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 1567,
    prices: {
      amazon: "₹54,990",
      flipkart: "₹56,990",
      local: "₹57,500"
    },
    originalPrice: "₹64,990",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["Multi-Band GPS", "Training Readiness", "HRV Status"],
    trending: false,
    category: "Sports",
    brand: "Garmin",
    batteryLife: "23 days",
    display: "47mm AMOLED",
    compatibility: "Android/iOS",
    healthFeatures: ["VO2 Max", "Training Load", "Recovery Advisor"]
  },
  {
    id: 4,
    name: "Fitbit Sense 3 (2025)",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 2156,
    prices: {
      amazon: "₹24,995",
      flipkart: "₹25,995",
      local: "₹26,500"
    },
    originalPrice: "₹29,995",
    discount: "17% OFF",
    bestPrice: "amazon",
    features: ["Stress Management", "EDA Sensor", "Skin Temperature"],
    trending: true,
    category: "Health",
    brand: "Fitbit",
    batteryLife: "6 days",
    display: "41mm AMOLED",
    compatibility: "Android/iOS",
    healthFeatures: ["Stress Score", "Mindfulness", "Menstrual Health"]
  },
  {
    id: 5,
    name: "Amazfit GTR 5 Pro (2025)",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 1834,
    prices: {
      amazon: "₹18,999",
      flipkart: "₹19,999",
      local: "₹20,500"
    },
    originalPrice: "₹24,999",
    discount: "24% OFF",
    bestPrice: "amazon",
    features: ["Dual-Band GPS", "150+ Sports Modes", "Amazon Alexa"],
    trending: false,
    category: "Mid-Range",
    brand: "Amazfit",
    batteryLife: "14 days",
    display: "46mm AMOLED",
    compatibility: "Android/iOS",
    healthFeatures: ["PAI Score", "Sleep Quality", "Stress Monitoring"]
  },
  {
    id: 6,
    name: "OnePlus Watch 3 (2025)",
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 1247,
    prices: {
      amazon: "₹16,999",
      flipkart: "₹17,499",
      local: "₹17,999"
    },
    originalPrice: "₹19,999",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["Warp Charge", "Snapdragon W5+", "Wear OS"],
    trending: true,
    category: "Mid-Range",
    brand: "OnePlus",
    batteryLife: "2 days",
    display: "46mm AMOLED",
    compatibility: "Android",
    healthFeatures: ["SpO2", "Heart Rate", "Workout Auto-detection"]
  },
  {
    id: 7,
    name: "Huawei Watch GT 5 Pro (2025)",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 967,
    prices: {
      amazon: "₹22,990",
      flipkart: "₹23,990",
      local: "₹24,500"
    },
    originalPrice: "₹27,990",
    discount: "18% OFF",
    bestPrice: "amazon",
    features: ["Titanium Build", "Sapphire Glass", "Dual Frequency GPS"],
    trending: false,
    category: "Premium",
    brand: "Huawei",
    batteryLife: "14 days",
    display: "46mm AMOLED",
    compatibility: "Android/iOS",
    healthFeatures: ["TruSleep", "TruRelax", "Professional Running Guidance"]
  },
  {
    id: 8,
    name: "Fossil Gen 7 Smartwatch (2025)",
    image: "/placeholder.svg",
    rating: 4.2,
    reviews: 1456,
    prices: {
      amazon: "₹21,995",
      flipkart: "₹22,495",
      local: "₹23,000"
    },
    originalPrice: "₹26,995",
    discount: "19% OFF",
    bestPrice: "amazon",
    features: ["Wear OS", "Google Assistant", "Customizable Dials"],
    trending: false,
    category: "Fashion",
    brand: "Fossil",
    batteryLife: "24 hours",
    display: "44mm AMOLED",
    compatibility: "Android/iOS",
    healthFeatures: ["Heart Rate", "Sleep Tracking", "Wellness App"]
  }
];

const categories = ["All", "Premium", "Sports", "Health", "Mid-Range", "Fashion"];
const brands = ["All Brands", "Apple", "Samsung", "Garmin", "Fitbit", "Amazfit", "OnePlus", "Huawei", "Fossil"];

export default function CategorySmartwatches() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All Brands");

  const filteredProducts = smartwatches.filter(product => 
    (filterCategory === "All" || product.category === filterCategory) &&
    (filterBrand === "All Brands" || product.brand === filterBrand)
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sports": return <Activity className="h-4 w-4" />;
      case "Health": return <Heart className="h-4 w-4" />;
      case "Premium": return <Zap className="h-4 w-4" />;
      default: return <Watch className="h-4 w-4" />;
    }
  };

  const ProductCard = ({ product }: { product: typeof smartwatches[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge variant="destructive">{product.discount}</Badge>
            <Badge className="bg-primary text-primary-foreground">
              {product.brand}
            </Badge>
            {product.trending && (
              <Badge className="bg-accent text-accent-foreground">
                <TrendingUp className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Battery className="h-3 w-3" />
              {product.batteryLife}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Smartphone className="h-3 w-3" />
              {product.compatibility}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs mb-2 flex items-center gap-1 w-fit">
              {getCategoryIcon(product.category)}
              {product.category}
            </Badge>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <div className="flex items-center mb-3">
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

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">
                {product.prices[product.bestPrice as keyof typeof product.prices]}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Best price from <span className="font-medium capitalize">{product.bestPrice}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Display: {product.display}
            </div>
            <div className="text-xs text-success font-medium">
              Health: {product.healthFeatures.slice(0, 2).join(", ")}
            </div>
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1" asChild>
              <Link to={`/search?q=${encodeURIComponent(product.name)}`}>
                <ShoppingCart className="h-4 w-4 mr-1" />
                Compare Prices
              </Link>
            </Button>
            <Button size="sm" variant="outline">
              <Heart className="h-4 w-4" />
            </Button>
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span>Smartwatches</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              ⌚ Smartwatches 2025
            </h1>
            <p className="text-muted-foreground">
              Discover the latest 2025 smartwatch models with advanced health tracking, fitness features, and smart connectivity. Compare prices and find your perfect wearable companion.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="flex flex-wrap gap-4">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterBrand} onValueChange={setFilterBrand}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="battery">Battery Life</SelectItem>
                  <SelectItem value="newest">Latest 2025 Models</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Health Features
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} smartwatches found
              </span>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More 2025 Smartwatches
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
