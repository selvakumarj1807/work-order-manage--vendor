import { useState } from "react";
import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "Maruti k15",
    num: "#INV-12345",
  },
  {
    num: "#INV-12345",
    name: "Hyundai Venue 1.5 CRDi MT S+",
  },
  {
    num: "#INV-12345",
    name: "Tata Tiago XM Revotron iCNG",
  },
  {
    num: "#INV-12345",
    name: "Mahindra 2024 Mahindra Scorpio-N 2.2 D Z8L 6 Seat",
  },
  {
    num: "#INV-12345",
    name: "Honda 2023 Honda Elevate 1.5 I-VTEC ZX",
  },
  {
    num: "#INV-12345",
    name: "Skoda 1 Diesel Engine and 3 Petrol Engine",
  },
  {
    num: "#INV-12345",
    name: "Renault Inline-4",
  },
];

export default function PaginationTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Invoice Number</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell align="left">{subscriber.num}</TableCell>
                <TableCell align="center">{subscriber.name}</TableCell>
                <TableCell align="center">
                  <Button>
                    <Link
                      to="/dashboard/order/payment"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Pay{" "}
                    </Link>{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
}
