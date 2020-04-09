
import React from "react";
import PrintList from './printlist';

class UserData extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {

            username:"bhadresh",
            emailid:"bhadresh@dashtechinc.com",
            technologies:[
                "Angular Js",
                "Angular 2+",
                "React Js",
                "Node Js"
            ],
            database:[
                "MS SQL",
                "My SQL",
                "NoSQL Mongodb"
            ]
        };    
    }

    render(){
        return(
            <div>
                <h3>User Data</h3>
                <table className="table table-border">
                    <tr>
                        <td>User Name:</td><td>{this.state.username}</td>
                    </tr>
                    <tr>
                        <td>
                            Email Id:
                        </td>
                        <td>
                           {this.state.emailid}
                        </td>
                    </tr>
                    <tr>
                        <th>Technolgoies:</th>
                        <th>
                            Database
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <PrintList list={this.state.technologies}/>
                        </td>
                        <td>
                        <PrintList list={this.state.database}/>
                        </td>
                    </tr>
                </table>
               
            </div>
        );
    }
}

export default UserData;