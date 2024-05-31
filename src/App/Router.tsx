import { useEffect } from "react";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => {
  const RedirectToRoot = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  };
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
};
