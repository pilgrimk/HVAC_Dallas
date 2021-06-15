import React from 'react';
import { Helmet } from 'react-helmet';

const Head = (props) => {
    return(
        <div>
        <Helmet>
          <title>{props.company_name}</title>
          <meta name="description" content={props.content}></meta>
          <link rel="icon"  href={props.icon_href}/>
        </Helmet>
      </div>
      )
}

export default Head;