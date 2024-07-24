import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Invoice = () => {
  return (
    <>
      <div class="invoice" style={{ marginTop: "50px" }}>
        <div class="invoice-header">
          <img
            src="https://t3.ftcdn.net/jpg/04/20/25/98/360_F_420259884_rGaCSIrBaDN1YuxVBnNa7i3Ye5eI4wgm.jpg"
            alt="Company Logo"
          />
          <div class="invoice-info">
            <p>Invoice Number: INV-12345</p>
            <p>Date: 30 March 2024</p>
          </div>
        </div>
        {/* <div class="invoice-details">
      <p><strong>Bill To:</strong></p>
      <p>Sannasi</p>
      <p>4E/4,3rd Street </p>
      <p>Valluvar Nagar</p>
      <p>Kovilpatti, TamilNadu, 628501</p>
      <p>Email: san@example.com</p>
    </div> */}
        <table class="invoice-table">
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>2</td>
              <td>₹ 50.00</td>
              <td>₹ 100.00</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>1</td>
              <td>₹ 75.00</td>
              <td>₹ 75.00</td>
            </tr>
          </tbody>
        </table>
        <div class="invoice-footer">
          <p>
            <strong>Subtotal:</strong> ₹ 175.00
          </p>
          <p>
            <strong>Tax (10%):</strong> ₹ 17.50
          </p>
          <p class="total">
            <strong>Total:</strong> ₹ 192.50
          </p>
          <p>
            <strong>Payment Terms:</strong> Due in 30 days
          </p>
          <button
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "red",
            }}
          >
            <span style={{ color: "#fff", fontWeight: "bolder" }}>
              Download
            </span>
          </button>
          <button
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#0E2A47",
              width: "100px",
              marginLeft: "40px",
            }}
          >
            <Link
              to="/dashboard/order/payment"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bolder",
              }}
            >
              Pay
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
