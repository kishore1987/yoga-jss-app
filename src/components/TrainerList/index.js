import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';

class TrainerList extends React.Component {
  constructor(props) {
      super(props);
      var animate = 0.0;
    }
    handleMouseOver(event){
      let ddm = event.currentTarget.querySelector('.dropdown-menu')
       event.currentTarget.classList.add('show');
       ddm.classList.add('show');
   }
   handleFilterClick(event){
    let ddm = event.currentTarget.querySelector('.dropdown-menu')
     event.currentTarget.classList.remove('show');
     ddm.classList.remove('show');
   }
    renderSocialLinks = (socialLinks) => (
      <div className="team-social">
    {socialLinks.map((socialLink) => (
       <a key={socialLink.id} href={socialLink.link.url}><i className={socialLink.linkCss.value}></i></a>
    ))}
    </div>
   );
  renderTrainerList = (trainerList) => (
    <div class="row">
    {trainerList.map((trainer,i) => {
      var secs = (i*0.2);
      console.log(secs)
       return (<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={secs+'s'}>
       <div className="team-item">
           <div className="team-img">
               <img src={trainer.image.src} alt="Image"></img>
               {this.renderSocialLinks(trainer.socialLinks.items)}
           </div>
           <div className="team-text">
               <h2>{trainer.title.value}</h2>
               <p>{trainer.description.value}</p>
           </div>
       </div>
   </div>)
})}
    </div>
   );
  render() {
    const props = this.props.fields.data.datasource;
     const trainers = props.trainers;
      return (
        <div class="team">
        <div class="container">
             <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>{props.title.value}</p>
                <h2>{props.description.value}</h2>
              </div>
                {this.renderTrainerList(trainers)}
            </div>
          </div>
      );
    }
  }
  export default withTranslation()(TrainerList);
