import NavigationCard from "../components/NavigationCard";
import Layout from "../components/Layout";
import news from "../assets/news.png";
import mailbox from "../assets/mailbox.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <NavigationCard 
        title="CEP"
        description="Busca de endereço por CEP"
        image={mailbox}
        onClick={() => navigate("/cep")}
        />
      <NavigationCard 
        title="Notícias"
        description="Busca de endereço por CEP"
        image={news}
        onClick={() => navigate("/news")}
      />
    </Layout>
  );
};

export default Home;
