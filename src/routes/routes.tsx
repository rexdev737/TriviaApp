import { Fragment, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GuardComponent from "../components/GuardComponent";
import LoadingComponent from "../components/LoadingComponent";
import Home from "../containers/Home";
import Quiz from "../containers/Quiz";
import Result from "../containers/Result";

interface IRoute {
  path?: string;
  guard?: React.FC;
  element: any;
}

const routes: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    guard: GuardComponent,
    element: <Quiz />,
  },
  {
    path: "/result",
    guard: GuardComponent,
    element: <Result />,
  },
];

export function renderRoutes(routes: IRoute[] = []) {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          {routes.map((route: IRoute, i: number) => {
            const Guard = route.guard || Fragment;

            return (
              <Route
                key={i}
                path={route.path!}
                element={<Guard>{route.element}</Guard>}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default routes;
