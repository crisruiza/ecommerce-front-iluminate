import Hero from "../components/Hero";
import ProductsGrid from "../components/ProductsGrid";
const Home = () => {
  return (
    <main>
      <Hero />
      <div className="row mt-5 p-5">
        <h2 className="text-center">Somos ilumína(te)</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          excepturi, dolorem quos maiores, tempora dignissimos facere dicta odit
          quas accusamus illum sit voluptates quod vitae enim cumque, veniam
          fugiat repellat.
        </p>
        <h3 className="text-center">Nuestros productos son 100% naturales</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          excepturi, dolorem quos maiores, tempora dignissimos facere dicta odit
          quas accusamus illum sit voluptates quod vitae enim cumque, veniam
          fugiat repellat.
        </p>
        <h3 className="text-center">Queremos consentirte hoy y siempre</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          excepturi, dolorem quos maiores, tempora dignissimos facere dicta odit
          quas accusamus illum sit voluptates quod vitae enim cumque, veniam
          fugiat repellat.
        </p>
      </div>
      <div className="">
        <ProductsGrid />
      </div>
    </main>
  );
};

export default Home;
