import React, { Component } from 'react'; //gotta destructure 

class ErrorBoundry extends Component {
    constuctor(props){    // eslint-disable-next-line
        //super(props);
        this.setState = {
            hasError: false
        }
    }

//react lifeCycle hook (like try catch block)
    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }


    render(){
        if (this.setState.hasError){ 
           return <h1>That ain't good</h1>
        }
        return this.props.children
    }
         
}



export default ErrorBoundry;
