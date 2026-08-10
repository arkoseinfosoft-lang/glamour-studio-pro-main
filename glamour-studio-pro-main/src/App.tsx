import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Layout>
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="gallery"><Gallery /></section>
        <section id="packages"><Packages /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
