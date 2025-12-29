import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Savor & Sage</h3>
            <p className="max-w-xs leading-relaxed text-white/60">
              A dining destination celebrating the art of honest food and good company.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#reservations" className="hover:text-primary transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6">Find Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-primary shrink-0" size={18} />
                <p>123 Culinary Avenue,<br />Flavor District, NY 10012</p>
              </div>
              
              {/* Fake Map */}
              <div className="mt-6 w-full h-40 bg-white/10 rounded-md overflow-hidden relative group cursor-pointer">
                 {/* Map Placeholder Image */}
                 <img 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
                   alt="Map Location"
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="bg-black/50 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">View on Google Maps</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; 2024 Savor & Sage Restaurant. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
