import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import StarIcon from '@material-ui/icons/Star'

class Experiences extends Component {
    render() {
        return (<section>
            <h3>EXPERIENCES</h3>
            <VerticalTimeline>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <p>De Septembre à ∞ Mon futur stage dans votre entreprise </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <p>Formation Social Builder & Konexio</p>
                    <ul>
                        <li>Html & Css</li>
                        <li>Javascript</li>
                        <li>Jquery</li>
                        <li>React & react native</li>
                        <li>Node Js</li>
                        <li>MongoDB</li>
                        <li>Heroku</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <p>LEA (Langues Etrangères Appliqués)</p>
                    <p>Université Paris 13</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <i class="fas fa-hourglass-start mx-auto experience-icon"></i>
                    <p>BTS Commerce International</p>
                    <p>Lycée Jean Zay</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>

        )
    }
}
export default Experiences;