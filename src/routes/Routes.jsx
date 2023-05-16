import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailsPage } from "../pages/DetailsPage";

export const ValorantRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/agent/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
