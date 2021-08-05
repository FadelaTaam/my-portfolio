import { Component } from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Img from './img/TMDB.png';
import Portfolio from './img/Portfolio.png'
import HealthyApp from './img/HealthyApp.png'

class Projets extends Component {
    render() {
        return ( <section>
        <h3>PROJETS</h3>
            <CardGroup>
              
  <Card>
    <Card.Img variant="top" src={Img} />
    <Card.Body>
      <Card.Title>DB MOVIE</Card.Title>
      <Card.Text>
       Description
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={HealthyApp} />
    <Card.Body>
      <Card.Title>HEALTHY APP</Card.Title>
      <Card.Text>
      Description{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Portfolio} />
    <Card.Body>
      <Card.Title>PORTFOLIO</Card.Title>
      <Card.Text>
      Description
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</section>
        )
    }

}
export default Projets;