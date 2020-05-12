import React from "react"
import PagesContext from "../../contexes/PagesContext"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import Word from "./Word"

const WordContainer = styled.div`
  margin: 1em 2em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.25rem;
`

class Vocabulary extends React.Component {
  static contextType = PagesContext

  state = {
    render: false,
    pages: null,
  }

  async componentDidMount() {
    const value = this.context
    const pages = value.all
    this.setState({ pages, render: true })
  }

  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    console.log(this.state)
    return (
      <WordContainer>
        {this.state.pages &&
          this.state.pages.map((page, i) => (
            <div key={page.title}>
              {page.words.map((word, i2) => {
                return <Word index={i2} word={word} />
              })}
            </div>
          ))}
      </WordContainer>
    )
  }
}

export default withSimpleErrorBoundary(Vocabulary)
