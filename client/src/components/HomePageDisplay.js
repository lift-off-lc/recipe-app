import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function HomePageDisplay() {
  return (
    <div className="bg-dark">
    <div className="container-lg h-fit-content box-shadow-lg">
    <Carousel fade>
      
      <Carousel.Item className="d-block box-shadow-xl h-fit-content border-secondary border-1">
        <img
          className="w-fit-content h-fit-content"
          alt="Dumpling meal on wooden table"
          src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        />
       <Carousel.Caption>
          <div className="bg-primary rounded-4 w-50 border border-3 border-secondary mx-auto my-top pb-2">
          <h3 class="fs-2 lead text-secondary">Add Some Flavor to Mealtime</h3>
          <p class="fw-bold fs-6 text-white align-center">Explore a profusion of professional and home-cooked recipes </p>

        
          <Link to="/recipe">
            <Button variant="danger" onClick="/recipe">
              Learn More
            </Button>
            {""}
          </Link>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-fit-content h-fit-content"
          alt="Barbecue shrimp on what looks like the world's tiniest desert island escape-raft"
          src="https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        />

        <Carousel.Caption>
        <div className="bg-primary rounded-4 w-50 border border-3 border-secondary mx-auto my-top pb-2">
          <h3 class="fs-2 lead text-secondary">Find Fresh Takes on Old Favorites</h3>
          <p className="fs-6 fw-bold text-white">Lay your oven-mitts on your next signature recipe for the upcoming occasion</p>{" "}
          <Link to="/recipe">
            <Button variant="danger" onClick="/recipe">
              Learn More
            </Button>
            {""}
          </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-fit-content h-fit-content"
          src="https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="Chocolate brownie that looks rich & tasty enough to marry"
        />

        <Carousel.Caption>
        <div className="bg-primary rounded-4 w-50 border border-3 border-secondary mx-auto my-top pb-2">
          <h3 class="fs-2 lead text-secondary">Eat Your Heart Out</h3>
          <p className="fw-bold">And finally, dig in and enjoy</p>
          <Link to="/recipe">
            <Button variant="danger" onClick="/recipe">
              Learn More
            </Button>
            {""}
          </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    </div>
    </div>
  );
}

export default HomePageDisplay;
