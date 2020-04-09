import React from 'react';

class ListData extends React.Component{

    constructor(props)
    {
        super(props);
    }

    
    retList()
    {
        return this.props.List.map(l=><li>{l}</li>);
    }
    render(){

        return(
            <ul>
                {this.retList()}
            </ul>
        );

    }

}

export default ListData;