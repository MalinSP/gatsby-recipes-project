import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  const author = data.site.siteMetadata.author

  return (
    <div>
      <h2>{author}</h2>
    </div>
  )
}

export const data = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          name
          age
        }
      }
    }
  }
`

export default Testing
