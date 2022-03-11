import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const AppCard = ({ title, quantity }) => {
  return (
    <Card sx={{ width: "100%", minHeight: 126 }} className="card">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold" }}>{quantity}</Typography>
        <Button
          size="small"
          className="btn_details"
          sx={{ px: 2, py: 1 }}
          endIcon={
            <ArrowForwardIosIcon sx={{ height: "14px", marginLeft: "18px" }} />
          }
        >
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default AppCard;
