import * as React from 'react';
interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}
export class Hello extends React.Component<IProps, {}> {
   render() {
   const {framework,compiler,bundler} = this.props
   return <h1>This is a {framework} application {compiler} with {bundler}</h1>
   }
}
