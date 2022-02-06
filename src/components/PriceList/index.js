import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';


class PriceList extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      // const props = this.props;
     const props = this.props.fields.data.datasource;
     var i=0;
      const prices = props.prices.map((price) => {
        var secs = (i*0.3);
        i++;
        return (<div className="col-md-4 wow fadeInUp" data-wow-delay={secs+'s'}>
           <div className={'price-item ' + price.cssClass.value}>
           <div className="price-header">
           <div class="price-status">
                <span>{price.priceStatus.value}</span>
            </div>
              <div className="price-title">
                  <h2>{price.title.value}</h2>
              </div>
              <RichText tag="div" className="price-prices" field={price.price}></RichText>
            </div>
            <div className="price-body">
              <RichText tag="div" className="price-description" field={price.description}></RichText>
            </div>
            <div className="price-footer">
                <div className="price-action">
                    <a className="btn" href={price.link.url}>{price.linkTitle.value}</a>
                </div>
            </div>
      </div>
      </div>)
      });
        return (
          <div className="price">
          <div className="container">
              <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                  <p>{props.title.value}</p>
                  <h2>{props.description.value}</h2>
              </div>
              <div className="row" >{prices}</div>
          </div>
      </div>
        );
      }
    }
export default PriceList;
