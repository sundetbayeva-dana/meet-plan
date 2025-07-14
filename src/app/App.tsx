import {createBrowserRouter, RouterProvider} from "react-router";
import {routes} from "./routes";
import {Header} from "@/widget/Header"
export function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

