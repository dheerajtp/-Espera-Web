import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { MUICartHeader } from "../mui/cart/cart";
import { useGetCartItems } from "../utils/hooks/Cart/useCart";
import { useSelector } from "react-redux";
import Loading from "../components/common/Loading";
import MyCartItem from "../components/Cart/MyCartItem";
import { MUICouponMainWrap } from "../mui/cart/cart";
import { Navigate } from "react-router-dom";

function MyCart() {
  const user = useSelector((state) => state.user.value.user);
  let { data, isSuccess } = useGetCartItems(user.user_id);
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <MUICartHeader />
      {isSuccess ? (
        <MUICouponMainWrap>
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
        </MUICouponMainWrap>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default MyCart;
