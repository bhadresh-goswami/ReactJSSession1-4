

import React from 'react';
import ListData from './listdata';

class Users extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            UserName:"Bhadresh",
            Techs:[
                "Angular",
                "Angular Js",
                "React Js",
                "Node Js"
            ],
            Database:[
                "MS SQL",
                "My SQL",
                "No SQL MongoDb"
            ]
        }
    }

    // retTechs()
    // {
    //     return this.state.Techs.map(t=><li>{t}</li>);
    // }
    // retDbs()
    // {
    //     return this.state.Database.map(d=><li>{d}</li>);
    // }


    render(){
        return(
            <div className="col-6">
                <table className="table table-border">
                    <tr>
                        <td>User Name</td>
                        <td>
                            {this.state.UserName}
                        </td>
                    </tr>
                    <tr>
                        <th>Technologies:</th>
                        <th>Database:</th>
                    </tr>
                    <tr>
                        <td>
                            <ListData List={this.state.Techs}/>
                            {/* {this.retTechs()} */}

                        </td>
                        <td>
                            
                            <ListData List={this.state.Database}/>
                            {/* {this.retDbs()} */}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default Users;