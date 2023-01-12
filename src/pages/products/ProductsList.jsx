import ProductsGrid from "../../components/ProductsGrid";
import ProductIntro from "../../components/ProductIntro";

const ProductList = () => {
  return (
    <main>
      <div className="p-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <ProductIntro />
              <ProductsGrid />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
