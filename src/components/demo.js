import React from 'react'
import { Button } from 'react-bootstrap'

class Demo extends React.Component{
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(event){
        event.preventDefault()
        console.log("hey, I am clciked ")
    }

    render(){
        return(
            <div>
                hello, my name is {this.props.name}
                <Button bsStyle="info" onClick={this.onClick}> click me</Button>
            </div>
        )
    }
}

export { Demo }