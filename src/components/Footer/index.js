import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';

class Footer extends React.Component {
  constructor(props) {
      super(props);
    }
  renderSocialLinks = (socialLinks) => (
      <div className="footer-social">
    {socialLinks.map((socialLink) => (
       <a key={socialLink.id} href={socialLink.link.url}><i className={socialLink.css.class}></i></a>
    ))}
    </div>
   );
  render() {
    const props = this.props.fields.data.datasource;
    const socialLinks = props.sociallinks.items;
    // this.renderNavigation(navLinks)
      return (
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container-fluid">
      <div className="container">
          <div className="footer-info">
              <a href="/" className="footer-logo">
                <RichText field={props.logoTitle} tag="section"></RichText>
              </a>
              <h3>{props.contact.info.address.value}</h3>
              <div className="footer-menu">
                  <p>{props.contact.info.phone.value}</p>
                  <p>{props.contact.info.email.value}</p>
              </div>
              {this.renderSocialLinks(socialLinks)}
          </div>
      </div>
      <div className="container copyright">
          <div className="row">
              <div className="col-md-6">
                  <RichText field={props.copyright} tag="p"></RichText>
              </div>
              <div className="col-md-6">
                  <p>{this.props.t('DesignedBy')}</p>
              </div>
          </div>
      </div>
  </div>
</div>
      );
    }
  }
  export default withTranslation()(Footer);
