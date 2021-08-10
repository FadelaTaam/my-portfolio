import { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div id='skills'>
                <div>
                    <h4>Compétences</h4>
                    <h4>---------------</h4>
                </div>
                <div>
                    <row id='skills'>

                        <div id='html'>
                            <i class="devicon-html5-plain"></i>
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
                        <i class="devicon-react-original"></i>
                            <p class="text-center">React</p>

                        </div>
                        <div id='jquery'>
                        <i class="devicon-jquery-plain"></i>
                            <p class="text-center">Jquery</p>

                        </div>
                        <div id='bootstrap'>
                        <i class="devicon-bootstrap-plain"></i>
                            <p class="text-center">Bootstrap</p>

                        </div>
                        <div id='mysql'>
                            <i class="devicon-mysql-plain"></i>
                            <p class="text-center">Mysql</p>

                        </div>
                        <div id='mongodb'>
                        <i class="devicon-mongodb-plain"></i>
                            <p class="text-center">MongoDB</p>

                        </div>

                    </row>
                </div>
            </div>
        );
    }
}
export default Skills;