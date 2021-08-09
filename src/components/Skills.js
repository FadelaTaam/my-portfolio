import { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div id='skills'>
                <row>
                    <h4>SKILLS</h4>
                    <div class='html'>
                        <i class="devicon-html5-plain" size={{ size: '48' }}></i>
                        <p class="text-center">HTML 5</p>
                    </div>
                    <div class='css'>
                        <i class="devicon-css3-plain"></i>
                        <p class="text-center">CSS</p>
                    </div>
                    <div class='javascript'>
                        <i class="devicon-javascript-plain"></i>
                        <p class="text-center">Javascript</p>
                    </div>
                    <div class='react'>
                        <i class="devicon-react-original-wordmark"></i>
                    </div>
                    <div class='jquery'>
                        <i class="devicon-jquery-plain-wordmark"></i>
                    </div>
                    <div class='bootstrap'>
                        <i class="devicon-bootstrap-plain-wordmark"></i>
                    </div>
                    <div class='mysql'>
                        <i class="devicon-mysql-plain"></i>
                    </div>
                    <div class='mongodb'>
                        <i class="devicon-mongodb-plain-wordmark"></i>
                    </div>

                </row>
            </div>
        );
    }
}
export default Skills;