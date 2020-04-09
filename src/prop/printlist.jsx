

import React from "react";

class PrintList extends React.Component{
    constructor(props){
        super(props)

    }

    returnList()
    {
        return this.props.list.map(d=><li>{d}</li>);
    }

    render(){
        return(
            <ul>
                {this.returnList()}
            </ul>
        );
    }
}
export default PrintList;