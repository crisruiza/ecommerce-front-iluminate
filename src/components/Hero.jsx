import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <h1>Velas aromáticas</h1>
        <h2>Hasta 42 horas de duración</h2>
        <Link to="/products" className="btn">
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default Hero;
