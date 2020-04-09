
import React from "react";

class UserDetails extends React.Component{
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
    returnTechs()
    {
        return this.state.technologies.map(tech=><li>{tech}</li>);
    }
    returnDatabase()
    {
        return this.state.database.map(d=><li>{d}</li>);
    }
    render(){
        return(
            <div className="col-md-8 col-md-offset-2">
                <h2>User Details</h2>
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
                        <td><ul>{this.returnTechs()}</ul></td>
                        <td>
                            <ul>{this.returnDatabase()}</ul>
                        </td>
                    </tr>
                </table>
                
            </div>
        );
    }

}

export default UserDetails;