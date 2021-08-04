import React, { Component } from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Img from '/Users/fadela/Desktop/stage/Portfolio/portfolio/src/img/TMDB.png';
import Portfolio from '/Users/fadela/Desktop/stage/Portfolio/portfolio/src/img/Portfolio.png'
import HealthyApp from '/Users/fadela/Desktop/stage/Portfolio/portfolio/src/img/HealthyApp.png'

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