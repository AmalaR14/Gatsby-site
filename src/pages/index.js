import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
    {data.allStrapiProduct.edges.map(document=>(
      <li key={document.node.id}>
      <h2>
      <Link to={`/${document.node.id}`}>
      {document.node.Title}
      </Link>
      </h2>
      <Img fixed={document.node.image.childImageSharp.fixed}/>
      </li>
    ))}
    </ul>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage

export const pageQuery=graphql`
query IndexQuery {
  allStrapiProduct {
    edges{
      node{
       id
       Title
       description
       price
      image{
        childImageSharp{
          fixed(width:150,height:150){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
}
`;
