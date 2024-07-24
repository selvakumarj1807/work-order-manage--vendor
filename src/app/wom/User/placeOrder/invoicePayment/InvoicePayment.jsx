import { Container } from "@mui/material";
import { SimpleCard } from "app/components";
import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
// import PaginationTable from "./PaginationTable";
const InvoicePayment = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <SimpleCard>
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              fontStyle: "italic",
              fontFamily: "-moz-initial",
              fontWeight: "bold",
              fontSize: "35px",
              color: "#0e2a47",
            }}
          >
            Enter Quote No
          </h3>
          <input
            type="text"
            placeholder="#12345"
            style={{
              marginLeft: "40px",
              padding: "10px",
              width: "250px",
              borderRadius: "10px",
              marginTop: "20px",
              fontSize: "30px",
            }}
          />

          <Popup
            trigger={
              <button
                style={{
                  fontStyle: "italic",
                  fontFamily: "-moz-initial",
                  fontWeight: "bold",
                  fontSize: "18px",
                  backgroundColor: "#0e2a47",
                  border: "2px solid #0e2a47",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#fff",
                  marginLeft: "20px",
                }}
              >
                {" "}
                Search
                {/* <Link to='/dashboard/invoice' style={{fontStyle:'italic', fontFamily:'-moz-initial', fontWeight:'bold', fontSize:'18px',  backgroundColor:'#0e2a47', border:'2px solid #0e2a47', padding:'10px', borderRadius:'10px', color:'#fff', marginLeft:'20px'}}> Search</Link> */}
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div style={{ height: "40vh" }}>
                <h3 className="h3" style={{ marginTop: "10px" }}>
                  Quote Information
                </h3>
                <div
                  className="flex"
                  style={{ marginTop: "20px", marginLeft: "100px" }}
                >
                  <div className="head">
                    <h4 style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Invoice Num 
                    </h4>
                    <h4 style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Make/Model/Part 
                    </h4>
                    <h4 style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Year 
                    </h4>

                    <h4 style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Price 
                    </h4>
                  </div>
                  <div className="para" style={{marginTop:'5px', marginLeft:'20px'}}>
                    <p>-   Inv-12345</p>
                    <p>-   Toyota / Camry / A/C Compressor Clutch Only</p>
                    <p>-   2009</p>
                    <p>-   ₹ 450</p>
                  </div>
                </div>
                <div>
                  <button
                    style={{
                      marginTop: "35px",
                      color: "#fff",
                      fontSize: "18px",
                      marginLeft: "40%",
                    }}
                    onClick={() => close()}
                  >
                    <Link
                      to="/dashboard/invoice"
                      style={{ color: "#fff", fontSize: "18px" }}
                    >
                      {" "}
                      Get the Invoice
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <br /> <br />
        {/* <PaginationTable /> */}
      </SimpleCard>
    </Container>
  );
};

export default InvoicePayment;
