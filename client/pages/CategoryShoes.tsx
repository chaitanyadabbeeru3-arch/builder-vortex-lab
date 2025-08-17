import { useState } from "react";
import { Star, Filter, Grid, List, ShoppingCart, Heart, Zap, TrendingUp, Wind, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const shoes = [
  {
    id: 1,
    name: "Nike Air Jordan 4 Retro 2025 'Bred'",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 3456,
    prices: {
      amazon: "₹16,995",
      flipkart: "₹17,495",
      local: "₹17,995"
    },
    originalPrice: "₹19,995",
    discount: "15% OFF",
    bestPrice: "amazon",
    features: ["Air Cushioning", "Premium Leather", "Rubber Outsole"],
    trending: true,
    category: "Basketball",
    brand: "Nike",
    gender: "Unisex",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colorways: ["Black/Red", "White/Red", "Grey/Black"]
  },
  {
    id: 2,
    name: "Adidas Ultraboost 23 2025 Edition",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 2834,
    prices: {
      amazon: "₹14,999",
      flipkart: "₹14,499",
      local: "₹15,500"
    },
    originalPrice: "₹17,999",
    discount: "19% OFF",
    bestPrice: "flipkart",
    features: ["Boost Technology", "Primeknit Upper", "Continental Rubber"],
    trending: true,
    category: "Running",
    brand: "Adidas",
    gender: "Unisex",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colorways: ["Core Black", "Cloud White", "Solar Yellow"]
  },
  {
    id: 3,
    name: "Puma RS-X Efekt 2025 Colorway",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 1567,
    prices: {
      amazon: "₹8,999",
      flipkart: "₹9,499",
      local: "₹9,999"
    },
    originalPrice: "₹12,999",
    discount: "31% OFF",
    bestPrice: "amazon",
    features: ["RS Cushioning", "Mesh Upper", "Rubber Sole"],
    trending: false,
    category: "Lifestyle",
    brand: "Puma",
    gender: "Unisex",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colorways: ["Multi-Color", "Black/White", "Blue/Orange"]
  },
  {
    id: 4,
    name: "Converse Chuck Taylor All Star 2025",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 5678,
    prices: {
      amazon: "₹3,999",
      flipkart: "₹4,299",
      local: "₹4,499"
    },
    originalPrice: "₹5,999",
    discount: "33% OFF",
    bestPrice: "amazon",
    features: ["Canvas Upper", "Rubber Toe Cap", "Classic Design"],
    trending: true,
    category: "Casual",
    brand: "Converse",
    gender: "Unisex",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colorways: ["Black", "White", "Red", "Navy"]
  },
  {
    id: 5,
    name: "New Balance 2002R 2025 'Protection Pack'",
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 1234,
    prices: {
      amazon: "₹11,999",
      flipkart: "₹12,499",
      local: "₹12,999"
    },
    originalPrice: "₹14,999",
    discount: "20% OFF",
    bestPrice: "amazon",
    features: ["N-ergy Cushioning", "Mesh/Suede Upper", "Rubber Outsole"],
    trending: false,
    category: "Lifestyle",
    brand: "New Balance",
    gender: "Unisex",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colorways: ["Grey/Black", "Cream/Brown", "Navy/White"]
  },
  {
    id: 6,
    name: "Reebok Club C 85 Vintage 2025",
    image: "/placeholder.svg",
    rating: 4.3,
    reviews: 2456,
    prices: {
      amazon: "₹5,999",
      flipkart: "₹6,299",
      local: "₹6,599"
    },
    originalPrice: "₹7,999",
    discount: "25% OFF",
    bestPrice: "amazon",
    features: ["Leather Upper", "EVA Midsole", "Rubber Outsole"],
    trending: false,
    category: "Casual",
    brand: "Reebok",
    gender: "Unisex",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colorways: ["White/Green", "White/Navy", "Chalk/Black"]
  },
  {
    id: 7,
    name: "Vans Old Skool 2025 'Checkerboard'",
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 3789,
    prices: {
      amazon: "₹4,999",
      flipkart: "₹5,299",
      local: "₹5,599"
    },
    originalPrice: "₹6,999",
    discount: "29% OFF",
    bestPrice: "amazon",
    features: ["Canvas/Suede Upper", "Waffle Outsole", "Padded Collar"],
    trending: true,
    category: "Skate",
    brand: "Vans",
    gender: "Unisex",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colorways: ["Black/White Check", "True White", "Racing Red"]
  },
  {
    id: 8,
    name: "Asics Gel-Lyte III OG 2025 Retro",
    image: "/placeholder.svg",
    rating: 4.4,
    reviews: 1890,
    prices: {
      amazon: "₹9,999",
      flipkart: "₹10,499",
      local: "₹10,999"
    },
    originalPrice: "₹12,999",
    discount: "23% OFF",
    bestPrice: "amazon",
    features: ["GEL Technology", "Split Tongue", "Suede/Mesh Upper"],
    trending: false,
    category: "Lifestyle",
    brand: "Asics",
    gender: "Unisex",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colorways: ["White/Blue", "Black/Red", "Grey/Orange"]
  }
];

const categories = ["All", "Running", "Basketball", "Casual", "Lifestyle", "Skate"];
const brands = ["All Brands", "Nike", "Adidas", "Puma", "Converse", "New Balance", "Reebok", "Vans", "Asics"];

export default function CategoryShoes() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All Brands");

  const filteredProducts = shoes.filter(product => 
    (filterCategory === "All" || product.category === filterCategory) &&
    (filterBrand === "All Brands" || product.brand === filterBrand)
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Running": return <Wind className="h-4 w-4" />;
      case "Basketball": return <Zap className="h-4 w-4" />;
      case "Skate": return <Mountain className="h-4 w-4" />;
      default: return <TrendingUp className="h-4 w-4" />;
    }
  };

  const ProductCard = ({ product }: { product: typeof shoes[0] }) => (
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
              {product.gender} • Sizes: {product.sizes.slice(0, 3).join(", ")}+
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
              Colors: {product.colorways.slice(0, 2).join(", ")}{product.colorways.length > 2 ? "..." : ""}
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
              <span>Shoes</span>
            </div>
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
              👟 Shoes & Footwear 2025
            </h1>
            <p className="text-muted-foreground">
              Step into 2025 with our latest collection of shoes from top brands. Find the perfect pair for running, casual wear, sports, and lifestyle with the best prices guaranteed.
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
                {filteredProducts.length} shoes found
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
              Load More 2025 Footwear
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
