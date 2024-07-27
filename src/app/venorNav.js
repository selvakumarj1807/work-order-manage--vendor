export const vendorNav = [
    { name: "Dashboard", path: "/vendor/dashboard" },
    { name: "Vendor Registration", path: "/vendor/register", },

    {
        name: "Product Registration",
        // icon: "security",
        children: [
            // { name: "Invoice Generation", iconText: "SI", path: "dashboard/invoice/generation" },
            {
                name: "Add Product",
                // icon: <AddCircleIcon />,
                path: "/vendor/product/add",
            },
            {
                name: "Product List",
                // icon: <FormatListBulletedIcon />,
                path: "/vendor/product/list",
            }
        ],
    },
    {
        name: "Quote Management",
        // icon: <DvrIcon />,
        children: [
            // { name: "Invoice Generation", iconText: "SI", path: "dashboard/invoice/generation" },
            // {
            //   name: "Quote Request",
            //   iconText: "SU",
            //   path: "/vendor/quote/request",
            // },
            {
                name: "Quote Generator",
                // icon: <ReceiptIcon />,
                path: "/vendor/quote/generator",
            },
            {
                name: "Quote Success",
                // icon: <CheckCircleIcon />,
                path: "/vendor/quote/success",
            }
        ],
    },
    { name: "Payment Response", path: "/vendor/payment" },

    { name: "Logout", path: "https://work-order-management.vercel.app/home" },
    // { label: "Components", type: "label" }
    // {
    //   name: "Components",
    //   icon: "favorite",
    //   badge: { value: "30+", color: "secondary" },
    //   children: [
    //     { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
    //     { name: "Buttons", path: "/material/buttons", iconText: "B" },
    //     { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
    //     { name: "Dialog", path: "/material/dialog", iconText: "D" },
    //     { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
    //     { name: "Form", path: "/material/form", iconText: "F" },
    //     { name: "Icons", path: "/material/icons", iconText: "I" },
    //     { name: "Menu", path: "/material/menu", iconText: "M" },
    //     { name: "Progress", path: "/material/progress", iconText: "P" },
    //     { name: "Radio", path: "/material/radio", iconText: "R" },
    //     { name: "Switch", path: "/material/switch", iconText: "S" },
    //     { name: "Slider", path: "/material/slider", iconText: "S" },
    //     { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
    //     { name: "Table", path: "/material/table", iconText: "T" }
    //   ]
    // },
    // {
    //   name: "Charts",
    //   icon: "trending_up",
    //   children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
    // },
    // {
    //   name: "Documentation",
    //   icon: "launch",
    //   type: "extLink",
    //   path: "http://demos.ui-lib.com/matx-react-doc/"
    // }
];