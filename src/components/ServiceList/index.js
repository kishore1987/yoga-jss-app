import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';


class ServiceList extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      // const props = this.props;
     const props = this.props.fields.data.datasource;
     var i=0;
      const services = props.services.map((yogaservice) => {
          var secs = (i*0.2);
          i++;
          return (<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={secs+'s'}>
          <div className="service-item">
          <div className="service-icon" >
                  <i className={yogaservice.cssClass.value} ></i>
          </div>
          <h3>{yogaservice.title.value}</h3>
          <RichText tag="p" field={yogaservice.description}></RichText>
      </div>
      </div>)
      });
        return (
          <div className="service">
          <div className="container">
              <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                  <p>{props.title.value}</p>
                  <h2>{props.description.value}</h2>
              </div>
              <div className="row" >{services}</div>
          </div>
      </div>
        );
      }
    }
export default ServiceList;
