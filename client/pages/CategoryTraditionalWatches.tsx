import { useState } from "react";
import { Star, Filter, Grid, List, ShoppingCart, Heart, Crown, Watch, TrendingUp, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const traditionalWatches = [
  {
    id: 1,
    name: "Rolex Submariner Date 2025 Edition",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 567,
    prices: {
      amazon: "₹9,85,000",
      flipkart: "₹9,87,000",
      local: "₹9,89,000"
    },
    originalPrice: "₹10,50,000",
    discount: "6% OFF",
    bestPrice: "amazon",
    features: ["Oystersteel", "Ceramic Bezel", "Self-winding"],
    trending: true,
    category: "Luxury",
    brand: "Rolex",
    movement: "Automatic",
    waterResistance: "300m",
    warranty: "5 Years International"
  },
  {
    id: 2,
    name: "Omega Speedmaster Professional 2025",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 834,
    prices: {
      amazon: "₹4,85,000",
      flipkart: "₹4,87,000",
      local: "₹4,89,000"
    },
    originalPrice: "₹5,25,000",
    discount: "8% OFF",
    bestPrice: "amazon",
    features: ["Moonwatch", "Manual Wind", "Hesalite Crystal"],
    trending: false,
    category: "Luxury",
    brand: "Omega",
    movement: "Manual",
    waterResistance: "50m",
    warranty: "5 Years International"
  },
  {
    id: 3,
    name: "Seiko Prospex Solar Diver 2025",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 1456,
    prices: {
      amazon: "₹24,990",
      flipkart: "₹25,990",
      local: "₹26,500"
    },
    originalPrice: "₹29,990",
    discount: "17% OFF",
    bestPrice: "amazon",
    features: ["Solar Movement", "Rotating Bezel", "Lumibrite"],
    trending: true,
    category: "Sports",
    brand: "Seiko",
    movement: "Solar Quartz",
    waterResistance: "200m",
    warranty: "3 Years International"
  },
  {
    id: 4,
    name: "Casio G-Shock MR-G 2025 Limited",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 2156,
    prices: {
      amazon: "₹3,24,990",
      flipkart: "₹3,26,990",
      local: "₹3,28,500"
    },
    originalPrice: "₹3,69,990",
    discount: "12% OFF",
    bestPrice: "amazon",
    features: ["Titanium Carbide", "GPS + Radio", "Solar Powered"],
    trending: true,
    category: "Digital",
    brand: "Casio",
    movement: "Solar Quartz",
    waterResistance: "200m",
    warranty: "2 Years Worldwide"
  },
  {
    id: 5,
    name: "Citizen Eco-Drive Satellite Wave 2025",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 934,
    prices: {
      amazon: "₹1,89,990",
      flipkart: "₹1,91,990",
      local: "₹1,93,500"
    },
    originalPrice: "₹2,19,990",
    discount: "14% OFF",
    bestPrice: "amazon",
    features: ["Satellite Sync", "Eco-Drive", "Titanium Case"],
    trending: false,
    category: "Luxury",
    brand: "Citizen",
    movement: "Solar Eco-Drive",
    waterResistance: "100m",
    warranty: "5 Years Worldwide"
  },
  {
    id: 6,
    name: "Fossil Grant Chronograph 2025",
    image: "/placeholder.svg",
    rating: 4.2,
    reviews: 1834,
    prices: {
      amazon: "₹8,995",
      flipkart: "₹9,495",
      local: "₹9,995"
    },
    originalPrice: "₹12,995",
    discount: "31% OFF",
    bestPrice: "amazon",
    features: ["Chronograph", "Leather Strap", "Date Display"],
    trending: false,
    category: "Fashion",
    brand: "Fossil",
    movement: "Quartz",
    waterResistance: "50m",
    warranty: "2 Years Worldwide"
  },
  {
    id: 7,
    name: "Tag Heuer Formula 1 2025 Collection",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 678,
    prices: {
      amazon: "₹1,24,990",
      flipkart: "₹1,26,990",
      local: "₹1,28,000"
    },
    originalPrice: "₹1,44,990",
    discount: "14% OFF",
    bestPrice: "amazon",
    features: ["Swiss Quartz", "Ceramic Bezel", "Luminous Hands"],
    trending: true,
    category: "Sports",
    brand: "Tag Heuer",
    movement: "Swiss Quartz",
    waterResistance: "200m",
    warranty: "2 Years International"
  },
  {
    id: 8,
    name: "Timex Weekender 2025 Edition",
    image: "/placeholder.svg",
    rating: 4.1,
    reviews: 2456,
    prices: {
      amazon: "₹2,995",
      flipkart: "₹3,295",
      local: "₹3,495"
    },
    originalPrice: "₹4,995",
    discount: "40% OFF",
    bestPrice: "amazon",
    features: ["Easy Reader", "Indiglo Backlight", "Nylon Strap"],
    trending: false,
    category: "Casual",
    brand: "Timex",
    movement: "Quartz",
    waterResistance: "30m",
    warranty: "1 Year Worldwide"
  }
];

const categories = ["All", "Luxury", "Sports", "Digital", "Fashion", "Casual"];
const brands = ["All Brands", "Rolex", "Omega", "Seiko", "Casio", "Citizen", "Fossil", "Tag Heuer", "Timex"];

export default function CategoryTraditionalWatches() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All Brands");

  const filteredProducts = traditionalWatches.filter(product => 
    (filterCategory === "All" || product.category === filterCategory) &&
    (filterBrand === "All Brands" || product.brand === filterBrand)
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Luxury": return <Crown className="h-4 w-4" />;
      case "Sports": return <TrendingUp className="h-4 w-4" />;
      case "Digital": return <Gem className="h-4 w-4" />;
      default: return <Watch className="h-4 w-4" />;
    }
  };

  const ProductCard = ({ product }: { product: typeof traditionalWatches[0] }) => (
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
          <div className="absolute bottom-3 left-3 right-3">
            <Badge variant="secondary" className="w-full justify-center">
              {product.movement} • {product.waterResistance}
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
              <span>Traditional Watches</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              ⏰ Traditional Watches 2025
            </h1>
            <p className="text-muted-foreground">
              Explore timeless elegance with our 2025 collection of traditional watches. From luxury Swiss timepieces to everyday classics, find the perfect watch for every occasion.
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
                  <SelectItem value="newest">Latest 2025 Models</SelectItem>
                  <SelectItem value="luxury">Luxury First</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Movement Type
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} watches found
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
              Load More 2025 Timepieces
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
