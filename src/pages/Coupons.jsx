import React from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Sidebar from "../components/common/Sidebar";
import { useGetCoupons } from "../utils/hooks/Coupons/useCoupons";
import { MUICartMainWrap } from "../mui/cart/cart";

function Coupons() {
  let { data, isSuccess } = useGetCoupons();
  return (
    <>
      <Header />
      {isSuccess ? (
        <MUICartMainWrap>
          {data.length === 0
            ? "Nothing Here"
            : data.map((item) => {
                return <h1>{item}</h1>;
              })}
        </MUICartMainWrap>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default Coupons;
