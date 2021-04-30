import React from 'react'
import {Link,graphql} from 'gatsby'

const Menu=({data})=>(
  <div style={{
    background:'#f4f4f4',
    paddingTop:'10px'
  }}>
  <ul style={{
    listStyle:'none',
    display:'flex',
    justifyContent:'space-evenly'
  }}>
  <li><Link to="/Product_1">Iphone11</Link></li>
  <li><Link to="/Product_3">Ipad</Link></li>
  <li><Link to="/Product_2">Samsung galaxy s10</Link></li>
  <li><Link to="/Product_4">test product</Link></li>
  <li><Link to="/contact">Contact us</Link></li>
  </ul>
  </div>
)
export default Menu;

export const menuquery=graphql`
query mQuery {
  allStrapiProduct {
    edges{
      node{
       id
       Title
       description
       price
      }
    }
  }
}
`;
