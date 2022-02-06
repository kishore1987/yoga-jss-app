import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

class Hero extends React.Component {
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
        return (<div className="hero">
        <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className="hero-text">
                    <h1>{props.title.value}</h1>
                    <RichText field={props.description} tag="p"></RichText>
                    {this.renderCTAButtons(props.CTAButtons)}
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
                <div className="hero-image">
                    <img src={props.image.src} alt="Hero Image"></img>
                    </div>
                    </div>
                 </div>
            </div>
        </div>)
    }
}

export default Hero;
