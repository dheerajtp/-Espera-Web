import React from "react";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
  styled,
  CardActions,
  Tooltip,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { BASE_URL } from "../../configuration";
import { useRemoveItem } from "../../utils/hooks/WishList/useWishList";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useRemoveItem();

  const onDelete = () => {
    let data = { item_id: wishitem_id };
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data);
        queryClient.invalidateQueries({ queryKey: ["get-user-wishlist"] });
      },
      onError: () => {
        queryClient.invalidateQueries({ queryKey: ["get-user-wishlist"] });
        toast.error("Some error occured");
      },
    });
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ display: "flex", minWidth: 500, maxWidth: 500, maxHeight: 400 }}
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
          <Typography
            component="div"
            variant="h5"
            sx={{
              mt: { xs: 2, md: 11 },
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              lineHeight: { xs: "1.2", md: "1.5" },
            }}
          >
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
            <Tooltip title="Remove from Wish List">
              <IconButton>
                <Delete disabled={isLoading} onClick={onDelete} />
              </IconButton>
            </Tooltip>
          </CardActions>
        </ScrollableCardContent>
      </Card>
    </Grid>
  );
}

export default SingleWishList;
