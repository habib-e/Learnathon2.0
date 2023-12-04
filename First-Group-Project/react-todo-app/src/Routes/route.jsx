import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard/dashboard";
import { Layout } from "../components/Layout";
import { TodoPage } from "../pages/Todo/todo";
import LoginPage from "../pages/Login/login";
import { ProfilePage } from "../pages/Profile/profile";

export default function AllRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Layout>{<DashboardPage/>}</Layout>} />
        <Route path="/todo" element={<Layout>{<TodoPage/>}</Layout>} />
        <Route path="/" element={<Layout><LoginPage/></Layout>} />
        <Route path="/me" element={<Layout><ProfilePage/></Layout>} />

      </Routes>
    </Router>
  );
}
