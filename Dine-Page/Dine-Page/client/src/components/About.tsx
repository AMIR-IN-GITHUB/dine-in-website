import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rooted in Tradition, <span className="text-primary italic">Inspired by Nature</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2024, Savor & Sage was born from a simple belief: food should be honest, beautiful, and shared. Our menu is a celebration of the seasons, sourcing ingredients directly from local farmers who share our commitment to quality.
              </p>
              <p>
                Our Head Chef, Elena Rossi, brings over 15 years of experience from kitchens across Europe, blending rustic Italian techniques with modern sensibilities. Every plate tells a story of heritage and innovation.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-serif text-2xl text-foreground italic">
                "We don't just cook food; we craft memories around the table."
              </p>
              <p className="mt-2 text-sm font-bold text-primary uppercase tracking-wider">
                — Elena Rossi, Head Chef
              </p>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-sm" />
              {/* chef plating food carefully in kitchen */}
              <img
                src="https://pixabay.com/get/gccd8a9fec43ffc7f8eeb3a48c4b2ebfb9c9fd580db16acc83fa452c44051b6723d8c7b7062a0025d67748d6c15c93bd3a528bcaeb655e283eafcd9c99b7dc662_1280.jpg"
                alt="Chef plating food"
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
