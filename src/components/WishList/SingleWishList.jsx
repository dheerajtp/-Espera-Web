import React from "react";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
  styled,
  CardActions,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { BASE_URL } from "../../configuration";

const ScrollableCardContent = styled(CardContent)({
  maxWidth: "50%",
  overflowX: "auto",
});

function SingleWishList({
  image,
  con_win,
  con_id,
  wishitem_id,
  con_discription,
  con_spots,
  con_total_spots,
}) {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Card
        sx={{ display: "flex", minWidth: 400, maxWidth: 400, maxHeight: 350 }}
      >
        <img
          src={`${BASE_URL}images/contest_cover/${image}`}
          alt={con_win}
          style={{ minWidth: "50%", objectFit: "cover" }}
        />
        <ScrollableCardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "200px",
          }}
        >
          <Typography component="div" variant="h5" mt={10}>
            {con_win}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {con_id}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {con_discription}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {con_spots}/{con_total_spots}
          </Typography>
          <CardActions sx={{ alignSelf: "flex-end" }}>
            <IconButton>
              <Delete />
            </IconButton>
          </CardActions>
        </ScrollableCardContent>
      </Card>
    </Grid>
  );
}

export default SingleWishList;
