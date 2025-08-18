// Comprehensive product database for PriceCompare website
export interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  keywords: string[];
  prices: {
    amazon: { price: string; discount: string; originalPrice: string; available: boolean };
    flipkart: { price: string; discount: string; originalPrice: string; available: boolean };
    localStore: {
      price: string;
      discount: string;
      originalPrice: string;
      available: boolean;
      storeName: string;
      address: string;
      coordinates: { lat: number; lng: number };
      phone: string;
      distance: string;
    };
  };
  bestPrice: string;
  features: string[];
}

export const allProducts: Product[] = [
  // Electronics - Smartphones
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra 256GB",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 3247,
    category: "smartphone",
    brand: "Samsung",
    keywords: ["samsung", "galaxy", "s24", "ultra", "android", "smartphone", "mobile", "phone"],
    prices: {
      amazon: { price: "₹1,24,999", discount: "15% OFF", originalPrice: "₹1,46,999", available: true },
      flipkart: { price: "₹1,26,999", discount: "13% OFF", originalPrice: "₹1,46,999", available: true },
      localStore: {
        price: "₹1,28,500",
        discount: "12% OFF",
        originalPrice: "₹1,46,999",
        available: true,
        storeName: "Mobile World",
        address: "MG Road, Brigade Road, Bangalore",
        coordinates: { lat: 12.9716, lng: 77.5946 },
        phone: "+91 98765 43210",
        distance: "0.8 km"
      }
    },
    bestPrice: "amazon",
    features: ["200MP Camera", "S Pen", "Titanium Build", "AI Features"]
  },
  
  // Gym Equipment
  {
    id: 20,
    title: "Powermax Fitness TDM-98 Treadmill",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 1456,
    category: "gym-equipment",
    brand: "Powermax",
    keywords: ["treadmill", "gym", "fitness", "exercise", "powermax", "cardio", "running"],
    prices: {
      amazon: { price: "₹45,999", discount: "20% OFF", originalPrice: "₹57,499", available: true },
      flipkart: { price: "₹47,999", discount: "17% OFF", originalPrice: "₹57,499", available: true },
      localStore: {
        price: "₹49,500",
        discount: "14% OFF",
        originalPrice: "₹57,499",
        available: true,
        storeName: "Fitness World",
        address: "Koramangala, Bangalore",
        coordinates: { lat: 12.9279, lng: 77.6271 },
        phone: "+91 98765 43220",
        distance: "2.1 km"
      }
    },
    bestPrice: "amazon",
    features: ["2.5 HP Motor", "Manual Incline", "Heart Rate Sensor", "Safety Key"]
  },

  {
    id: 21,
    title: "Boldfit Adjustable Dumbbells Set",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 2134,
    category: "gym-equipment",
    brand: "Boldfit",
    keywords: ["dumbbells", "weights", "gym", "fitness", "strength", "boldfit", "adjustable"],
    prices: {
      amazon: { price: "₹2,999", discount: "25% OFF", originalPrice: "₹3,999", available: true },
      flipkart: { price: "₹3,199", discount: "20% OFF", originalPrice: "₹3,999", available: true },
      localStore: {
        price: "₹3,399",
        discount: "15% OFF",
        originalPrice: "₹3,999",
        available: true,
        storeName: "Sports Hub",
        address: "Commercial Street, Bangalore",
        coordinates: { lat: 12.9817, lng: 77.6098 },
        phone: "+91 98765 43221",
        distance: "1.2 km"
      }
    },
    bestPrice: "amazon",
    features: ["10kg x 2", "Adjustable Weight", "Anti-Slip Grip", "Durable Material"]
  },

  // Cosmetics
  {
    id: 30,
    title: "Lakme Absolute Perfect Radiance Foundation",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 3456,
    category: "cosmetics",
    brand: "Lakme",
    keywords: ["lakme", "foundation", "makeup", "cosmetics", "beauty", "skin", "radiance"],
    prices: {
      amazon: { price: "₹899", discount: "18% OFF", originalPrice: "₹1,095", available: true },
      flipkart: { price: "₹925", discount: "15% OFF", originalPrice: "₹1,095", available: true },
      localStore: {
        price: "₹950",
        discount: "13% OFF",
        originalPrice: "₹1,095",
        available: true,
        storeName: "Beauty Palace",
        address: "UB City Mall, Bangalore",
        coordinates: { lat: 12.9698, lng: 77.5954 },
        phone: "+91 98765 43222",
        distance: "1.5 km"
      }
    },
    bestPrice: "amazon",
    features: ["SPF 23", "All Day Coverage", "Natural Finish", "Oil Control"]
  },

  {
    id: 31,
    title: "Mamaearth Vitamin C Face Serum",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 5678,
    category: "cosmetics",
    brand: "Mamaearth",
    keywords: ["mamaearth", "vitamin c", "serum", "skincare", "natural", "face", "glow"],
    prices: {
      amazon: { price: "₹599", discount: "25% OFF", originalPrice: "₹799", available: true },
      flipkart: { price: "₹629", discount: "21% OFF", originalPrice: "₹799", available: true },
      localStore: {
        price: "₹649",
        discount: "19% OFF",
        originalPrice: "₹799",
        available: true,
        storeName: "Natural Beauty",
        address: "Forum Mall, Bangalore",
        coordinates: { lat: 12.9279, lng: 77.6271 },
        phone: "+91 98765 43223",
        distance: "3.2 km"
      }
    },
    bestPrice: "amazon",
    features: ["20% Vitamin C", "Natural Ingredients", "Anti-Aging", "Brightening"]
  },

  // Men's Fashion
  {
    id: 40,
    title: "Allen Solly Men's Slim Fit Casual Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
    rating: 4.1,
    reviews: 2345,
    category: "mens-fashion",
    brand: "Allen Solly",
    keywords: ["allen solly", "mens", "shirt", "casual", "slim fit", "fashion", "clothing"],
    prices: {
      amazon: { price: "₹1,199", discount: "40% OFF", originalPrice: "₹1,999", available: true },
      flipkart: { price: "₹1,249", discount: "38% OFF", originalPrice: "₹1,999", available: true },
      localStore: {
        price: "₹1,299",
        discount: "35% OFF",
        originalPrice: "₹1,999",
        available: true,
        storeName: "Fashion Central",
        address: "Commercial Street, Bangalore",
        coordinates: { lat: 12.9817, lng: 77.6098 },
        phone: "+91 98765 43224",
        distance: "1.2 km"
      }
    },
    bestPrice: "amazon",
    features: ["100% Cotton", "Slim Fit", "Machine Washable", "Collar Shirt"]
  },

  // Women's Fashion
  {
    id: 50,
    title: "Biba Women's Anarkali Kurta Set",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 1876,
    category: "womens-fashion",
    brand: "Biba",
    keywords: ["biba", "womens", "anarkali", "kurta", "indian", "ethnic", "fashion", "dress"],
    prices: {
      amazon: { price: "₹2,499", discount: "50% OFF", originalPrice: "₹4,999", available: true },
      flipkart: { price: "₹2,599", discount: "48% OFF", originalPrice: "₹4,999", available: true },
      localStore: {
        price: "₹2,699",
        discount: "46% OFF",
        originalPrice: "₹4,999",
        available: true,
        storeName: "Ethnic Wear Store",
        address: "MG Road, Bangalore",
        coordinates: { lat: 12.9716, lng: 77.5946 },
        phone: "+91 98765 43225",
        distance: "0.8 km"
      }
    },
    bestPrice: "amazon",
    features: ["Cotton Fabric", "3/4 Sleeves", "Anarkali Style", "Matching Dupatta"]
  },

  // Furniture
  {
    id: 60,
    title: "Godrej Interio Engineered Wood Study Table",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 1234,
    category: "furniture",
    brand: "Godrej Interio",
    keywords: ["godrej", "study table", "furniture", "desk", "wood", "home", "office"],
    prices: {
      amazon: { price: "₹8,999", discount: "25% OFF", originalPrice: "₹11,999", available: true },
      flipkart: { price: "₹9,299", discount: "22% OFF", originalPrice: "₹11,999", available: true },
      localStore: {
        price: "₹9,599",
        discount: "20% OFF",
        originalPrice: "₹11,999",
        available: true,
        storeName: "Furniture World",
        address: "Koramangala, Bangalore",
        coordinates: { lat: 12.9279, lng: 77.6271 },
        phone: "+91 98765 43226",
        distance: "2.1 km"
      }
    },
    bestPrice: "amazon",
    features: ["Engineered Wood", "Multiple Drawers", "Study Lamp Space", "Easy Assembly"]
  },

  {
    id: 61,
    title: "Urban Ladder Foldable Study Chair",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
    rating: 4.0,
    reviews: 987,
    category: "furniture",
    brand: "Urban Ladder",
    keywords: ["urban ladder", "chair", "study", "furniture", "foldable", "ergonomic", "office"],
    prices: {
      amazon: { price: "₹4,999", discount: "30% OFF", originalPrice: "₹7,142", available: true },
      flipkart: { price: "₹5,199", discount: "27% OFF", originalPrice: "₹7,142", available: true },
      localStore: {
        price: "₹5,399",
        discount: "24% OFF",
        originalPrice: "₹7,142",
        available: true,
        storeName: "Home Comfort",
        address: "Indiranagar, Bangalore",
        coordinates: { lat: 12.9784, lng: 77.6408 },
        phone: "+91 98765 43227",
        distance: "2.8 km"
      }
    },
    bestPrice: "amazon",
    features: ["Ergonomic Design", "Foldable", "Height Adjustable", "Cushioned Seat"]
  },

  // Electrical Items
  {
    id: 70,
    title: "Havells Ceiling Fan 1200mm",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 2456,
    category: "electrical",
    brand: "Havells",
    keywords: ["havells", "ceiling fan", "electrical", "home", "appliance", "1200mm"],
    prices: {
      amazon: { price: "₹2,499", discount: "20% OFF", originalPrice: "₹3,124", available: true },
      flipkart: { price: "₹2,599", discount: "17% OFF", originalPrice: "₹3,124", available: true },
      localStore: {
        price: "₹2,699",
        discount: "14% OFF",
        originalPrice: "₹3,124",
        available: true,
        storeName: "Electrical Hub",
        address: "Commercial Street, Bangalore",
        coordinates: { lat: 12.9817, lng: 77.6098 },
        phone: "+91 98765 43228",
        distance: "1.2 km"
      }
    },
    bestPrice: "amazon",
    features: ["1200mm Sweep", "5 Star Rated", "3 Speed Control", "2 Year Warranty"]
  },

  // Home Decor
  {
    id: 80,
    title: "ExclusiveLane Wooden Wall Clock",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 876,
    category: "home-decor",
    brand: "ExclusiveLane",
    keywords: ["exclusivelane", "wall clock", "wooden", "home decor", "decorative", "handcrafted"],
    prices: {
      amazon: { price: "₹1,899", discount: "24% OFF", originalPrice: "₹2,499", available: true },
      flipkart: { price: "₹1,949", discount: "22% OFF", originalPrice: "₹2,499", available: true },
      localStore: {
        price: "₹1,999",
        discount: "20% OFF",
        originalPrice: "₹2,499",
        available: true,
        storeName: "Decor Studio",
        address: "UB City Mall, Bangalore",
        coordinates: { lat: 12.9698, lng: 77.5954 },
        phone: "+91 98765 43229",
        distance: "1.5 km"
      }
    },
    bestPrice: "amazon",
    features: ["Handcrafted Wood", "Silent Movement", "12 Hour Display", "Artistic Design"]
  },

  {
    id: 81,
    title: "TIED RIBBONS Artificial Plant Pot",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    rating: 4.1,
    reviews: 1345,
    category: "home-decor",
    brand: "TIED RIBBONS",
    keywords: ["tied ribbons", "artificial plant", "pot", "home decor", "green", "decoration"],
    prices: {
      amazon: { price: "₹599", discount: "40% OFF", originalPrice: "₹999", available: true },
      flipkart: { price: "₹629", discount: "37% OFF", originalPrice: "₹999", available: true },
      localStore: {
        price: "₹649",
        discount: "35% OFF",
        originalPrice: "₹999",
        available: true,
        storeName: "Garden Decor",
        address: "Forum Mall, Bangalore",
        coordinates: { lat: 12.9279, lng: 77.6271 },
        phone: "+91 98765 43230",
        distance: "3.2 km"
      }
    },
    bestPrice: "amazon",
    features: ["Artificial Plant", "Ceramic Pot", "No Maintenance", "Realistic Look"]
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return allProducts;
  return allProducts.filter(product => product.category === category);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return allProducts;
  
  const searchTerm = query.toLowerCase().trim();
  
  return allProducts.filter(product => {
    const titleMatch = product.title.toLowerCase().includes(searchTerm);
    const keywordMatch = product.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm) ||
      searchTerm.includes(keyword.toLowerCase())
    );
    const brandMatch = product.brand.toLowerCase().includes(searchTerm);
    const categoryMatch = product.category.toLowerCase().includes(searchTerm);
    
    return titleMatch || keywordMatch || brandMatch || categoryMatch;
  });
};

// Helper function to get local stores
export const getLocalStores = () => {
  const stores = allProducts.map(product => product.prices.localStore);
  // Remove duplicates by store name
  const uniqueStores = stores.filter((store, index, self) => 
    index === self.findIndex(s => s.storeName === store.storeName)
  );
  return uniqueStores;
};
