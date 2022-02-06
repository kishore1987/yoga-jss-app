import React from 'react';
import { Text, RichText, ReactDOM } from '@sitecore-jss/sitecore-jss-react';

class Header extends React.Component {

  handleClick = (e) => {
    console.log(e);
  }
constructor(props) {
    super(props);
  }
handleMouseOver(event){
   let ddm = event.currentTarget.querySelector('.dropdown-menu')
    event.currentTarget.classList.add('show');
    ddm.classList.add('show');
}
handleMouseOut(event){
 let ddm = event.currentTarget.querySelector('.dropdown-menu')
  event.currentTarget.classList.remove('show');
  ddm.classList.remove('show');
}
  renderNavigation = (navLinks) => (
    <div className="navbar-nav ml-auto">
	{navLinks.map((navLink) => {
    if(navLink.children.length < 1) {
      return  <a key={navLink.id} href={navLink.link.url} className="nav-item nav-link" >{navLink.title.value}</a>
    }
    return (<div key={navLink.url} className="nav-item dropdown" onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>
    <a key={navLink.id} href={navLink.link.url}  className="nav-link dropdown-toggle">{navLink.title.value}</a>
    <div key={navLink.title.value}  className="dropdown-menu" >
      {navLink.children.map(navLinklvl2 => (
         <a key={navLinklvl2.id} href={navLinklvl2.link.url} className="dropdown-item" >{navLinklvl2.title.value}</a>
      ))}
    </div>
  </div>)
  })}
	</div>
 );


render() {
	// const props = this.props;
 const navLinks = this.props.fields.data.datasource.children;
	// this.renderNavigation(navLinks)
    return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a href="/" className="navbar-brand">
        <RichText field={this.props.fields.data.datasource.logotitle} tag="section"></RichText>
      </a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        {this.renderNavigation(navLinks)}
		 </div>
    </div>
  </div>
    );
  }
}
export default (Header);

