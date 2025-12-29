import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Menu Routes
  app.get(api.menu.list.path, async (req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.get(api.menu.get.path, async (req, res) => {
    const item = await storage.getMenuItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(item);
  });

  // Reservation Routes
  app.post(api.reservations.create.path, async (req, res) => {
    try {
      const input = api.reservations.create.input.parse(req.body);
      const reservation = await storage.createReservation(input);
      res.status(201).json(reservation);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Contact Routes
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingItems = await storage.getMenuItems();
  if (existingItems.length === 0) {
    console.log("Seeding database with menu items...");
    
    // Appetizers
    await storage.createMenuItem({
      name: "Truffle Arancini",
      description: "Crispy risotto balls infused with black truffle, served with garlic aioli.",
      price: 1400,
      category: "Appetizers",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600"
    });
    await storage.createMenuItem({
      name: "Burrata & Heirloom Tomato",
      description: "Fresh burrata, basil pesto, balsamic glaze, and toasted pine nuts.",
      price: 1800,
      category: "Appetizers",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600"
    });

    // Mains
    await storage.createMenuItem({
      name: "Pan-Seared Scallops",
      description: "Jumbo scallops with cauliflower purée, crispy pancetta, and herb oil.",
      price: 3200,
      category: "Mains",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600"
    });
    await storage.createMenuItem({
      name: "Herb-Crusted Lamb Rack",
      description: "Served with fondant potatoes, seasonal greens, and red wine jus.",
      price: 3800,
      category: "Mains",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=600"
    });
    await storage.createMenuItem({
      name: "Wild Mushroom Risotto",
      description: "Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil.",
      price: 2600,
      category: "Mains",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=600"
    });

    // Desserts
    await storage.createMenuItem({
      name: "Dark Chocolate Fondant",
      description: "Warm molten center, served with vanilla bean ice cream.",
      price: 1200,
      category: "Desserts",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
    });
    await storage.createMenuItem({
      name: "Lemon Basil Tart",
      description: "Zesty lemon curd, buttery crust, topped with italian meringue.",
      price: 1100,
      category: "Desserts",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600"
    });

    // Drinks
    await storage.createMenuItem({
      name: "Old Fashioned",
      description: "Bourbon, angostura bitters, sugar cube, orange peel.",
      price: 1500,
      category: "Drinks",
      available: true,
      imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600"
    });
    
    console.log("Seeding complete.");
  }
}
