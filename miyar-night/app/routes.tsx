import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import Discover from "./pages/Discover";
import { Search } from "./pages/Search";
import { Publish } from "./pages/Publish";
import { Profile } from "./pages/Profile";
import { Article } from "./pages/Article";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "discover", Component: Discover },
      { path: "search", Component: Search },
      { path: "publish", Component: Publish },
      { path: "profile", Component: Profile },
      { path: "article/:id", Component: Article },
    ],
  },
]);
