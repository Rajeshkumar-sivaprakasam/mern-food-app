import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import HomePage from "./pages/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>User Profile page</span>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
