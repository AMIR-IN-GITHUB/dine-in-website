import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* rustic restaurant interior high ceiling warm lighting */}
        <img
          src="https://pixabay.com/get/gf02b7dd13a5294c86db45e6cf70b3cab3adca60851594a357c2e37e3b1a31a2b68e489294d6eba25c0faed332637ac5e218e8ebcdd36a08620ba0c5d82face2d_1280.jpg"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-primary-foreground/90 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Est. 2024
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            A Culinary <br />
            <span className="text-primary italic">Journey</span>
          </h1>
          <p className="text-white/80 max-w-lg mx-auto text-lg md:text-xl leading-relaxed mb-10">
            Experience the harmony of rustic charm and modern gastronomy in the heart of the city.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#reservations"
              className="min-w-[160px] bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/20"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="min-w-[160px] bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-white/20 transition-all"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
