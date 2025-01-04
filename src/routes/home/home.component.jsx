import Header from "../../components/header/Header";
import Products from "../products/Products";
import Steps from "../../components/steps/Steps";
import ContactForm from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Chatbot from "../../components/chatbot/chatbot.component";

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
