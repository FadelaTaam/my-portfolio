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
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

const About = () => {

    let presentation = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris elit, imperdiet egestas scelerisque eu, mattis vitae tortor. Sed a enim tempus, venenatis enim non, imperdiet nisi,Aenean eget mi quis quam feugiat mollis. Donec iaculis dolor eget lacus pellentesque, in venenatis purus maximus.'
    return (
        <section id='about'>
            <div id='Screen' class='col-md-12'>
                <h3>A propos de moi </h3>
                <GlitchClip onHover={false}>
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
                                    {"Présentation de ma personne", presentation}
                                </div>

                            </div>
                        </div>
                    </div>
                </GlitchClip>
            </div>
        </section>
    );
}
export default About;