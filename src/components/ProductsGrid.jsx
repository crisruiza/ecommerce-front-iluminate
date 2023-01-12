import ProductIntro from "./ProductIntro";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/Product.service";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    document.title = "Lista de productos";
    getProducts().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <main>
      <div className="p-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-sm-6 col-md-4" key={product._id}>
                    <div className="card mb-4">
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt="Product Image"
                      />

                      <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>

                        <h4 className="card-title">${product.price} MXN</h4>

                        <Link
                          to="/checkout"
                          className="btn btn-primary-light btn-sm d-grid"
                        >
                          Carrito
                        </Link>
                        <Link
                          to={`/detail-product/${product._id}`}
                          className="btn btn-primary-dark btn-sm d-grid mt-2"
                        >
                          Detalle
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
