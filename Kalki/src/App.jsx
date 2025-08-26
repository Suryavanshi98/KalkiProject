import Philosophy from "./components/Philosophy";
import Ecosystem from "./components/Ecosystem";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Layout from "./components/layout";

export default function App() {
  return (
    <Layout>
      <Philosophy />
      <Ecosystem />
      <Projects />
      <ContactForm />
    </Layout>
  );
}
