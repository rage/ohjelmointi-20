import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { withTranslation } from "react-i18next"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

const StyledWord = styled.div`
  margin-bottom: 0.5em;
`

const Word = ({ word }) => {
  return (
    <StyledWord>
      <AnchorLink to={`${word.parentPagePath}#${word.id}`}>
        {word.id}
      </AnchorLink>
    </StyledWord>
  )
}

export default withTranslation("common")(withSimpleErrorBoundary(Word))
