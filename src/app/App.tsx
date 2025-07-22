import {createBrowserRouter, RouterProvider} from "react-router";
import {routes} from "./routes";
import {Header} from "@/widget/Header"
export function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <Header />
      <div className="w-5/6 m-auto">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

