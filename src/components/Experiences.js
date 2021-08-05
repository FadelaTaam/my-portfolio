import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class Experiences extends Component {
    render() {
        return (<section>
            <h3>EXPERIENCES</h3>
            <VerticalTimeline>
                <VerticalTimelineElement>

                    Mon futur stage dans votre entreprise ;-)
              </VerticalTimelineElement>

                <VerticalTimelineElement >
                    <p>Formation Social Builder & Konexio</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement >
                    <p>LEA (Langues Etrangères Appliqués)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement >
                    <i class="fas fa-hourglass-start mx-auto experience-icon"></i>
                    <p>BTS Commerce International</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>

        )
    }
}
export default Experiences;