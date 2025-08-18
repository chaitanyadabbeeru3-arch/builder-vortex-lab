import { useState } from "react";
import { Star, Filter, Grid, List, ShoppingCart, Heart, Zap, TrendingUp, Snowflake, Flame, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const homeAppliances = [
  {
    id: 1,
    name: "Samsung 676L Side by Side Refrigerator 2025",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 1834,
    prices: {
      amazon: "₹89,900",
      flipkart: "₹92,900",
      local: "₹94,500"
    },
    originalPrice: "₹1,05,900",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["Twin Cooling Plus", "Digital Inverter", "SpaceMax Technology"],
    trending: true,
    category: "Refrigerators",
    energyRating: "5 Star",
    warranty: "10 Years Compressor"
  },
  {
    id: 2,
    name: "LG 8Kg Front Load Washing Machine AI DD 2025",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 2156,
    prices: {
      amazon: "₹54,990",
      flipkart: "₹56,990",
      local: "₹58,000"
    },
    originalPrice: "₹64,990",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["AI Direct Drive", "Steam Wash", "Smart Diagnosis"],
    trending: true,
    category: "Washing Machines",
    energyRating: "5 Star",
    warranty: "2 Years + 10 Years Motor"
  },
  {
    id: 3,
    name: "Daikin 1.5 Ton 5 Star Inverter Split AC 2025",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 1456,
    prices: {
      amazon: "₹42,990",
      flipkart: "₹44,990",
      local: "₹46,500"
    },
    originalPrice: "₹52,990",
    discount: "19% OFF",
    bestPrice: "amazon",
    features: ["PM 2.5 Filter", "Coanda Airflow", "Dew Clean Technology"],
    trending: false,
    category: "Air Conditioners",
    energyRating: "5 Star",
    warranty: "1+4 Years Extended"
  },
  {
    id: 4,
    name: "IFB 30L Convection Microwave Oven 2025",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 934,
    prices: {
      amazon: "₹18,990",
      flipkart: "₹19,990",
      local: "₹20,500"
    },
    originalPrice: "₹24,990",
    discount: "24% OFF",
    bestPrice: "amazon",
    features: ["Auto Cook Menus", "Express Cooking", "Child Safety Lock"],
    trending: true,
    category: "Microwave Ovens",
    energyRating: "4 Star",
    warranty: "2 Years"
  },
  {
    id: 5,
    name: "Kent Grand Plus RO Water Purifier 2025",
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 2847,
    prices: {
      amazon: "₹15,999",
      flipkart: "₹16,999",
      local: "₹17,500"
    },
    originalPrice: "₹19,999",
    discount: "20% OFF",
    bestPrice: "amazon",
    features: ["RO+UV+UF+TDS", "8L Storage", "Smart Digital Display"],
    trending: false,
    category: "Water Purifiers",
    energyRating: "4 Star",
    warranty: "1+2 Years Extended"
  },
  {
    id: 6,
    name: "Philips HD9252/90 Air Fryer XXL 2025",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 1247,
    prices: {
      amazon: "₹24,995",
      flipkart: "₹25,995",
      local: "₹26,500"
    },
    originalPrice: "₹29,995",
    discount: "17% OFF",
    bestPrice: "amazon",
    features: ["7.3L Capacity", "Rapid Air Technology", "Digital Touchscreen"],
    trending: true,
    category: "Kitchen Appliances",
    energyRating: "5 Star",
    warranty: "2 Years"
  },
  {
    id: 7,
    name: "Dyson V15 Detect Absolute Vacuum Cleaner 2025",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 678,
    prices: {
      amazon: "₹54,900",
      flipkart: "₹56,900",
      local: "₹58,000"
    },
    originalPrice: "���64,900",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["Laser Dust Detection", "60min Runtime", "5-Stage Filtration"],
    trending: true,
    category: "Vacuum Cleaners",
    energyRating: "5 Star",
    warranty: "2 Years"
  },
  {
    id: 8,
    name: "Panasonic 43L Grill Microwave Oven 2025",
    image: "/placeholder.svg",
    rating: 4.2,
    reviews: 1523,
    prices: {
      amazon: "₹28,990",
      flipkart: "₹29,990",
      local: "₹31,000"
    },
    originalPrice: "₹34,990",
    discount: "17% OFF",
    bestPrice: "amazon",
    features: ["Inverter Technology", "Auto Cook Menu", "Keep Warm Feature"],
    trending: false,
    category: "Microwave Ovens",
    energyRating: "4 Star",
    warranty: "2 Years"
  }
];

const categories = ["All", "Refrigerators", "Washing Machines", "Air Conditioners", "Microwave Ovens", "Water Purifiers", "Kitchen Appliances", "Vacuum Cleaners"];

export default function CategoryHomeAppliances() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProducts = homeAppliances.filter(product => 
    filterCategory === "All" || product.category === filterCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Refrigerators": return <Snowflake className="h-4 w-4" />;
      case "Air Conditioners": return <Snowflake className="h-4 w-4" />;
      case "Water Purifiers": return <Droplets className="h-4 w-4" />;
      case "Microwave Ovens": return <Flame className="h-4 w-4" />;
      default: return <Zap className="h-4 w-4" />;
    }
  };

  const ProductCard = ({ product }: { product: typeof homeAppliances[0] }) => (
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
            <Badge className="bg-success text-success-foreground">
              {product.energyRating}
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
              Warranty: {product.warranty}
            </div>
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open(`https://amazon.in/s?k=${encodeURIComponent(product.name)}`, '_blank')}
              >
                Amazon
              </Button>

              <Button
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => window.open(`https://flipkart.com/search?q=${encodeURIComponent(product.name)}`, '_blank')}
              >
                Flipkart
              </Button>
            </div>

            <Button size="sm" variant="outline" className="w-full" asChild>
              <Link to={`/search?q=${encodeURIComponent(product.name)}`}>
                Compare All Prices
              </Link>
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
              <span>Home Appliances</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              🏠 Home Appliances 2025
            </h1>
            <p className="text-muted-foreground">
              Discover the latest 2025 home appliances with advanced features, energy efficiency, and smart technology. Compare prices across all major stores.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="flex flex-wrap gap-4">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
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
                  <SelectItem value="energy">Energy Rating</SelectItem>
                  <SelectItem value="newest">Newest 2025 Models</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Energy Rating
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products found
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
              Load More 2025 Models
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
