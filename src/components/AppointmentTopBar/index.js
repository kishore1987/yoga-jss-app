
import React from 'react';
import { Text,RichText } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';

class AppointmentTopBar extends React.Component {
  constructor(props) {
      super(props);
    }
  renderSocialLinks = (socialLinks) => (
      <div className="social">
    {socialLinks.map((socialLink) => (
       <a key={socialLink.id} href={socialLink.link.url}><i className={socialLink.css.class}></i></a>
    ))}
    </div>
   );
  render() {
    const props = this.props.fields.data.datasource;
    const socialLinks = props.sociallinks.items;
    console.log(socialLinks)
    // this.renderNavigation(navLinks)
      return (
        <div className="top-bar d-none d-md-block">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="top-bar-left">
                            <RichText field={props.contact.info.officeTimings} className="text" tag="div"></RichText>
                        <div className="text">
                            <i className="fa fa-phone-alt"></i>
                            <h2><Text field={props.contact.info.phone} ></Text></h2>
                            <p>{this.props.t('For Appointment')}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="top-bar-right">
                        {this.renderSocialLinks(socialLinks)}
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default withTranslation()(AppointmentTopBar);
