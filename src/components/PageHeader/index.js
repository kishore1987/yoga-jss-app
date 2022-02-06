
import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
      }
      renderBredcrumb = (ancestors) => (
        <div className="col-12">
            {ancestors.map((ancestor) => (
         <a key={ancestor.url} href={ancestor.url}>{ancestor.breadcrumbTitle.value}</a>
      ))}
    </div>
    );
    render() {
        const item = this.props.fields.data.item;
        return (  <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>{item.pageTitle.value}</h2>
                </div>
                {this.renderBredcrumb(item.ancestors)}
            </div>
        </div>
    </div>)
    }
}

export default PageHeader;

