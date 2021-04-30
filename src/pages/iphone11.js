import React from 'react'
import {Link , graphql} from 'gatsby'
import Layout from "../components/layout"
const iphonePage = ({data}) =>(
  <Layout>
    <h1>IPHONE 11</h1>
    <div>
    {data.allStrapiProduct.nodes.map(document=>(
      <p> {document.description} </p>
    ))}
    </div>
  </Layout>
)
export default iphonePage;
export const pageQuery=graphql`
query MyQuery {
  allStrapiProduct(filter: {Title: {eq: "iphone 11"}}) {
    nodes {
      id
      price
      description
      quantity
    }
  }
}

`;
