import * as React from "react"

// styles
//we removed the inline styles in favor of stylesheet for the sake of code clarity 

// Import Main SCSS Entry Point Stylesheet
import "../sass/main.scss"

// Import Page Components
import Space from "../components/Space"


// markup this is where the "react app" is edited like we know how it works
const IndexPage = () => {
  return (
    <main>
      <Space />
      <div>
        <h1>Hello world Gatsby style!</h1>
        <img src="https://c.tenor.com/L9Geb6hCmCEAAAAM/dance-move.gif"/>
      </div>
    </main>
  )
}

export default IndexPage
