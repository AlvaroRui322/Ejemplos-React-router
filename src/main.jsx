import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider, {UserContext} from "./context/UserContext.jsx";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
);
