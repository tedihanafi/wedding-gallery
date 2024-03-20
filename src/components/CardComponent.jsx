import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import dataPaketan from "../assets/dataPaketan";

const CardComponent = () => {
  return (
    <>
      {dataPaketan.map((item, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
          {/* Menggunakan gambar dari data */}
          <Card.Img variant="top" src={item.image} alt="Gambar Paketan" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            {/* Tambahkan tautan ke laman selengkapnya */}
            <Button variant="primary" href={item.link}>Lihat Selengkapnya!</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardComponent;
