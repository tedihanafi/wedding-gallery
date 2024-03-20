import { Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent";
import { FooterComponent } from "./components/FooterComponent";
import { Home } from "./pages/Home";
import Paketan from "./pages/Paketan";
import Testimoni from "./pages/Testimoni";
import Gallery from "./pages/Gallery";
import Kontak from "./pages/Kontak";


function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/paketan" Component={Paketan} />
        <Route path="/testimoni" Component={Testimoni} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/kontak" Component={ Kontak} />
      </Routes>     
      <FooterComponent />
    </div>
  );
}

export default App;
