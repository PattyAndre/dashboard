import Card from "@mui/material/Card";

const GradientCard = ({ children, height, mt, px, width }) => {
  return (
    <Card
      sx={{
        minWidth: { width },
        minHeight: { height },
        mt: { mt },
        px: { px },
      }}
      className="gradient_card"
    >
      {children}
    </Card>
  );
};

export default GradientCard;
