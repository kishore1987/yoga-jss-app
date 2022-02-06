import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';


class ClassList extends React.Component {
  constructor(props) {
      super(props);
    }
   handleclick(event){
    var activeItem = event.target.parentNode.querySelector('.filter-active')
    activeItem.classList.remove('filter-active')
    event.target.classList.add('filter-active')
   }
    renderClassTypes = (classTypes) => (
      <ul id="class-filter">
        <li data-filter="*" className="filter-active" onClick={this.handleclick}>All Classes</li>
    {classTypes.map((type) => (
       <li key={type.id} data-filter={'.'+type.cssClass.value} onClick={this.handleclick}>{type.title.value}</li>
    ))}
    </ul>
   )
    render() {
      // const props = this.props;
     const pops = this.props.fields.data.datasource;
     var i=0;
      const classes = pops.classtypes.map(ctype =>
        ctype.classes.map((yogaclass) => {
          var secs = (i*0.2);
          i++;
          return (<div className={'col-lg-4 col-md-6 col-sm-12 class-item ' + ctype.cssClass.value +' wow fadeInUp'} data-wow-delay={secs+'s'}>
          <div className="class-wrap">
              <div className="class-img">
                  <img src={yogaclass.image.src} alt="Image"></img>
              </div>
              <div className="class-text">
                  <div className="class-teacher">
                      <img src={yogaclass.trainer.info.profilePic.src} alt="Image"></img>
                      <h3>{yogaclass.trainer.info.name}</h3>
                      <a href="">+</a>
                  </div>
                  <h2>{yogaclass.title.value}</h2>
                  <RichText tag="div" className="class-meta" field={yogaclass.timings}></RichText>
              </div>
          </div>
      </div>)
      })
    );
        return (
          <div className="class">
          <div className="container">
              <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                  <p>{pops.title.value}</p>
                  <h2>{pops.description.value}</h2>
              </div>
              <div className="row">
                  <div className="col-12">
                      {this.renderClassTypes(pops.classtypes)}
                  </div>
              </div>
              <div className="row class-container" style={{position: 'relative',height:'734.3px'}} >{classes}</div>
          </div>
      </div>
        );
      }
    }
export default ClassList;
