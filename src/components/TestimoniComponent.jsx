import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import dataTesti from "../assets/dataTesti";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimoniComponent = () => {
  return (
    <div className="container testi-com">
      <h1>Testimonials</h1>
      <Swiper
        spaceBetween={80}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          900: {
            slidesPerView: 2
          },
          // For viewport width less than 900px, it will show 1 slide per view
          0: {
            slidesPerView: 1
          }
          // You can add more breakpoints as needed
        }}
      >
          {dataTesti.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="body-testi">
                {/* Menggunakan data dari dataTesti */}
                <img src={`/img/${item.link}.${item.extension}`} alt={`img-${index + 1}`} />
                <div className="isi-testi">
                  {/* Menggunakan data dari dataTesti */}
                  <p>{item.description}</p>
                  <h5 style={{ paddingLeft: '10px' }}>
                    {item.title}
                    {/* Menambahkan ikon bintang sesuai properti starCount */}
                    {[...Array(item.starCount)].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} className="star-icon text-warning" style={{ paddingLeft: '10px' }} key={i} />
                    ))}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}

      </Swiper>
    </div>
  );
};

export default TestimoniComponent;
