import React, { Component, useState } from 'react';
import { Icon } from '@iconify/react';
// npm install --save-dev @iconify/react @iconify-icons/twemoji
import redCircle from '@iconify-icons/twemoji/red-circle';
// npm install --save-dev @iconify/react @iconify-icons/twemoji
import yellowCircle from '@iconify-icons/twemoji/yellow-circle';
// npm install --save-dev @iconify/react @iconify-icons/openmoji
import greenCircle from '@iconify-icons/openmoji/green-circle';
// npm install --save-dev @iconify/react @iconify-icons/gg
import helloIcon from '@iconify-icons/gg/hello';

const About = () => {

    let presentation = "Bonjour, Je m'appelle Fadela. Après 10 années d'expérience dans le secteur commercial, mon appétence pour le numérique m'a amenée tout naturellement à une reconversion professionnelle pour devenir développeuse Web full stack. Ma passion pour les nouvelles technologies que je pratique en autodidacte et ma motivation m'ont permis d'accéder à une formation riche et intense dispensée par Social Builder et l'organisme de formation Konexio. Aujourd'hui je suis à la recherche d'un stage pour parfaire mon apprentissage, je serai honorée de rejoindre votre société."
    return (
        <section id='about'>
            
            <div id='Screen' class='col-md-12'>
                <div className="col-md-8">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <Icon icon={redCircle} />
                                <Icon icon={yellowCircle} />
                                <Icon icon={greenCircle} />
                            </div>
                            <div
                                className="card-body font-trebuchet text-justify ml-3 mr-3"
                                style={{
                                    height: "auto",
                                    fontSize: "95%",
                                    lineHeight: "200%",
                                }}
                            >
                                <br />
                                <span>{<Icon icon={helloIcon} />}</span>
                                <br />
                                {presentation}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default About;