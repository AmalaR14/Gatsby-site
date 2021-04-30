import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const PhoneTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiProduct.title}</h1>
    <Img fixed={data.strapiProduct.image.childImageSharp.fixed}/>
    <p>{data.strapiProduct.description}</p>
  </Layout>
)

export default PhoneTemplate

export const query = graphql`
  query PhoneTemplate($id: String!) {
    strapiProduct(id: {eq: $id}) {
      Title
      description
      image {
          childImageSharp {
            fixed(width:150,height:150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
    }
  }
`;
