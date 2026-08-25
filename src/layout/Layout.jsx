import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 blueprint-bg" />
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
