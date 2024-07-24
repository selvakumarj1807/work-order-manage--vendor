import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./nomore.css";

const SearchEngine = () => {
  return (
    <Container>
      <MDBTable
        align="middle"
        style={{
          padding: "80px",
          marginLeft: "30px",
          marginRight: "150px",
          marginTop: "40px",
        }}
      >
        {" "}
        <MDBTableHead>
          <tr>
            <th scope="col" style={{ fontSize: "18px" }}>
              Id
            </th>
            <th scope="col" style={{ fontSize: "18px" }}>
              {" "}
              Model / Year / Part
            </th>
            <th scope="col" style={{ fontSize: "18px" }}>
              Product Image
            </th>
            <th scope="col" style={{ fontSize: "18px" }}>
              Price
            </th>
            <th scope="col" style={{ fontSize: "18px", textAlign: "center" }}>
              Dealer Info
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Maruti</p>
                <p className="fw-bold text-muted mb-1">2009</p>
                <p className="text-muted mb-0">cylinder block</p>
              </div>
            </td>
            <td>
              <img
                src="https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Motorblock/motorblock.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 800</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore
              </p>
              <p className="text-muted mb-0">
                09054795332 - Open Now :Mon - Sun :- Open 24 Hrs
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Hyundai</p>
                <p className="fw-bold text-muted mb-1">2014</p>
                <p className="text-muted mb-0">pistons</p>
              </div>
            </td>
            <td>
              <img
                src="https://octanecdn.com/mrcleancarwashnew/1_v6enginepistons3dimage.j_215142.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 500</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore
              </p>
              <p className="text-muted mb-0">
                09054795332 - Open Now :Mon - Sun :- Open 24 Hrs
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Renault</p>
                <p className="fw-bold text-muted mb-1">2016</p>
                <p className="text-muted mb-0">oil pump</p>
              </div>
            </td>
            <td>
              <img
                src="https://blog.kroftools.com/wp-content/uploads/2023/02/bomba-de-oleo-do-motor-750x410.png"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 450</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore
              </p>
              <p className="text-muted mb-0">
                09054795332 - Open Now :Mon - Sun :- Open 24 Hrs
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Skoda</p>
                <p className="fw-bold text-muted mb-1">2003</p>
                <p className="text-muted mb-0">cooling system</p>
              </div>
            </td>
            <td>
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-cf36960d9f588dfb5f1d46ee0dab3df1"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 1200</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore
              </p>
              <p className="text-muted mb-0">
                09054795332 - Open Now :Mon - Sun :- Open 24 Hrs
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Tata</p>
                <p className="fw-bold text-muted mb-1">2008</p>
                <p className="text-muted mb-0">cylinders</p>
              </div>
            </td>
            <td>
              <img
                src="https://car-images.bauersecure.com/wp-images/3967/eaton-rgb_red-blue.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 1500</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore
              </p>
              <p className="text-muted mb-0">
                09054795332 - Open Now :Mon - Sun :- Open 24 Hrs
              </p>
            </td>
          </tr>
          {/* <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Mahindra</p>
                <p className="fw-bold text-muted mb-1">2003</p>
                <p className="text-muted mb-0">camshaft</p>
              </div>
            </td>
            <td>
              <img
                src="https://autoprotoway.com/wp-content/uploads/2023/01/engine-camshaft.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 600</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore</p>
              <p className="text-muted mb-0">
              09054795332
                - Open Now :Mon - Sun :- Open 24 Hrs
</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Honda</p>
                <p className="fw-bold text-muted mb-1">2014</p>
                <p className="text-muted mb-0">valves</p>
              </div>
            </td>
            <td>
              <img
                src="https://cimg2.ibsrv.net/cimg/www.doityourself.com/660x300_85-1/134/engine-valves-661134.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 1800</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore</p>
              <p className="text-muted mb-0">
              09054795332
                - Open Now :Mon - Sun :- Open 24 Hrs
</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Skoda</p>
                <p className="fw-bold text-muted mb-1">2007</p>
                <p className="text-muted mb-0">spark plugs</p>
              </div>
            </td>
            <td>
              <img
                src="https://cdn.fiix.io/1/articles/sparkplugs.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 300</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore</p>
              <p className="text-muted mb-0">
              09054795332
                - Open Now :Mon - Sun :- Open 24 Hrs
</p>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div className="ms-3">
                <p className="fw-bold mb-1">Renault</p>
                <p className="fw-bold text-muted mb-1">2005</p>
                <p className="text-muted mb-0">fuel injectors</p>
              </div>
            </td>
            <td>
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2022/5/UR/TE/WC/9220730/car-fuel-injector-500x500.jpg"
                alt=""
                style={{
                  width: "80px",
                  height: "85px",
                  border: "1px solid black",
                }}
                className="rounded-circle"
              />
            </td>
            <td>
              <p className="fw-normal mb-1">$ 450</p>
            </td>
            <td>
              <p className="text-muted mb-0">
                Sn Motors- Ukkadam Old Market, Ukkadam, Coimbatore</p>
              <p className="text-muted mb-0">
              09054795332
                - Open Now :Mon - Sun :- Open 24 Hrs
</p>
            </td>
          </tr> */}
        </MDBTableBody>
      </MDBTable>

      <Popup
        trigger={
          <button
            style={{
              padding: "5px",
              borderRadius: "10px",
              width: "250px",
              marginBottom: "20px",
              backgroundColor: "#0e2a47",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            Quote Generator{" "}
            {/* <Link to='/dashboard/quote/genrator' style={{color:'#fff', fontSize:'18px'}} >Quotes Generator</Link> */}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div style={{ height: "40vh" }}>
            <div>
              <img
                style={{ marginLeft: "40%", marginTop: "30px" }}
                src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg"
                width="150"
                height="150"
                alt=""
              />

              <h6 style={{ marginLeft: "35%" }}>
                Your Submission has been received
              </h6>
            </div>

            <div>
              <button
                style={{
                  marginTop: "35px",
                  color: "#fff",
                  fontSize: "18px",
                  marginLeft: "45%",
                }}
                onClick={() => close()}
              >
                <Link
                  to="/dashboard/default"
                  style={{ color: "#fff", fontSize: "18px" }}
                >
                  {" "}
                  Done
                </Link>
              </button>
            </div>
          </div>
        )}
      </Popup>
    </Container>
  );
};

export default SearchEngine;
