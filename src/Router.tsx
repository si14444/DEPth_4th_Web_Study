import { BrowserRouter, Routes } from "react-router-dom";

import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import EmptyPage from "./page/EmptyPage";
import HomePage from "./page/HomePage";
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
          <Route
            path="*"
            element={<EmptyPage text="요청하신 페이지를 찾을 수 없어요" />}
          />
          <Route path="/question/write" element={<QuestionWritePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
