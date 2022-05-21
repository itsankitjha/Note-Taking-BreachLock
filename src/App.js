import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import allRoutes from "routes";

const App = () => {
  const getRoutes = (allRoutes) => {
    return allRoutes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          element={prop.element}
          key={key}
        />
      );
    });
  };
  return (
    <>
      <Routes>
        {getRoutes(allRoutes)}
        <Route path="/" element={<Navigate to="/app/notes" replace />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
