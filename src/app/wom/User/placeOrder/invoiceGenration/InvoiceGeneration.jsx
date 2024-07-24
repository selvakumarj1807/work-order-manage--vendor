import React from "react";
import { Stack } from "@mui/material";
import { SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";

const InvoiceGeneration = () => {
  return (
    <div>
      <Stack spacing={3}>
        {/* <SimpleCard title="Product invoice Generation"> */}
        <SimpleCard>
          <SimpleForm />
        </SimpleCard>
      </Stack>
    </div>
  );
};

export default InvoiceGeneration;
