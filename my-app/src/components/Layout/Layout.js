import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { hot } from "react-hot-loader/root";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default hot(Layout);
