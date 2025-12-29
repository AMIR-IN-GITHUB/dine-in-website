import { Clock, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ReservationSection() {
  const phoneNumber = "+1 (555) 123-4567";
  const email = "reservations@savorandsage.com";
  
  return (
    <section id="reservations" className="py-24 relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Book Your Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Reservations</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Join us for an unforgettable evening. For parties of 8 or more, please contact us directly to discuss our private dining options.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Opening Hours</h4>
                  <p className="text-white/60">Mon-Sun: 5:00 PM - 11:00 PM</p>
                  <p className="text-white/60">Happy Hour: 5:00 PM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Direct Contact</h4>
                  <p className="text-white/60">{phoneNumber}</p>
                  <p className="text-white/60">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location</h4>
                  <p className="text-white/60">123 Culinary Avenue</p>
                  <p className="text-white/60">Flavor District, NY 10012</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-foreground p-8 md:p-10 rounded-lg shadow-2xl flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl font-bold mb-4">Make a Reservation</h3>
            <p className="text-muted-foreground mb-8">
              Ready to dine with us? Contact us directly to book your table. We recommend reservations at least 24 hours in advance.
            </p>
            
            <div className="space-y-4">
              <Button
                asChild
                data-testid="button-call-reservation"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg shadow-lg shadow-primary/20"
              >
                <a href={`tel:${phoneNumber.replace(/[^0-9+]/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call to Reserve
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                data-testid="button-email-reservation"
                className="w-full py-6 text-lg"
              >
                <a href={`mailto:${email}?subject=Reservation Request`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              For same-day reservations, please call directly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
