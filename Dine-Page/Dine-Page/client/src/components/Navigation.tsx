import { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Our Story" },
    { href: "#menu", label: "Menu" },
    { href: "#reservations", label: "Reservations" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-b border-border/40"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-full text-primary-foreground group-hover:bg-primary/90 transition-colors">
            <ChefHat size={24} />
          </div>
          <span
            className={cn(
              "font-serif text-2xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
          >
            Savor & Sage
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/90"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-black/5"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-md hover:bg-white/10 transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-medium py-2 px-4 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservations"
              className="bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold mt-2"
              onClick={() => setIsOpen(false)}
            >
              Book a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
