import React from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Sidebar from "../components/common/Sidebar";
import { useGetCoupons } from "../utils/hooks/Coupons/useCoupons";
import { MUICouponMainWrap } from "../mui/cart/cart";
import SingleCoupon from "../components/Coupon/SingleCoupon";
import { useSelector } from "react-redux";

function Coupons() {
  const user = useSelector((state) => state.user.value.user);
  let { data, isSuccess } = useGetCoupons(user.user_id);
  return (
    <>
      <Header />
      {isSuccess ? (
        <MUICouponMainWrap>
          {data.length === 0 ? (
            <p>Nothing to show here</p>
          ) : (
            data.map((item) => {
              return (
                <SingleCoupon
                  key={item.id}
                  coupen={item.coupen}
                  order_date={item.order_date}
                  con_enddate={item.con_enddate}
                  con_id={item.con_id}
                  pr_price={item.pr_price}
                />
              );
            })
          )}
        </MUICouponMainWrap>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default Coupons;
