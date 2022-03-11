import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { AppCard, AppNavbar, AppTable } from "./components";
import { Ranking, RANKING_MOCK } from "./mocks/ranking.js";
import { STATISTIC_MOCK } from "./mocks/statistic.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Facturación neta",
    },
  },
};

const labels = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export const data = {
  labels,
  datasets: [
    {
      label: "test",
      data: labels.map(() => faker.datatype.number({ min: 5, max: 10 })),
      borderColor: "#08BFE6",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const App = () => {
  const [statistic, setStatistic] = useState(STATISTIC_MOCK.data);
  const [ranking, setRanking] = useState(RANKING_MOCK.data);

  return (
    <>
      <AppNavbar />
      {/* Wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "62px 100px 40px 120px",
        }}
      >
        {/* Container */}
        <Grid container spacing={2.5} sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Dashboard
            </Typography>
          </Grid>

          {statistic.map((s) => (
            <Grid item xs={4}>
              <AppCard key={s.id} title={s.title} quantity={s.quantity} />
            </Grid>
          ))}

          <Grid item xs={8}>
            <Card
              sx={{
                minHeight: 448,
              }}
              className="card"
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Estadísticas
                </Typography>
                <span>
                  Consulte de forma rádida las estadísticas de su negocio
                </span>
                <Box>
                  <Line options={options} data={data} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card className="gradient_card">
              <CardContent sx={{ px: 0 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Membresía
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 16 }}>
                  Días restantes:
                </Typography>
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  15 días - 24 horas
                </Typography>
              </CardContent>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                Fecha de expiración:
              </Typography>
              <CardActions sx={{ justifyContent: "space-between", p: 0 }}>
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  15 - 10 - 2020
                </Typography>
                <Button
                  className="btn_notGradient"
                  size="small"
                  endIcon={
                    <ArrowForwardIosIcon
                      sx={{ height: "14px", marginLeft: "10px" }}
                    />
                  }
                  sx={{ px: 2, py: 1 }}
                >
                  Renovar
                </Button>
              </CardActions>{" "}
            </Card>
            <Card className="gradient_card">
              <CardContent sx={{ px: 0 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Traslados
                </Typography>
                <Typography sx={{ fontSize: 16 }} variant="body2">
                  En proceso:
                </Typography>
              </CardContent>
              <Typography sx={{ fontWeight: "bold" }} variant="h5">
                San Isidro a Plaza Bolívar
              </Typography>
              <CardActions sx={{ justifyContent: "end", p: 0 }}>
                <Button
                  className="btn_notGradient"
                  size="small"
                  endIcon={
                    <ArrowForwardIosIcon
                      sx={{ height: "14px", marginLeft: "10px" }}
                    />
                  }
                  sx={{ px: 2, py: 1, mt: 1 }}
                >
                  Más información
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className="card" sx={{ height: 448 }}>
              <CardContent
                className="bg-gradient"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTopLeftRadius: "0.625rem",
                  borderTopRightRadius: "0.625rem",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  color: "#fff",
                }}
              >
                <Typography
                  component="div"
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold", fontSize: "18px" }}
                >
                  Ranking de compradores
                </Typography>
                <CloudDownloadIcon color="inherit" />
              </CardContent>
              {ranking.map((r) => (
                <CardActions key={r.id}>
                  <Box
                    className="box_ranking"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      minHeight: 56,
                    }}
                  >
                    <Box sx={{ p: 1 }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Nombre
                      </Typography>
                      <Typography variant="h6">{r.name}</Typography>
                    </Box>
                    <Box sx={{ p: 1 }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Valor de vida del cliente
                      </Typography>
                      <Typography variant="h6">{r.value}</Typography>
                    </Box>
                  </Box>
                </CardActions>
              ))}
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Card className="card" sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  component="div"
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 0 }}
                >
                  Estadísticas de los compradores
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className="card">
              <CardContent
                className="card"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: "bold", mb: 1 }} variant="h6">
                    Productos
                  </Typography>
                  <span>Consulte y gestione su inventario.</span>
                </Box>
                <Box>
                  <Button
                    className="btn_details"
                    size="small"
                    sx={{ px: 2, py: 1 }}
                    endIcon={
                      <KeyboardArrowDownIcon
                        sx={{ height: "20px", marginLeft: "18px" }}
                      />
                    }
                  >
                    Añadir producto
                  </Button>
                </Box>
              </CardContent>
              <CardContent sx={{ py: 2 }}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ minWidth: 200 }}>
                    <Typography className="black" sx={{ fontSize: 16 }}>
                      Total de productos
                    </Typography>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: "bold" }}
                      variant="h5"
                      className="primary"
                    >
                      152
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: 200 }}>
                    <Typography className="black" sx={{ fontSize: 16 }}>
                      Productos sin stock
                    </Typography>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: "bold" }}
                      variant="h5"
                      className="primary"
                    >
                      22
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: 200 }}>
                    <Typography className="black" sx={{ fontSize: 16 }}>
                      Productos a vencer
                    </Typography>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: "bold" }}
                      variant="h5"
                      className="primary"
                    >
                      12
                    </Typography>
                  </Box>
                  <Box sx={{ minWidth: 200 }}>
                    <Typography className="black" sx={{ fontSize: 16 }}>
                      Productos con bajo inventario
                    </Typography>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: "bold" }}
                      variant="h5"
                      className="primary"
                    >
                      38
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              <AppTable />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default App;
