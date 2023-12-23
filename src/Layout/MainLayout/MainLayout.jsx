import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../../components/Loading/Loading";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
