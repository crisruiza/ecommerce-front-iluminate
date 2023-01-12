import ProductListCheckout from "../components/ProductListCheckout";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
const Checkout = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
          <h1>Checkout</h1>
          <p>
            ¡Gracias por comprar con nosotros! Aquí te dejamos una lista d los
            artículos que te interesaron. Vuelve pronto ✨
          </p>
          <ProductListCheckout />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
          <h1>Pago</h1>
          <p>
            Haz tu pago seguro por Paypal 💳 y disfruta tus velas en los
            siguientes 2 a 3 días háciles.{" "}
          </p>
          <PaypalCheckoutButton
            currency={"MXN"}
            amount={1}
            showSpinner={false}
          />
        </div>
      </div>
      <div className="container">
        <div className="row"></div>
      </div>
    </>
  );
};

export default Checkout;
