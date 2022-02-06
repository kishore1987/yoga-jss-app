import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

class AboutUsHero extends React.Component {
    constructor(props) {
        super(props);
      }
      renderCTAButtons = (CtaButtons) => (
        <div className="hero-btn">
            {CtaButtons.map((CtaButton) => (
         <a key={CtaButton.link.url} href={CtaButton.link.url} className="btn">{CtaButton.title.value}</a>
      ))}
    </div>
    );
    render() {
        const props = this.props.fields.data.datasource;
        return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="about-img">
                        <img src={props.image.src} alt="Image"></img>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="section-header text-left">
                        <p>{props.tagline.value}</p>
                        <h2>{props.title.value}</h2>
                    </div>
                    <RichText tag="div" className="about-text" field={props.description}></RichText>
                    <div className="about-text">
                    <RichText tag="section"  field={props.title.description}></RichText>
                    {this.renderCTAButtons(props.CTAButtons)}
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
}
export default AboutUsHero;
