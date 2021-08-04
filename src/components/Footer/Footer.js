import React, { Component } from 'react';
import { Link } from "react-router-dom";
// npm install --save-dev @iconify/react @iconify-icons/icon-park
import { Icon, InlineIcon } from '@iconify/react';
// npm install --save-dev @iconify/react @iconify-icons/simple-icons
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
// npm install --save-dev @iconify/react @iconify-icons/ic
import baselineAlternateEmail from '@iconify-icons/ic/baseline-alternate-email';




class contact extends Component {
    render() {
        return (
            <div id='Footer'>
                <row>
                    <h4>CONTACT</h4>
                    <div>
                        <i class="devicon-github-original"></i>
                        <li><Link to="https://github.com/FadelaTaam">Github</Link></li>
                    </div>
                    <div>
                        <Icon id='linkedin' icon={linkedinIcon} />
                        <li><Link to="https://linkedin.com/in/fadela-taam-447444135">Linkedin</Link></li>
                    </div>
                    <div>
                        <Icon id='email' icon={baselineAlternateEmail} />
                        <li><Link to="/contact">Email</Link></li>
                    </div>
                </row>
            </div>
        );
    }
}
export default contact;