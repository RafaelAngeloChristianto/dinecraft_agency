import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import "./index.css";
import ContactPage from "./screens/ContactPage";
import PricingPage from "./screens/PricingPage";
import PoliciesPage from "./screens/PoliciesPage";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};
