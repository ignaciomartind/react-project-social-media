import "./home.css";

import homeSvg from "../media/healthy.svg";
import { useEffect } from "react";

export default function Home() {


  return (
    <div className="home">
      <div className="home-hero">
        <img src={homeSvg} alt="home svg" />
        <p>Descubrí personas alrededor tuyo.</p>
      </div>
      <button className="btn-lblue">Ingresá</button>
    </div>
  );
}
