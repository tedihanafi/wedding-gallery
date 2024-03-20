import Accordion from 'react-bootstrap/Accordion';
import dataAccordion from "../assets/dataAccordion"; // Import data array

function AccordionComponent() {
  return (
    <div className="container accordion">
      <Accordion>
        <h2 className='accor-h1'>Pertanyaan Yang Sering Di Tanyakan 👌</h2>
        {dataAccordion.map((item, index) => ( // Mapping data array untuk membuat accordion
          <Accordion.Item key={index} eventKey={index.toString()}> {/* Menggunakan index sebagai eventKey */}
            <Accordion.Header>{item.question}</Accordion.Header> {/* Menggunakan nilai pertanyaan dari data array */}
            <Accordion.Body>
              {item.answer} {/* Menggunakan nilai jawaban dari data array */}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
