import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfile } from "../utils/hooks/Auth/useAuth";
import Loading from "../components/common/Loading";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { logoutUser } from "../store/features/user";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value.user);
  const { data, isSuccess } = useGetProfile(user?.username);
  const settings_list = [
    { key: 1, name: "Personal Details", route: "/personal-details" },
    { key: 2, name: "Wishlist", route: "/wish-list" },
    { key: 3, name: "Active Coupons", route: "/coupons" },
    { key: 4, name: "Settings", route: "/settings" },
    { key: 5, name: "How It Works", route: "/how-it-works" },
    { key: 6, name: "Terms & Conditions", route: "/terms-and-conditions" },
    { key: 6, name: "Logout", route: "/login" },
  ];

  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }

  const handleItemClick = (name, path) => {
    console.log(path);
    if (name === "Logout") {
      dispatch(logoutUser());
      return navigate(path);
    }
    navigate(path);
  };

  console.log(" profile data ", data);
  return (
    <>
      <Header />
      {isSuccess ? (
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ marginLeft: { xs: 2, sm: 0 }, marginRight: { xs: 2, sm: 0 } }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={4}
            >
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Person sx={{ color: "white" }} />
              </Avatar>
              <Typography variant="h5" sx={{ mt: 2 }}>
                {data[0].fullname ? data[0].fullname : ""}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, color: "text.secondary" }}
              >
                {data[0].username ? data[0].username : ""}
              </Typography>
            </Box>
            <List
              sx={{
                // display: "flex",
                // flexWrap: "wrap",
                // justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "3rem",
              }}
            >
              {settings_list.map((item) => {
                return (
                  <Box m={1}>
                    <ListItem
                      disablePadding
                      sx={{
                        width: "auto",
                        margin: "0 16px",
                        border: "1px solid black",
                      }}
                      key={item.key}
                    >
                      <ListItemButton
                        onClick={() => handleItemClick(item.name, item.route)}
                      >
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </ListItem>
                  </Box>
                );
              })}
            </List>
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default Profile;
