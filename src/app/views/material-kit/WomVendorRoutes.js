import PaymentResponse from "app/wom/vendor/dashboard/PaymentResponse";
import VendorRegister from "app/wom/vendor/dashboard/VendorRegister";
import AddProduct from "app/wom/vendor/dashboard/productRegister/AddProduct";
import ProductList from "app/wom/vendor/dashboard/productRegister/ProductList";
import QuoteGenerator from "app/wom/vendor/dashboard/quoteManagement/QuoteGenerator";
// import QuoteReq from "app/wom/vendor/dashboard/quoteManagement/q";
import QuoteSuccess from "app/wom/vendor/dashboard/quoteManagement/QuoteSuccess";



const WomVendorRoutes = [
  { path: "/vendor/register", element: <VendorRegister /> },
  { path: "/vendor/product/add", element: <AddProduct /> },
  { path: "/vendor/product/list", element: <ProductList /> },
  // { path: "/vendor/quote/request", element: <QuoteReq /> },
  { path: "/vendor/quote/generator", element: <QuoteGenerator /> },
  { path: "/vendor/quote/success", element: <QuoteSuccess /> },
  { path: "/vendor/payment", element: <PaymentResponse /> },
//   { path: "/dashboard/invoice", element: <Invoice /> },
//   { path: "dashboard/search/engine", element: <SearchEngine /> },
//   { path: "dashboard/nomore/information", element: <NoMoreInfor /> },
//   { path: "dashboard/quote/genrator", element: <QuoteGenrator /> },
//   { path: "'/dashboard/nomore/information", element: <InvoiceGenerator /> },
 
];

export default WomVendorRoutes;
