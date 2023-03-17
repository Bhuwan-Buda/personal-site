import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Components/Layout";
import PrivateRoutes from "./Routes/PrivateRoutes";

AOS.init({
  offset: 180,
  delay: 0,
  duration: 1200,
  easing: "ease",
  once: false,
});

function App() {
  return (
    <>
      <Layout>
        <PrivateRoutes />
      </Layout>
    </>
  );
}

export default App;
