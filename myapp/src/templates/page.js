import * as React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



const Page=({data})=>{
    const page=data.wpPage
    return(
        <article>
            <h1>{page.title}</h1>
            {/* <div dangerouslySetInnerHTML={{_html: page.content}}  ></div> */}
            <div>{ ReactHtmlParser(page.content) }</div>
        <div>{page.image}</div>
    
        </article>
    )
}
export default Page 
export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
    }
}
`