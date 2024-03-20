import Fancybox from "../components/Fancybox";
import dataGambar from "../assets/dataGambar";

export const Gallery = () => {
  return (
    <div className="container gallery">
      <h1>My Gallery</h1>

      <Fancybox className="fancybox">
          {dataGambar.map((gambar, index) => (
            <a key={index} data-fancybox="gallery" href={gambar.src}>
              <img alt={gambar.caption} src={gambar.src} />
            </a>
          ))}
      </Fancybox>
    </div>
  );
};

export default Gallery;
