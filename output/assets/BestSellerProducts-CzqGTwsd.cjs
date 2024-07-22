"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("react/jsx-runtime");
require("react");
const r = require("@mui/material"), i = require("@mui/icons-material/ArrowBackIos.js"), s = require("@mui/icons-material/ArrowForwardIos.js"), a = require("./ProductCard-CPpKaQ2r.cjs"), o = require("react-i18next");
require("@mui/icons-material/FavoriteBorder.js"), require("@mui/icons-material/Favorite.js"), require("@mui/icons-material/Share.js"), require("@mui/icons-material/AddShoppingCart.js"), require("axios"), require("../main.cjs"), require("react-dom/client"), require("react-router-dom"), require("@mui/icons-material/Search.js"), require("@mui/icons-material/Close.js"), require("i18next"), require("i18next-browser-languagedetector"), require("i18next-http-backend"), require("js-cookie"), require("styled-components"), require("lodash.debounce"), require("@mui/material/useMediaQuery/index.js"), require("@mui/icons-material/ArrowDropUp.js"), require("@mui/icons-material/ArrowDropDown.js"), require("@mui/icons-material/Menu.js"), require("@mui/icons-material/AccountCircle.js"), require("@mui/icons-material/ShoppingCart.js"), require("@mui/icons-material/Phone.js"), require("@mui/icons-material/MoreVert.js"), require("@mui/material/useScrollTrigger/index.js"), require("@mui/icons-material/Facebook.js"), require("@mui/icons-material/WhatsApp.js"), require("@mui/icons-material/Telegram.js"), require("@mui/icons-material/Call.js"), require("@mui/icons-material/Email.js"), require("@mui/material/styles/index.js"), require("@mui/material/CssBaseline/index.js"), require("@mui/icons-material"), require("@mui/material/CircularProgress/index.js"), require("@mui/material/Box/index.js"), require("@mui/icons-material/Twitter.js"), require("@mui/icons-material/Instagram.js");
exports.default = ({ products: t, isRTL: u, scrollContainer: l, handleProductClick: n }) => {
  const { t: c } = o.useTranslation();
  return e.jsxs(e.Fragment, { children: [e.jsx(r.Typography, { variant: "h4", gutterBottom: true, sx: { mx: "30px", fontWeight: "500", mt: 5, fontSize: { xs: "1.5rem", md: "2rem" } }, children: c("best_seller_products") }), e.jsx(r.Box, { sx: { display: "flex", flexDirection: u ? "column-reverse" : "column" }, children: e.jsxs(r.Box, { sx: { display: "flex", alignItems: "center", flexDirection: u ? "row-reverse" : "row" }, children: [e.jsx(r.IconButton, { onClick: () => l("best-seller-products-container", "left"), "aria-label": c("scroll_left"), children: e.jsx(i, {}) }), e.jsx(r.Box, { id: "best-seller-products-container", sx: { display: "flex", cursor: "pointer", overflowX: "hidden", scrollBehavior: "smooth", flexGrow: 1, height: 408, flexDirection: u ? "row-reverse" : "row", "&::-webkit-scrollbar": { display: "none" } }, children: t.map((i2) => e.jsx(r.Box, { sx: { minWidth: 220, marginRight: 2, marginLeft: 1 }, onClick: () => n(i2.url), children: e.jsx(a.ProductCard, { product: i2 }) }, i2.id)) }), e.jsx(r.IconButton, { onClick: () => l("best-seller-products-container", "right"), "aria-label": c("scroll_right"), children: e.jsx(s, {}) })] }) })] });
};
