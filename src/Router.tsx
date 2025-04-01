import { BrowserRouter, Routes } from "react-router-dom";

import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import QuestionDetailPage from "./page/QuestionDetailPage";
import QuestionPage from "./page/QuestionPage";
import QuestionWritePage from "./page/QuestionWritePage";
import UserPage from "./page/UserPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/redirect" element={<Redirect />} /> */}
          <Route path="/" element={<UserPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/questionDetail/:id" element={<QuestionDetailPage />} />
          path="*"
          <Route path="/question/write" element={<QuestionWritePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
