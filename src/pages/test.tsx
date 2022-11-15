import React from 'react'
import { graphql } from 'gatsby'
export default function test({data}:any) {
    
  return (
    <div>
        <h1>test</h1>
        <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}

export const query=graphql`
    query{
        site {
          siteMetadata {
            title
          }
        }
      }
`