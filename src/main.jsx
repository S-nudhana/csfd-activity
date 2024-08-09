import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import AncientGate from "./pages/AncientGate";
import PortalPassword from "./pages/PortalPassword";

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans Thai', sans-serif`,
    body: `'Noto Sans Thai', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/ancientGate",
    element: <AncientGate />,
  },
  {
    path: "/portalPassword",
    element: <PortalPassword />,
  },
]);
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
