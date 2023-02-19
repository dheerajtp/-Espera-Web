import React from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Sidebar from "../components/common/Sidebar";
import { useGetCoupons } from "../utils/hooks/Coupons/useCoupons";
import { MUICartMainWrap } from "../mui/cart/cart";
import SingleCoupon from "../components/Coupon/SingleCoupon";

function Coupons() {
  let { data, isSuccess } = useGetCoupons();
  return (
    <>
      <Header />
      {isSuccess ? (
        <MUICartMainWrap>
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
        </MUICartMainWrap>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default Coupons;
