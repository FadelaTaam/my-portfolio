import { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div id='skills'>
                <row>
                    <h4>Compétences</h4>
                    <div id='html'>
                        <i class="devicon-html5-plain" size={{ size: '48' }}></i>
                        <p class="text-center">HTML 5</p>
                    </div>
                    <div id='css'>
                        <i class="devicon-css3-plain"></i>
                        <p class="text-center">CSS</p>
                    </div>
                    <div id='javascript'>
                        <i class="devicon-javascript-plain"></i>
                        <p class="text-center">Javascript</p>
                    </div>
                    <div id='react'>
                        <i class="devicon-react-original-wordmark"></i>
                    </div>
                    <div id='jquery'>
                        <i class="devicon-jquery-plain-wordmark"></i>
                    </div>
                    <div id='bootstrap'>
                        <i class="devicon-bootstrap-plain-wordmark"></i>
                    </div>
                    <div id='mysql'>
                        <i class="devicon-mysql-plain"></i>
                    </div>
                    <div id='mongodb'>
                        <i class="devicon-mongodb-plain-wordmark"></i>
                    </div>

                </row>
            </div>
        );
    }
}
export default Skills;