import Header from "./Header";
import Footer from "./Footer";
import ParticlesCanvas from "./ParticlesCanvas";

export default function Layout({ children }) {
  return (
    <>
      <ParticlesCanvas />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
