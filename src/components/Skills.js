import React, { Component } from 'react';
import styled from 'styled-components'
import { HtmlFive2 } from '@styled-icons/icomoon';
import { Css3Alt } from '@styled-icons/fa-brands/Css3Alt';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'
import { NodeJs } from '@styled-icons/fa-brands/NodeJs'
import { Jquery } from '@styled-icons/boxicons-logos/Jquery'
import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { Bootstrap } from '@styled-icons/boxicons-logos/Bootstrap'
import { Mysql } from '@styled-icons/simple-icons/Mysql'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'

class Skills extends Component {
    render() {
        return (
            <div id='skills'>
                <row>
                    <h4>SKILLS</h4>
                    <div>
                        <i class="devicon-html5-plain" size={{ fontSize: '30%' }}></i>
                        <p class="text-center">HTML 5</p>
                    </div>
                    <div>
                        <i class="devicon-css3-plain"></i>
                        <p class="text-center">CSS</p>
                    </div>
                    <div>
                        <i class="devicon-javascript-plain"></i>
                        <p class="text-center">Javascript</p>
                    </div>
                    <div>
                        <i class="devicon-react-original-wordmark"></i>
                    </div>
                    <i class="devicon-jquery-plain-wordmark"></i>
                    <i class="devicon-bootstrap-plain-wordmark"></i>

                    <HtmlFive2 id='htmlIcon' size='48'></HtmlFive2>
                    <Css3Alt id='css3' size='48'></Css3Alt>
                    <ReactLogo id='ReactLogo' size='48'></ReactLogo>
                    <NodeJs id='NodeJs' size='48'></NodeJs>
                    <Jquery id='Jquery' size='48'></Jquery>
                    <Javascript id='Javascript' size='48'></Javascript>
                    <Bootstrap id='Bootstrap' size='48'></Bootstrap>
                    <Mysql id='Mysql' size='48'></Mysql>
                    <Mongodb id='Mongodb' size='48'>MongoDB</Mongodb>
                </row>
            </div>
        );
    }
}
export default Skills;