import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';

import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
// import './assets/style.css';
// import './assets/lib/lightbox/css/lightbox.min.css';
// import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
// import './assets/lib/flaticon/font/flaticon.css';
// import './assets/lib/animate/animate.min.css';


const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
    <VisitorIdentification />

    {/* root placeholder for the app, which we add components to using route data */}
    <Placeholder name="jss-main" rendering={route} />
  </React.Fragment>
);

export default Layout;
