import Header from "../../components/Header";
import Products from "../products/Products";
import Steps from "../../components/Steps";
import ContactForm from "../../components/Contact";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Steps />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
