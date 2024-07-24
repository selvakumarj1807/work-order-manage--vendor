import {  styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { SimpleCard } from "app/components";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

export default function OrderHistory() {
  return (
    <Container>
      <SimpleCard title="Order History">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
