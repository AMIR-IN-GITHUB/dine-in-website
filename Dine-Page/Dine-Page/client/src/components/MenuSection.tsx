import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { menuItems, type MenuItem } from "@/data/menu";

const categories = [
  { id: "all", label: "All Items" },
  { id: "appetizer", label: "Appetizers" },
  { id: "main", label: "Main Courses" },
  { id: "dessert", label: "Desserts" },
  { id: "drink", label: "Drinks" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Discover Flavors</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">Our Seasonal Menu</h2>
          <p className="text-muted-foreground">
            Carefully curated dishes featuring the finest ingredients of the season.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              data-testid={`button-category-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white dark:bg-white/10 text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto"
        >
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
          
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No items found in this category.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid={`card-menu-item-${item.id}`}
      className="group flex gap-4 md:gap-6 items-start p-4 hover:bg-white dark:hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-border/40"
    >
      {item.imageUrl && (
         <div className="w-24 h-24 shrink-0 overflow-hidden rounded-md bg-muted">
           <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
         </div>
      )}
      
      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-2 border-b border-dotted border-muted-foreground/30 pb-1">
          <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="font-bold text-lg text-primary ml-4">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
