import { Component } from 'react';
// npm install --save-dev @iconify/react @iconify-icons/icon-park
import { Icon} from '@iconify/react';
// npm install --save-dev @iconify/react @iconify-icons/simple-icons
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
// npm install --save-dev @iconify/react @iconify-icons/ic
import baselineAlternateEmail from '@iconify-icons/ic/baseline-alternate-email';




class contact extends Component {
    render() {
        return (
            <div id='Footer'>
                <div>
                <h4>CONTACT</h4>
                <h4>----------</h4>
                </div>
                <div>
                <row id='Footer'>
                    <div>
                    <span id='github' class="iconify" data-icon="codicon:github"></span>
                        <li><a href="https://github.com/FadelaTaam" target="_blank">Github</a></li>
                    </div>
                    <div>
                        <Icon id='linkedin' icon={linkedinIcon} />
                        <li><a href="https://linkedin.com/in/fadela-taam-447444135"target="_blank">Linkedin</a></li>
                    </div>
                    <div>
                        <Icon id='email' icon={baselineAlternateEmail} />
                        <li><a href="/contact" target="_blank">Email</a></li>
                    </div>
                </row>
                </div>
            </div>
        );
    }
}
export default contact;