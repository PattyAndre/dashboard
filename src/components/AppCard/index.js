import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";

const AppCard = ({ title, quantity }) => {
  return (
    <Card
      sx={{ minWidth: 380, minHeight: 126, mr: "1.25rem" }}
      className="card"
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold" }}>{quantity}</Typography>
        <Button size="small" className="btn_details" sx={{ px: 2, py: 1 }}>
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default AppCard;
