import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';


class DiscountBar extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      // const props = this.props;
     const props = this.props.fields;
        return (
          <div className="discount wow zoomIn" data-wow-delay="0.1s" style={{marginBottom:'90px'}}>
          <div className="container">
          <div className="section-header text-center">
                    <p>{props.Text.value}</p>
                    <RichText tag="h2" field={props.DiscountMessage}></RichText>
          </div>
          <div className="container discount-text">
          <RichText tag="p" field={props.Description}></RichText>
                    <a className="btn" href={props.Link.value.href}>Join Now</a>
                </div>
          </div>
      </div>
        );
      }
    }
export default DiscountBar;
