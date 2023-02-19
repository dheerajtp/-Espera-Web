import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { MUICartHeader } from "../mui/cart/cart";
import { useGetCartItems } from "../utils/hooks/Cart/useCart";
import { useSelector } from "react-redux";
import Loading from "../components/common/Loading";
import MyCartItem from "../components/Cart/MyCartItem";
import { MUICartMainWrap } from "../mui/cart/cart";

function MyCart() {
  const user = useSelector((state) => state.user.value.user);
  let { data, isSuccess } = useGetCartItems(user.id);
  return (
    <>
      <Header />
      <MUICartHeader />
      {isSuccess ? (
        <MUICartMainWrap>
          {data.map((item) => {
            return (
              <MyCartItem
                key={item.order_id}
                quantity={item.quantity}
                pr_name={item.pr_name}
                con_win={item.con_win}
                image={item.con_thumbnails}
                pr_price={item.pr_price}
              />
            );
          })}
        </MUICartMainWrap>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default MyCart;
