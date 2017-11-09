import React from 'react'

class Demo extends React.Component{
    render(){
        return(
            <div>
                hello, my name is {this.props.name}
            </div>
        )
    }
}

export { Demo }