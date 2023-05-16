import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import AboutPage from "../pages/About";
import Home from "../pages/Home";
// import ProductCard, { loaderProduct } from "../components/ProductCard";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: loaderProducts,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      // {
      //   path: "product-card/:id",
      //   element: <ProductCard />,
      //   loader: loaderProduct,
      // },
    ],
  },
]);

export default router;
