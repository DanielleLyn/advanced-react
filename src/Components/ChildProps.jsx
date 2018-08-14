import React, {Component} from 'react';

export default class ChildProps extends Component{
    constructor (){
        super()

        this.state={
            counter:0
        }
      this.timer = setInterval(this.rotateThrough, 2000) 
    }

    rotateThrough = () => {
        let newDisplay = this.state.counter;
        newDisplay += 1; 
        if (newDisplay >= this.props.children.length) {
            newDisplay = 0;
        }
        this.setState({counter: newDisplay})
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        console.log('props', this.props)
        return(
            <figure>{this.props.children[this.state.counter]}</figure>
        )
    }
}
