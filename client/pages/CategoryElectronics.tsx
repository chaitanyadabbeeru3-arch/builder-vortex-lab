import { useState } from "react";
import { Star, Filter, Grid, List, ShoppingCart, Heart, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const electronics = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 2847,
    prices: {
      amazon: "₹1,39,900",
      flipkart: "₹1,42,900",
      local: "₹1,45,000"
    },
    originalPrice: "₹1,59,900",
    discount: "13% OFF",
    bestPrice: "amazon",
    features: ["A17 Pro chip", "Titanium design", "48MP camera"],
    trending: true,
    category: "Smartphones"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 1923,
    prices: {
      amazon: "₹1,24,999",
      flipkart: "₹1,26,999",
      local: "₹1,28,500"
    },
    originalPrice: "₹1,39,999",
    discount: "11% OFF",
    bestPrice: "amazon",
    features: ["S Pen included", "200MP camera", "AI features"],
    trending: true,
    category: "Smartphones"
  },
  {
    id: 3,
    name: "MacBook Air M3",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 1456,
    prices: {
      amazon: "₹1,14,900",
      flipkart: "₹1,16,900",
      local: "₹1,18,000"
    },
    originalPrice: "₹1,34,900",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["M3 chip", "15-hour battery", "Liquid Retina"],
    trending: false,
    category: "Laptops"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 934,
    prices: {
      amazon: "₹22,990",
      flipkart: "₹24,990",
      local: "₹26,500"
    },
    originalPrice: "₹29,990",
    discount: "23% OFF",
    bestPrice: "amazon",
    features: ["Noise cancellation", "30-hour battery", "Touch controls"],
    trending: true,
    category: "Audio"
  },
  {
    id: 5,
    name: "iPad Pro 12.9-inch",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 756,
    prices: {
      amazon: "₹1,12,900",
      flipkart: "₹1,14,900",
      local: "₹1,16,000"
    },
    originalPrice: "₹1,29,900",
    discount: "13% OFF",
    bestPrice: "amazon",
    features: ["M2 chip", "Liquid Retina XDR", "5G connectivity"],
    trending: false,
    category: "Tablets"
  },
  {
    id: 6,
    name: "Dell XPS 13",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 1247,
    prices: {
      amazon: "₹1,04,990",
      flipkart: "₹1,06,990",
      local: "₹1,08,500"
    },
    originalPrice: "₹1,19,990",
    discount: "12% OFF",
    bestPrice: "amazon",
    features: ["Intel i7", "16GB RAM", "512GB SSD"],
    trending: false,
    category: "Laptops"
  }
];

const categories = ["All", "Smartphones", "Laptops", "Audio", "Tablets", "Gaming"];

export default function CategoryElectronics() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredProducts = electronics.filter(product => 
    filterCategory === "All" || product.category === filterCategory
  );

  const ProductCard = ({ product }: { product: typeof electronics[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="destructive">{product.discount}</Badge>
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
            <Badge variant="secondary" className="text-xs mb-2">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
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
              <Zap className="h-4 w-4" />
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
              <span>Electronics</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Electronics</h1>
            <p className="text-muted-foreground">
              Discover the latest 2025 electronic devices with the best prices across Amazon, Flipkart, and local stores.
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
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
              Load More Products
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
