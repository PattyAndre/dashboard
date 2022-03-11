import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import shoe from "../../assets/img/shoe.png";
import { Typography } from "@mui/material";

function createData(name, date, sku, category, quantity, price) {
  return { name, date, sku, category, quantity, price };
}

const rows = [
  createData(
    "Zapatos elegantes para caballeros",
    "No aplica",
    "0212122121021012221",
    "Zapatos para caballeros",
    255,
    1223.25
  ),
  createData(
    "Zapatos elegantes para caballeros",
    "No aplica",
    "0212122121021012221",
    "Zapatos para caballeros",
    255,
    1223.25
  ),
  createData(
    "Zapatos elegantes para caballeros",
    "No aplica",
    "0212122121021012221",
    "Zapatos para caballeros",
    255,
    1223.25
  ),
  createData(
    "Zapatos elegantes para caballeros",
    "No aplica",
    "0212122121021012221",
    "Zapatos para caballeros",
    255,
    1223.25
  ),
  createData(
    "Zapatos elegantes para caballeros",
    "No aplica",
    "0212122121021012221",
    "Zapatos para caballeros",
    255,
    1223.25
  ),
];

export default function AppTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex" }}>
                  <img src={shoe} alt="product" width={80} height={80} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography
                      component="label"
                      sx={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      Nombre
                    </Typography>
                    <Typography component="label" sx={{ fontSize: "14px" }}>
                      {row.name}
                    </Typography>
                    <Typography
                      component="label"
                      sx={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      SKU: {row.sku}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    component="label"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Fecha de vencimiento
                  </Typography>
                  <Typography component="label" sx={{ fontSize: "14px" }}>
                    {row.date}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    component="label"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Categoria del producto
                  </Typography>
                  <Typography component="label" sx={{ fontSize: "14px" }}>
                    {row.category}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    component="label"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Cantidad de existencias
                  </Typography>
                  <Typography component="label" sx={{ fontSize: "14px" }}>
                    {row.quantity} / unidades
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    component="label"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Precio
                  </Typography>
                  <Typography component="label" sx={{ fontSize: "14px" }}>
                    Q. {row.price}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
