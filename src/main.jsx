import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { Films } from "./Pages/Films/Films";
import { Search } from "./Pages/Seach/Seach";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Not Found</div>
  },
  {
    path: "/profile",
    element: <div>Profile</div>
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "films",
    element: <Films />
  },
  {
    path: "search",
    element: <Search />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
