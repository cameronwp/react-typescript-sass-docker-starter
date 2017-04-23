import * as React from "react";
import "./main-container.scss"

export interface MainProps { to: string }

export class Main extends React.Component<MainProps, undefined> {
  render() {
    return <h1 className="main">Hello, {this.props.to}!?</h1>;
  }
}
