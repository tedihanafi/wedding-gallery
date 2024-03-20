import { Link } from 'react-router-dom';
import CardComponent from "../components/CardComponent";

export const Paketan = () => {
    return (
      <div className="pages-paketan">
        <h2>Paketan ALL In One</h2>
        <div className="card-paketan">
          <CardComponent />
        </div>
        <Link to="/" className="button-paketan">Back To Home</Link>
      </div>
    );
};

export default Paketan;
