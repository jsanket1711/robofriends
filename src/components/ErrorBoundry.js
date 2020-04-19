import React, { Component } from 'react';


class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }


    componentDidCatch(eroor, info) {
        this.setState({ hasError : true})
    }


    render() {
        if(this.state.hasError){
            return <h1> Oooops. This is not good </h1>

        }
        return this.props.children
    }


}
export default ErrorBoundry;