import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Hero from "@/components/home/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
