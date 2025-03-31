import { useLocation } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <Header user={currentUser} />}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
