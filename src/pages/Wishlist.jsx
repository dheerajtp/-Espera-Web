import React from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Sidebar from "../components/common/Sidebar";
import SingleWishList from "../components/WishList/SingleWishList";
import { MUICouponMainWrap } from "../mui/cart/cart";
import { useGetWishList } from "../utils/hooks/WishList/useWishList";
import { useSelector } from "react-redux";

function Wishlist() {
  const user = useSelector((state) => state.user.value.user);
  let { data, isSuccess } = useGetWishList(user.user_id);
  return (
    <>
      <Header />
      {isSuccess ? (
        <MUICouponMainWrap>
          {data.data.length === 0
            ? "Nothing Here"
            : data.data.map((item) => {
                return (
                  <SingleWishList
                    key={item.id}
                    image={item.con_thumbnails}
                    con_win={item.con_win}
                    con_id={item.con_id}
                    wishitem_id={item.wishitem_id}
                    con_discription={item.con_discription}
                    con_spots={item.con_spots}
                    con_total_spots={item.con_total_spots}
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

export default Wishlist;
