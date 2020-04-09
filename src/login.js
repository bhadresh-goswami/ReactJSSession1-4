import React from 'react';

class Login extends React.Component{


    render(){

        return(

            <table>
            <tr>
                <td>
                    Enter User Name
                </td>
                <td>
                <input type="text" className="form-control"/>
                </td>
            </tr>
                <tr>
                    <td>
                        Enter User Password
                    </td>
                    <td>
                    <input type="Password"  className="form-control"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button className="btn btn-primary">Log In!</button>
                    </td>
                </tr>
            </table>
            

        );

    }


}

export default Login;