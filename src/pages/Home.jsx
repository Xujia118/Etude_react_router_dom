import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      Home
      <FontAwesomeIcon icon={faHotel} />
      <FontAwesomeIcon icon={faPlane} />
    </div>
  );
}

export default Home;
