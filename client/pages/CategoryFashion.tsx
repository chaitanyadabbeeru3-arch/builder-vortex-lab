import { useState } from "react";
import { Star, Filter, Grid, List, ShoppingCart, Heart, Zap, TrendingUp, Shirt, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const fashionItems = [
  {
    id: 1,
    name: "Zara Oversized Blazer 2025 Collection",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 1834,
    prices: {
      amazon: "₹3,999",
      flipkart: "₹4,299",
      local: "₹4,500"
    },
    originalPrice: "₹5,999",
    discount: "33% OFF",
    bestPrice: "amazon",
    features: ["100% Cotton", "Sustainable Fabric", "Relaxed Fit"],
    trending: true,
    category: "Women's Blazers",
    brand: "Zara",
    sizes: ["XS", "S", "M", "L", "XL"],
    season: "Spring 2025"
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07 Fresh 2025 Edition",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 2156,
    prices: {
      amazon: "₹8,495",
      flipkart: "₹8,695",
      local: "₹8,995"
    },
    originalPrice: "₹9,995",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["Air Sole Unit", "Leather Upper", "Rubber Sole"],
    trending: true,
    category: "Sneakers",
    brand: "Nike",
    sizes: ["6", "7", "8", "9", "10", "11"],
    season: "All Season"
  },
  {
    id: 3,
    name: "H&M Sustainable Denim Jacket 2025",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 1456,
    prices: {
      amazon: "₹2,499",
      flipkart: "₹2,699",
      local: "₹2,899"
    },
    originalPrice: "₹3,499",
    discount: "29% OFF",
    bestPrice: "amazon",
    features: ["Recycled Denim", "Classic Fit", "Metal Buttons"],
    trending: false,
    category: "Denim Jackets",
    brand: "H&M",
    sizes: ["S", "M", "L", "XL"],
    season: "Spring 2025"
  },
  {
    id: 4,
    name: "Adidas Ultraboost 22 2025 Colorway",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 934,
    prices: {
      amazon: "₹14,999",
      flipkart: "₹15,499",
      local: "₹15,999"
    },
    originalPrice: "₹17,999",
    discount: "17% OFF",
    bestPrice: "amazon",
    features: ["Boost Midsole", "Primeknit Upper", "Continental Rubber"],
    trending: true,
    category: "Running Shoes",
    brand: "Adidas",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    season: "All Season"
  },
  {
    id: 5,
    name: "Mango Floral Print Dress Summer 2025",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 2847,
    prices: {
      amazon: "₹2,999",
      flipkart: "₹3,299",
      local: "₹3,499"
    },
    originalPrice: "₹4,999",
    discount: "40% OFF",
    bestPrice: "amazon",
    features: ["Floral Print", "Midi Length", "V-Neckline"],
    trending: true,
    category: "Dresses",
    brand: "Mango",
    sizes: ["XS", "S", "M", "L"],
    season: "Summer 2025"
  },
  {
    id: 6,
    name: "Levi's 511 Slim Jeans 2025 Wash",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 1247,
    prices: {
      amazon: "₹3,499",
      flipkart: "₹3,699",
      local: "₹3,899"
    },
    originalPrice: "₹4,499",
    discount: "22% OFF",
    bestPrice: "amazon",
    features: ["Slim Fit", "Stretch Denim", "5-Pocket Design"],
    trending: false,
    category: "Men's Jeans",
    brand: "Levi's",
    sizes: ["28", "30", "32", "34", "36", "38"],
    season: "All Season"
  },
  {
    id: 7,
    name: "Gucci Dionysus Mini Bag 2025",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 678,
    prices: {
      amazon: "₹1,85,000",
      flipkart: "₹1,87,000",
      local: "₹1,89,000"
    },
    originalPrice: "₹2,05,000",
    discount: "10% OFF",
    bestPrice: "amazon",
    features: ["Leather Exterior", "Gold Hardware", "Chain Strap"],
    trending: true,
    category: "Luxury Bags",
    brand: "Gucci",
    sizes: ["One Size"],
    season: "Timeless"
  },
  {
    id: 8,
    name: "Uniqlo Heattech Crew Neck T-Shirt 2025",
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 1523,
    prices: {
      amazon: "₹799",
      flipkart: "₹899",
      local: "₹999"
    },
    originalPrice: "₹1,299",
    discount: "38% OFF",
    bestPrice: "amazon",
    features: ["Heattech Technology", "Moisture Wicking", "Ultra-Soft"],
    trending: false,
    category: "Base Layers",
    brand: "Uniqlo",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    season: "Winter 2025"
  }
];

const categories = ["All", "Dresses", "Sneakers", "Men's Jeans", "Women's Blazers", "Running Shoes", "Denim Jackets", "Luxury Bags", "Base Layers"];
const brands = ["All Brands", "Zara", "Nike", "H&M", "Adidas", "Mango", "Levi's", "Gucci", "Uniqlo"];

export default function CategoryFashion() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All Brands");

  const filteredProducts = fashionItems.filter(product => 
    (filterCategory === "All" || product.category === filterCategory) &&
    (filterBrand === "All Brands" || product.brand === filterBrand)
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Dresses": return <Sparkles className="h-4 w-4" />;
      case "Luxury Bags": return <Crown className="h-4 w-4" />;
      case "Sneakers": 
      case "Running Shoes": return <Zap className="h-4 w-4" />;
      default: return <Shirt className="h-4 w-4" />;
    }
  };

  const ProductCard = ({ product }: { product: typeof fashionItems[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
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
              {product.season}
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
              Available sizes: {product.sizes.slice(0, 4).join(", ")}{product.sizes.length > 4 ? "..." : ""}
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
              <span>Fashion</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              👗 Fashion 2025
            </h1>
            <p className="text-muted-foreground">
              Stay ahead of the trends with our 2025 fashion collection. Discover the latest styles from top brands with the best prices across all platforms.
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
                  <SelectItem value="newest">Latest 2025 Trends</SelectItem>
                  <SelectItem value="discount">Highest Discount</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Size & Color
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} items found
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
              Load More 2025 Trends
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
