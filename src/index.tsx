import React, { FC } from "react"
import ReactDOM from "react-dom"

const RootComponent: FC = () => {
  return (
    <main>
      <h1>TEST</h1>
    </main>
  )
}

ReactDOM.render(
  <RootComponent />,
  document.getElementById("root") as HTMLElement
)
