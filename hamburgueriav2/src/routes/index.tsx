import { Routes, Route } from "react-router-dom";
import { ProductsProvider } from "../contexts/ProductsContext";
import DashboardPage from "../pages/home";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/NotFound";
import RegisterPage from "../pages/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProductsProvider>
            <DashboardPage />
          </ProductsProvider>
        }
      />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
