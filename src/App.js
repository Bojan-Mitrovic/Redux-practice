import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // let isInit = true;

  useEffect(() => {
    const sendCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: "sending...",
          title: "Sending",
          message: "Sending to server",
        })
      );
      const response = await fetch(
        "https://react-http-ea80c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart failed");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending success",
        })
      );
    };
    // if (isInit) {
    //   isInit = false;
    //   return;
    // }

    sendCart().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
