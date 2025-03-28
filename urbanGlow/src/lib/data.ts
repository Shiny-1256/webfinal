// Types
export type Product = {
  id: string;
  name: string;
  brand?: string;
  category: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription?: string;
  features?: string[];
  images: string[];
  view360Images?: string[];
  colors: string[];
  sizes: string[];
  tags?: string[];
  reviews?: Review[];
  rating: number;
  reviewCount?: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  featured?: boolean;
};

export type Review = {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  userHeight?: string;
  userWeight?: string;
  purchasedSize?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Influencer = {
  id: string;
  name: string;
  image: string;
  followers: string;
  looks: InfluencerLook[];
};

export type InfluencerLook = {
  id: string;
  title: string;
  image: string;
  products: string[]; // Product IDs
};

export type WardrobeItem = {
  id: string;
  name: string;
  category: string;
  color: string;
  image: string;
  season: string[];
};

// Sample data
export const products: Product[] = [
  {
    id: "p1",
    name: "Urban Elegance Blazer",
    brand: "urbanGlow",
    category: "jackets",
    price: 189.99,
    description: "Elevate your wardrobe with this timeless blazer. Crafted with premium materials and a modern fit, this blazer transitions seamlessly from office to evening events. The subtle pattern and structured shoulders create a refined silhouette that flatters any body type.",
    shortDescription: "Premium structured blazer with modern tailoring",
    features: ["Premium cotton blend", "All-season fabric", "Inside pocket", "Breathable lining"],
    images: [
      "/res/w4.jpeg",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=969&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598808503429-896531b62b41?q=80&w=1287&auto=format&fit=crop",
    ],
    view360Images: Array(24).fill("https://images.unsplash.com/photo-1598808503429-896531b62b41?q=80&w=1287&auto=format&fit=crop"),
    colors: ["Black", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["blazer", "formal", "office", "premium"],
    reviews: [
      {
        id: "r1",
        user: "Alex M.",
        rating: 5,
        comment: "Perfect fit and excellent quality. Highly recommend!",
        date: "2023-10-15",
        helpful: 24,
        userHeight: "6'0\"",
        userWeight: "180 lbs",
        purchasedSize: "M"
      },
      {
        id: "r2",
        user: "Jordan T.",
        rating: 4,
        comment: "Great blazer, slightly longer in the arms than expected but still very nice.",
        date: "2023-09-28",
        helpful: 11,
        userHeight: "5'11\"",
        userWeight: "175 lbs",
        purchasedSize: "M"
      }
    ],
    rating: 4.5,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "p2",
    name: "Celestial Silk Dress",
    brand: "urbanGlow",
    category: "dresses",
    price: 159.99,
    salePrice: 129.99,
    description: "Float through your day in the Celestial Silk Dress. This flowing masterpiece features a subtle shimmer that catches the light with every movement. The adjustable waist tie allows for a customized fit, while the breathable silk blend keeps you comfortable all day long.",
    shortDescription: "Flowing silk dress with ethereal shimmer",
    features: ["Premium silk blend", "Adjustable waist", "Side pockets", "Breathable fabric"],
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612722432474-b971cdcea546?q=80&w=1527&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1470&auto=format&fit=crop"
    ],
    view360Images: Array(24).fill("https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1374&auto=format&fit=crop"),
    colors: ["Pearl", "Blush", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["dress", "silk", "elegant", "feminine"],
    reviews: [
      {
        id: "r3",
        user: "Sophia L.",
        rating: 5,
        comment: "This dress is a dream! The fabric feels luxurious and the fit is perfect.",
        date: "2023-11-02",
        helpful: 31,
        userHeight: "5'6\"",
        userWeight: "130 lbs",
        purchasedSize: "S"
      }
    ],
    rating: 5,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "p3",
    name: "Momentum Leather Sneakers",
    brand: "urbanGlow",
    category: "shoes",
    price: 149.99,
    description: "Step into comfort and style with our Momentum Leather Sneakers. Handcrafted with premium leather and featuring our innovative cushion technology, these sneakers provide all-day support without sacrificing style. The minimalist design pairs effortlessly with any outfit.",
    shortDescription: "Premium leather sneakers with cushion technology",
    features: ["Premium leather", "Cushioned insole", "Rubber outsole", "Breathable lining"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1464&auto=format&fit=crop"
    ],
    view360Images: Array(24).fill("https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop"),
    colors: ["White", "Black", "Tan"],
    sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
    tags: ["sneakers", "leather", "comfort", "casual"],
    reviews: [
      {
        id: "r4",
        user: "Michael B.",
        rating: 5,
        comment: "Most comfortable sneakers I've ever owned. Worth every penny!",
        date: "2023-10-20",
        helpful: 42
      },
      {
        id: "r5",
        user: "Emma W.",
        rating: 4,
        comment: "Love the style and comfort. Took a day to break in but now they're perfect.",
        date: "2023-09-15",
        helpful: 17
      }
    ],
    rating: 4.5,
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "p4",
    name: "Sovereign Wool Coat",
    brand: "urbanGlow",
    category: "outerwear",
    price: 299.99,
    description: "Command attention in the Sovereign Wool Coat. This timeless piece features a blend of premium wool and cashmere for unparalleled warmth and softness. The tailored silhouette and distinctive collar create a regal appearance that elevates any winter ensemble.",
    shortDescription: "Luxury wool-cashmere blend coat with tailored fit",
    features: ["Wool-cashmere blend", "Satin lining", "Interior pocket", "Double-breasted design"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591197172062-c718722426b4?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1290&auto=format&fit=crop"
    ],
    view360Images: Array(24).fill("https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1287&auto=format&fit=crop"),
    colors: ["Camel", "Charcoal", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["coat", "wool", "winter", "luxury"],
    reviews: [
      {
        id: "r6",
        user: "Catherine R.",
        rating: 5,
        comment: "Exceptional quality and incredibly warm. I receive compliments every time I wear it!",
        date: "2023-11-15",
        helpful: 29,
        userHeight: "5'4\"",
        userWeight: "125 lbs",
        purchasedSize: "S"
      }
    ],
    rating: 5,
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "p5",
    name: "Gradient Sunset Scarf",
    brand: "urbanGlow",
    category: "accessories",
    price: 79.99,
    salePrice: 59.99,
    description: "Add a touch of artistry to any outfit with the Gradient Sunset Scarf. Hand-dyed with a stunning ombré effect inspired by sunset hues, this luxurious silk scarf transitions beautifully from one shade to another. Versatile in styling, it can be worn as a neck scarf, hair accessory, or bag adornment.",
    shortDescription: "Hand-dyed silk scarf with sunset-inspired ombré",
    features: ["100% silk", "Hand-dyed", "Rolled edges", "Versatile styling"],
    images: [
      "https://images.unsplash.com/photo-1534139263512-2044916cf6f2?q=80&w=1363&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548048214-edf4c9199a6a?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623001691149-3fb2a201dc96?q=80&w=1287&auto=format&fit=crop"
    ],
    view360Images: Array(24).fill("https://images.unsplash.com/photo-1534139263512-2044916cf6f2?q=80&w=1363&auto=format&fit=crop"),
    colors: ["Sunset", "Ocean", "Berry"],
    sizes: ["One Size"],
    tags: ["scarf", "silk", "accessory", "colorful"],
    reviews: [
      {
        id: "r7",
        user: "Olivia K.",
        rating: 5,
        comment: "The colors are even more beautiful in person. Such a versatile piece!",
        date: "2023-10-08",
        helpful: 19
      }
    ],
    rating: 5,
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "p6",
    name: "Structured Canvas Backpack",
    brand: "urbanGlow",
    category: "bags",
    price: 129.99,
    description: "Merge functionality with style in our Structured Canvas Backpack. Crafted from durable water-resistant canvas with premium leather accents, this backpack features multiple compartments including a padded laptop sleeve. The ergonomic design ensures comfort even when fully packed.",
    shortDescription: "Water-resistant canvas backpack with leather accents",
    features: ["Water-resistant canvas", "Leather trim", "Laptop compartment", "Adjustable straps"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575844264771-892081089af5?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1287&auto=format&fit=crop"
    ],
    view360Images: Array(24).fill("https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1469&auto=format&fit=crop"),
    colors: ["Olive", "Navy", "Black"],
    sizes: ["One Size"],
    tags: ["backpack", "canvas", "travel", "daily"],
    reviews: [
      {
        id: "r8",
        user: "Daniel M.",
        rating: 4,
        comment: "Great quality and the perfect size for daily commuting. Highly recommend!",
        date: "2023-09-25",
        helpful: 14
      }
    ],
    rating: 4,
    inStock: true,
    isNew: false,
    isFeatured: false
  }
];

export const categories: Category[] = [
  {
    id: "c1",
    name: "Women's Clothing",
    description: "Discover the latest trends in women's fashion",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: "c2",
    name: "Men's Clothing",
    description: "Elevate your style with our premium menswear",
    image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1287&auto=format&fit=crop"
  },
  {
    id: "c3",
    name: "Accessories",
    description: "Complete your look with our curated accessories",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop"
  },
  {
    id: "c4",
    name: "Shoes",
    description: "Step up your style with our footwear collection",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop"
  }
];

export const influencers: Influencer[] = [
  {
    id: "i1",
    name: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
    followers: "2.3M",
    looks: [
      {
        id: "l1",
        title: "Urban Chic",
        image: "https://images.unsplash.com/photo-1604600152063-67fae8642db1?q=80&w=1287&auto=format&fit=crop",
        products: ["p1", "p3", "p5"]
      },
      {
        id: "l2",
        title: "Weekend Casual",
        image: "https://images.unsplash.com/photo-1601976816449-12f93c20854b?q=80&w=1287&auto=format&fit=crop",
        products: ["p2", "p6"]
      }
    ]
  },
  {
    id: "i2",
    name: "Marcus Wong",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop",
    followers: "1.8M",
    looks: [
      {
        id: "l3",
        title: "Business Forward",
        image: "https://images.unsplash.com/photo-1637916259143-2ab00367faec?q=80&w=1287&auto=format&fit=crop",
        products: ["p1", "p3"]
      }
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  // Get products in the same category or with the same tags
  return products
    .filter(p => 
      p.id !== product.id && 
      (p.category === product.category || 
       p.tags.some(tag => product.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const getFrequentlyBoughtTogether = (product: Product, limit: number = 3): Product[] => {
  // In a real app, this would be based on purchase data
  // For now, we'll return products that complement the current product
  const complementaryCategories: Record<string, string[]> = {
    "jackets": ["shirts", "accessories"],
    "dresses": ["shoes", "accessories"],
    "shoes": ["socks", "accessories"],
    "outerwear": ["sweaters", "accessories"],
    "accessories": ["dresses", "shirts"]
  };
  
  const complementary = complementaryCategories[product.category] || [];
  
  return products
    .filter(p => p.id !== product.id && complementary.includes(p.category))
    .slice(0, limit);
};

// Sample wardrobe items
export const sampleWardrobeItems: WardrobeItem[] = [
  {
    id: "w1",
    name: "Navy Blazer",
    category: "jackets",
    color: "Navy",
    image: "https://images.unsplash.com/photo-1598808503429-896531b62b41?q=80&w=1287&auto=format&fit=crop",
    season: ["Spring", "Fall"]
  },
  {
    id: "w2",
    name: "White Button-up Shirt",
    category: "shirts",
    color: "White",
    image: "https://images.unsplash.com/photo-1566761412152-8190235e0391?q=80&w=1298&auto=format&fit=crop",
    season: ["All Season"]
  },
  {
    id: "w3",
    name: "Dark Wash Jeans",
    category: "pants",
    color: "Blue",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=1315&auto=format&fit=crop",
    season: ["All Season"]
  }
];

// Chat bot responses
export const chatbotResponses = [
  {
    question: "What's in style this season?",
    answer: "This season is all about bold colors and statement pieces. Oversized blazers, wide-leg pants, and chunky accessories are trending. Our Urban Elegance Blazer would be a perfect addition to your seasonal wardrobe!"
  },
  {
    question: "How do I style a blazer?",
    answer: "Blazers are incredibly versatile! For a casual look, pair with a t-shirt and jeans. For business casual, try it with a button-up and chinos. For evening, layer over a silk camisole with tailored pants. Our Urban Elegance Blazer works beautifully for all these scenarios."
  },
  {
    question: "What colors go well with purple?",
    answer: "Purple pairs beautifully with complementary yellows, neutral beiges and creams, cool grays, and even navy blue for a sophisticated look. For a bolder statement, try pairing with emerald green or coral."
  },
  {
    question: "What size should I get?",
    answer: "Our SmartGlow feature can help recommend your perfect size based on your measurements and past purchases. Generally, if you're between sizes, we recommend sizing up for outerwear and relaxed fit items, and sizing down for stretchy fabrics."
  },
  {
    question: "How can I build a capsule wardrobe?",
    answer: "A great capsule wardrobe starts with quality basics in neutral colors that can mix and match easily. Essential pieces include: a well-fitted blazer, white button-up shirt, classic jeans, versatile dress, and comfortable yet stylish shoes. Our Wardrobe Sync feature can help you identify gaps in your collection!"
  }
];

export const getSuggestedOutfits = (wardrobeItems: WardrobeItem[]): Product[] => {
  // In a real app, this would use AI to match with existing wardrobe
  // For now, we'll return products that would complement sample wardrobe
  const categories = wardrobeItems.map(item => item.category);
  const colors = wardrobeItems.map(item => item.color);
  
  // Return products that complement but don't duplicate categories
  return products.filter(product => 
    !categories.includes(product.category) || 
    (product.category === "accessories")
  ).slice(0, 4);
};

export function getProductsByCategory(category: string): Product[] {
  // This is a mock implementation; in a real app, this would filter the actual product data
  // For now, we're returning some sample products for each category
  
  const sampleProducts: Product[] = [
    {
      id: "women1",
      name: "Elegant Summer Dress",
      description: "A beautiful flowing dress perfect for summer occasions.",
      price: 89.99,
      category: "women",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548369735-f548cbe6a294?q=80&w=1920&auto=format&fit=crop"
      ],
      colors: ["White", "Blue", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      rating: 4.5,
      reviewCount: 128,
      inStock: true,
      featured: true
    },
    {
      id: "women2",
      name: "Classic Denim Jacket",
      description: "A timeless denim jacket that goes with everything in your wardrobe.",
      price: 59.99,
      category: "women",
      images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1920&auto=format&fit=crop"
      ],
      colors: ["Blue", "Black", "Light Wash"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.8,
      reviewCount: 95,
      inStock: true,
      featured: false
    },
    {
      id: "men1",
      name: "Tailored Slim Fit Suit",
      description: "A sophisticated suit for formal occasions and business meetings.",
      price: 249.99,
      category: "men",
      images: [
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop"
      ],
      colors: ["Navy", "Charcoal", "Black"],
      sizes: ["38R", "40R", "42R", "44R", "46R"],
      rating: 4.6,
      reviewCount: 72,
      inStock: true,
      featured: true
    },
    {
      id: "men2",
      name: "Casual Linen Shirt",
      description: "A breathable linen shirt perfect for warm weather and casual outings.",
      price: 45.99,
      category: "men",
      images: [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1920&auto=format&fit=crop"
      ],
      colors: ["White", "Beige", "Light Blue"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.3,
      reviewCount: 64,
      inStock: true,
      featured: false
    },
    {
      id: "acc1",
      name: "Leather Tote Bag",
      description: "A spacious and elegant leather tote for everyday use.",
      price: 129.99,
      category: "accessories",
      images: [
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1920&auto=format&fit=crop"
      ],
      colors: ["Brown", "Black", "Tan"],
      sizes: ["One Size"],
      rating: 4.9,
      reviewCount: 183,
      inStock: true,
      featured: true
    },
    {
      id: "acc2",
      name: "Minimal Gold Watch",
      description: "A sophisticated timepiece with a simple, elegant design.",
      price: 199.99,
      category: "accessories",
      images: [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=1920&auto=format&fit=crop"
      ],
      colors: ["Gold", "Silver", "Rose Gold"],
      sizes: ["One Size"],
      rating: 4.7,
      reviewCount: 112,
      inStock: true,
      featured: false
    }
  ];
  
  if (category === "all") {
    return sampleProducts;
  }
  
  return sampleProducts.filter(product => product.category === category);
}
