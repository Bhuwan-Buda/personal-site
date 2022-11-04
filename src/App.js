import "./App.css";
import Layout from "./Components/Layout";
import PrivateRoutes from "./Routes/PrivateRoutes";

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
