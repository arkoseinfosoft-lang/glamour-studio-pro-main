import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Grain Overlay for luxury texture */}
      <div className="grain-overlay" />
      
      <Navigation />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
