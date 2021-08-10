import{ Component } from 'react';
// npm install --save-dev @iconify/react @iconify-icons/icon-park
import { Icon } from '@iconify/react';
// npm install --save-dev @iconify/react @iconify-icons/simple-icons
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
// npm install --save-dev @iconify/react @iconify-icons/ic
import baselineAlternateEmail from '@iconify-icons/ic/baseline-alternate-email';




class contact extends Component {
    render() {
        return (
            <div id='contact'>




                <div className="container contact">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-info">
                                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
                                <h3>Contacter Moi pour plus d'informations</h3>
                            </div>
                            
                        </div>
                        <div className="col-md-9">
                            <div className="contact-form">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="fname">Prénom:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="lname">Nom:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="email">Email:</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" for="comment">Message:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" id="comment"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" variant="dark">Envoyer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default contact;