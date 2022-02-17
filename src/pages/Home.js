import "./home.css";

import homeSvg from "../media/healthy.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const handleClick = () => navigate('/register')

  return (
    <div className="home">
      <div className="home-hero">
        <img src={homeSvg} alt="home svg" />
        <div className="home-hero-right">
          <p>Descubrí personas alrededor tuyo.</p>
          <button className="btn-lblue" onClick={handleClick}>Ingresá</button>
        </div>
      </div>
    </div>
  );
}
