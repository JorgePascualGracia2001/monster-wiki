import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div id="main-content">
        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
