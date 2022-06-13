import { Fragment } from "react";
import Link from 'next/link'
function NewsPage(){
    return <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href="news/something-imp">helo</Link></li>
        <li>hai</li>
        <li>demo</li>
      </ul>
    </Fragment> 
  }
  export default NewsPage;
  