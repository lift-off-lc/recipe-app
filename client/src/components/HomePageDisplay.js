import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function HomePageDisplay() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-75"
          alt="First slide"
          src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        />
        <Carousel.Caption>
          <h3 className="fw-semibold">Add Some Flavor to Mealtime</h3>
          <p>Explore a profusion of professional and home-cooked recipes: </p>
          <p className="fw-light">Find fresh takes on old favorites, or lay your oven-mitts on your next signature recipe for the upcoming occasion</p>
          <Link to="/recipe">
            <Button variant="success" onClick="/recipe">
              Learn More
            </Button>
            {""}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Second slide"
          src="https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
          <Link to="/recipe">
            <Button variant="success" onClick="/recipe">
              Learn More
            </Button>
            {""}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Link to="/recipe">
            <Button variant="success" onClick="/recipe">
              Learn More
            </Button>
            {""}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageDisplay;
