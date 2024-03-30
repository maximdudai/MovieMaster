import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserDeviceDetection } from "./Context/Device/Device.jsx";

import { App } from "./App";
import { Films } from "./Pages/Films/Films";
import { Search } from "./Pages/Search/Search";
import { MovieDetails } from "./Pages/Movie/MovieDetails";

import "./main.css";
import { ActorDetails } from "./Pages/Actors/ActorDetails.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Not Found</div>,
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "/search/:query",
    element: <Search />,
  },
  {
    path: "/movie-data/:type/:query",
    element: <MovieDetails />,
  },
  {
    path: "/actor-data/:query",
    element: <ActorDetails />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserDeviceDetection>
      <RouterProvider router={router} />
    </UserDeviceDetection>
  </React.StrictMode>
);
