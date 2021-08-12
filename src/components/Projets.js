import { Component } from 'react';
import Img from './img/TMDB.png';
import Portfolio from './img/Portfolio.png'
import HealthyApp from './img/HealthyApp.png'

class Projets extends Component {
  render() {
    return (
      <section>
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={Img} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">TMDB Movie</h5>
      <p class="card-text">Création d'un site de streaming</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Portfolio} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Mon Portfolio</h5>
      <p class="card-text">Création de mon portfolio</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={HealthyApp} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Healthy App</h5>
      <p class="card-text">Création d'une application qui calcule la quantité d'eau qu'on doit boire dans la journée  par rapport à la temperature et</p>
    </div>
    <div class="card-footer">
      <small>Last updated 3 mins ago</small>
    </div>
  </div>
</div>
      </section>
    )
  }

}
export default Projets;