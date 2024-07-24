import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const options = [
  {
    value: "maruti",
    label: "Maruti",
    image:
      "https://imgd.aeplcdn.com/272x153/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
  },
  {
    value: "hyundai",
    label: "Hyundai",
    image:
      "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
  },
  {
    value: "tata",
    label: "Tata",
    image:
      "https://s7ap1.scene7.com/is/image/tatamotors/CosmicGold-right?$VH-708-500-D$&fit=crop&fmt=png-alpha",
  },
  {
    value: "mahindra",
    label: "Mahindra",
    image:
      "https://www.revv.co.in/blogs/wp-content/uploads/2022/03/Mahindra-Car-in-Chennai.png",
  },
  {
    value: "honda",
    label: "Honda",
    image:
      "https://m.economictimes.com/thumb/msid-79933399,width-1200,height-900,resizemode-4,imgsize-97551/honda-civic-1.jpg",
  },
  {
    value: "skoda",
    label: "Skoda",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kodiaq/9827/1691643742587/exterior-image-165.jpg",
  },
  {
    value: "renault",
    label: "Renault",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/KWID/10076/1705905595853/front-left-side-47.jpg",
  },
];
const spareParts = [
  {
    value: "engine",
    label: "Engine",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/8cc9595364efa0fc-org-1584048843.jpg?resize=640:*",
  },
  {
    value: "tyre",
    label: "Tyre",
    image: "https://4.imimg.com/data4/AG/XN/MY-2669806/sports-car-tyre.jpg",
  },
  {
    value: "light",
    label: "Light",
    image:
      "https://media.wired.com/photos/5a59047921e2e34351ef9ea0/master/pass/headlights-635716846.jpg",
  },
];

const engine = [
  {
    value: "maruti",
    label: "Maruti k15",
    image:
      "https://imgd.aeplcdn.com//642x361//n/cw/ec/142187/maruti-suzuki-engine-shot2.jpeg?isig=0&q=75",
  },
  {
    value: "hyundai",
    label: "Hyundai Venue 1.5 CRDi MT S+",
    image:
      "https://cdni.autocarindia.com/ExtraImages/20220105042506_Hyundai.jpg",
  },
  {
    value: "tata",
    label: "Tata Tiago XM Revotron iCNG",
    image:
      "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/tata-nexon-2.jpg",
  },
  {
    value: "mahindra",
    label: "Mahindra 2024 Mahindra Scorpio-N 2.2 D Z8L 6 Seat",
    image:
      "https://www.team-bhp.com/sites/default/files/pictures2021/thar%20engine.jpg",
  },
  {
    value: "honda",
    label: "Honda 2023 Honda Elevate 1.5 I-VTEC ZX",
    image:
      "https://spn-sta.spinny.com/blog/20220228135429/Honda-i-VTEC.jpg?compress=true&quality=80&w=1200&dpr=2.6",
  },
  {
    value: "skoda",
    label: "Skoda 1 Diesel Engine and 3 Petrol Engine",
    image:
      "https://www.carkhabri.com/Gallery/skoda/skoda-rapid/interior/large/12.jpg",
  },
  {
    value: "renault",
    label: "Renault Inline-4",
    image:
      "https://imgd.aeplcdn.com/370x208/cw/ec/21057/Renault-Engine-Bay-61747.jpg?v=201711021421&wm=1&q=80",
  },
];

const SimpleForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSparePart, setSelectedSparePart] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleChange1 = (selectedSparePart) => {
    setSelectedSparePart(selectedSparePart);
  };
  const handleChange2 = (selectedEngine) => {
    setSelectedEngine(selectedEngine);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <div style={{ width: "600px", marginInline: "300px" }}>
              <Select
                value={selectedOption}
                onChange={handleChange}
                placeholder={"Product Brand"}
                options={options}
                getOptionLabel={(option) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={option.image}
                      alt={option.label}
                      style={{
                        width: "80px",
                        height: "60px",
                        marginRight: "5px",
                        borderRadius: "800px",
                      }}
                    />
                    <h4
                      style={{
                        marginLeft: "50px",
                        color: "darkblue",
                        fontWeight: "500",
                      }}
                    >
                      {option.label}
                    </h4>
                  </div>
                )}
                getOptionValue={(option) => option.value}
              />
              {selectedOption && (
                <div style={{ marginTop: "10px" }}>
                  Selected Brand: {selectedOption.label}
                </div>
              )}

              <br />

              <Select
                value={selectedSparePart}
                onChange={handleChange1}
                placeholder={"Product spare Part's"}
                options={spareParts}
                getOptionLabel={(spareParts) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={spareParts.image}
                      alt={spareParts.label}
                      style={{
                        width: "80px",
                        height: "60px",
                        marginRight: "5px",
                        borderRadius: "800px",
                      }}
                    />
                    <h4
                      style={{
                        marginLeft: "50px",
                        color: "black",
                        fontWeight: "500",
                      }}
                    >
                      {spareParts.label}
                    </h4>
                  </div>
                )}
                getOptionValue={(spareParts) => spareParts.value}
              />
              {selectedSparePart && (
                <div style={{ marginTop: "10px" }}>
                  Selected Spare Part's: {selectedSparePart.label}
                </div>
              )}

              <br />

              <Select
                value={selectedEngine}
                onChange={handleChange2}
                options={engine}
                placeholder={"Product Model"}
                getOptionLabel={(engine) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={engine.image}
                      alt={engine.label}
                      style={{
                        width: "80px",
                        height: "60px",
                        marginRight: "5px",
                        borderRadius: "800px",
                      }}
                    />
                    <h5 style={{ marginLeft: "50px" }}>{engine.label}</h5>
                  </div>
                )}
                getOptionValue={(engine) => engine.value}
              />
              {selectedEngine && (
                <div style={{ marginTop: "10px" }}>
                  Product Model: {selectedEngine.label}
                </div>
              )}

              <br />
              <br />

              <button
                style={{
                  padding: "10px",
                  borderRadius: "30px",
                  backgroundColor: "#0E2A47",
                  border: "1px dashed white",
                }}
              >
                <Link
                  to="/dashboard/invoice"
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                >
                  Invoice Genrator
                </Link>
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SimpleForm;
