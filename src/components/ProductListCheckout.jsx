import { useEffect, useState } from "react";
import { getProducts } from "../services/Product.service";

const ProductListCheckout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    document.title = "Lista de productos";
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <main>
      <div className="">
        <div className="row">
          <div>
            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-12" key={product._id}>
                    <div className="card mb-4">
                      <div className="row">
                        <div className="col">
                          <img
                            src={product.img}
                            className="card-img-top pb-4"
                            alt="Product Image"
                          />
                        </div>
                        <div className="col d-flex flex-column align-items-center justify-content-center">
                          <h4 className="card-title">{product.name}</h4>
                          <h4 className="card-title">${product.price} MXN</h4>
                        </div>
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

export default ProductListCheckout;
