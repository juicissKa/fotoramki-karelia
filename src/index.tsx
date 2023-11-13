import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import ProductInfo from "./components/pages/ProductInfo";
import Canvas from "./components/pages/Canvas";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/catalog/",
      //   element: <Catalog />,
      // },
      // {
      //   path: "/catalog/:id",
      //   element: <ProductInfo />,
      // },
      // {
      //   path: "/frames/",
      //   element: <Canvas />,
      // },
      // {
      //   path: "/print/",
      //   element: <Canvas />,
      // },
      // {
      //   path: "/canvas/",
      //   element: <Canvas />,
      // },
      {
        path: "*",
        element: <div>Страница не найдена!</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
