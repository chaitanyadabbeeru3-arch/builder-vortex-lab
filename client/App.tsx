import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CategoryElectronics from "./pages/CategoryElectronics";
import CategoryHomeAppliances from "./pages/CategoryHomeAppliances";
import CategoryFashion from "./pages/CategoryFashion";
import CategorySmartwatches from "./pages/CategorySmartwatches";
import CategoryTraditionalWatches from "./pages/CategoryTraditionalWatches";
import CategoryShoes from "./pages/CategoryShoes";
import HotDeals from "./pages/HotDeals";
import Stores from "./pages/Stores";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Category pages */}
          <Route path="/category/electronics" element={<CategoryElectronics />} />
          <Route path="/category/home-appliances" element={<CategoryHomeAppliances />} />
          <Route path="/category/fashion" element={<CategoryFashion />} />
          <Route path="/category/smartwatches" element={<CategorySmartwatches />} />
          <Route path="/category/traditional-watches" element={<CategoryTraditionalWatches />} />
          <Route path="/category/shoes" element={<CategoryShoes />} />

          {/* Feature pages */}
          <Route path="/deals" element={<HotDeals />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/compare" element={
            <Placeholder
              title="Price Comparison Tool"
              description="Advanced price comparison tool with historical data and price alerts."
              features={["Price history tracking", "Price drop alerts", "Bulk comparison", "Export data", "Advanced filters"]}
            />
          } />
          <Route path="/product/:id" element={
            <Placeholder
              title="Product Details"
              description="Detailed product information with comprehensive price comparison."
              features={["Product specifications", "User reviews", "Price history", "Similar products", "Buy now options"]}
            />
          } />

          {/* User pages */}
          <Route path="/forgot-password" element={
            <Placeholder
              title="Reset Password"
              description="Reset your password to regain access to your PriceCompare account."
            />
          } />
          <Route path="/help" element={
            <Placeholder
              title="Help Center"
              description="Find answers to frequently asked questions and get support."
            />
          } />
          <Route path="/contact" element={
            <Placeholder
              title="Contact Us"
              description="Get in touch with our customer support team for assistance."
            />
          } />
          <Route path="/privacy" element={
            <Placeholder
              title="Privacy Policy"
              description="Learn how we protect and handle your personal information."
            />
          } />
          <Route path="/terms" element={
            <Placeholder
              title="Terms of Service"
              description="Read our terms of service and user agreement."
            />
          } />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
