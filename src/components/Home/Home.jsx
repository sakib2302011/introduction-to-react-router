import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
const Home = () => {
  const navigation = useNavigation();
  
  return (
    <div>
      <Header></Header>
      {
        navigation.state === "loading" ? 
        <Spinner></Spinner> :
        <Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  );
};

export default Home;