//Importación de Router
import AppRouter from "./routes/AppRouter";

//Importación de componentes
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ATEHyhRhUr9tY9_ceRYXXEiZ3gz1CME86evttEGaPwTyLsyrgqaLCXPoas_l0MiYIUxyN0s44NcoIGps",
        }}
      >
        <Navbar />
        <AppRouter />
        <Footer />
      </PayPalScriptProvider>
    </>
  );
}

export default App;
