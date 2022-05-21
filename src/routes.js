import { lazy, Suspense } from "react";
import React from "react";
import ErrorBoundary from "components/ErrorBoundary";

import { CircularProgress } from "@mui/material";

const Notes = lazy(() => import("containers/Notes"));

const LazyNotes = (props) => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary>
        <Notes {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const allRoutes = [
  {
    path: "/notes",
    name: "app",
    element: <LazyNotes />,
    layout: "app",
  },
];

export default allRoutes;
