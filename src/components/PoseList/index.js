import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';


class PoseList extends React.Component {
  constructor(props) {
      super(props);
    }
   handleclick(event){
    var activeItem = event.target.parentNode.querySelector('.filter-active')
    activeItem.classList.remove('filter-active')
    event.target.classList.add('filter-active')
   }
   renderPoseTypes = (poseTypes) => (
      <ul id="portfolio-filter">
        <li data-filter="*" className="filter-active" onClick={this.handleclick}>All Poses</li>
    {poseTypes.map((type) => (
       <li key={type.id} data-filter={'.'+type.cssClass.value} onClick={this.handleclick}>{type.title.value}</li>
    ))}
    </ul>
   )
    render() {
      // const props = this.props;
     const props = this.props.fields.data.datasource;
     var i=0;
      const poses = props.posetypes.map(ptype =>
        ptype.poses.map((posetype) => {
          var secs = (i*0.2);
          i++;
          return (<div className={'col-lg-4 col-md-6 col-sm-12 portfolio-item ' + ptype.cssClass.value +' wow fadeInUp'} data-wow-delay={secs+'s'}>
          <div className="portfolio-wrap">
          <a data-lightbox="portfolio">
                  <img src={posetype.image.src} alt="Portfolio Image"></img>
            </a>
          </div>
      </div>)
      })
    );
        return (
          <div className="portfolio">
          <div className="container">
              <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                  <p>{props.title.value}</p>
                  <h2>{props.description.value}</h2>
              </div>
              <div className="row">
                  <div className="col-12">
                      {this.renderPoseTypes(props.posetypes)}
                  </div>
              </div>
              <div className="row portfolio-container" >{poses}</div>
          </div>
      </div>
        );
      }
    }
export default PoseList;
