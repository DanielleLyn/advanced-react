import React, {Component} from 'react';

export default (ComponentToRender) =>
    class extends Component{
    render(){
        const {loadingImage, ...props} = this.props 
        //componentToRender won't get the image, just data and name  
        return(
            <div>
            {this.props.data.length ? 
            <ComponentToRender {...props} /> : //gives componentToRender the same properties as props
             <img 
            src={loadingImage} alt ='Loading..' 
            />
            }
            </div>
        )
    }
}

//anonymous class
