import React from 'react'
import { Button } from 'react-bootstrap'

class Demo extends React.Component{
    render(){
        return(
            <div>
                hello, my name is {this.props.name}
                <Button bsStyle="info"> click me</Button>
            </div>
        )
    }
}

export { Demo }