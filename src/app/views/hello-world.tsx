import * as React from "react"
import "./hello-world.scss"

export interface HelloWorldProps { to: string }

export class Hello extends React.Component<HelloWorldProps, undefined> {
  render() {
    return <h1 className="main">Hello, {this.props.to}!</h1>;
  }
}
