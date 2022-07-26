import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isOpen = useSelector((state) => state.ui.isShown);

  return (
    <Layout>
      {isOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;