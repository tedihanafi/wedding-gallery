import AccordionComponent from "../components/AccordionComponent";
import CardComponent from "../components/CardComponent";
import TestimoniComponent from "../components/TestimoniComponent";
import ContactLokasi from "../components/ContactLokasi";

export const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h1>Mifth Mifth</h1>
        <h3>Makeup & Wedding Gallery</h3>
        <div className="sosial">
          <img src="/img/wa.png" alt="foto-wa" />
          <img src="/img/fb.png" alt="foto-fb" />
          <img src="/img/tiktok.png" alt="foto-tiktok" />
          <img src="/img/ig.png" alt="foto-ig" />
        </div>
      </div>

      <div className="home-paketan">
        <h2>Paketan ALL In One</h2>
        <div className="card-paketan">
          <CardComponent />
        </div>
        <button className="button-paketan">Lihat Semua Paketan</button>
      </div>

      <div className="testimoni">
        <TestimoniComponent />
      </div>

      {/* accordion */}
      <div className="accordion">
        <AccordionComponent />
      </div>

      {/* lokasi dan kontak */}
      <ContactLokasi />

    </>
  );
};

export default Home;
