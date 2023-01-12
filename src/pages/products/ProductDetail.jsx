import { useEffect, useState } from "react";
import { getProduct } from "../../services/Product.service";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    document.title = "Producto";
    getProduct(id).then((res) => {
      setProduct(res.data);
      // console.log(id);
    });
  }, [id]);
  return (
    <>
      <div className="col-12" key={product._id}>
        <div className="card m-4">
          <div className="row">
            <div className="col">
              <img
                src={product.img}
                className="card-img-top pb-4"
                alt="Product Image"
              />
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center">
              <h4 className="card-title">${product.price} MXN</h4>
              <h4 className="card-title">{product.name}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <Link to="/products" className="btn btn-primary-dark-50">
          Regresar a productos
        </Link>
      </div>
    </>
  );
};

export default ProductDetail;
