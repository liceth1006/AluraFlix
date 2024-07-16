import Banner from "../../Components/Banner";
import Cabecera from "../../Components/Cabecera";
import Cards from "../../Components/Cards";
import VideoProvider from "../../Context/VideoCardContext";
import CategoriaProvider from "../../Context/CategoriaContext";

const Home = () => {
  return (
    <>
      <Cabecera />
      <VideoProvider>
        <CategoriaProvider>
          <Banner />
          <Cards />
        </CategoriaProvider>
      </VideoProvider>
    </>
  );
};

export default Home;
