

import React  from "react";

class EventExample extends React.Component{

    //way 2 regular function
    constructor(props)
    {
        super(props);
        this.OnClickMe = this.OnClickMe.bind(this);//binding an event with some function
    }

    //simple function
    OnClickMe()
    {
        alert("this is function! that called on Click Event of Button!");
    }

    //way 1: arrow function

    ClickMe = () =>{
        alert("hi! i am clicked!");
    }

    //initialization of the function
    ClickMePass = (val) =>{
        alert(`hi! i am clicked! My Value is ${val}.`);
    }

    //ClickMePass('bhadresh');//execution of function

    render(){

        return(

            <div className="container">
                <div className="col-12"><h1>Event Handling</h1></div>
                <div className="col-md-8 col-md-offset-2">
                    <button className="btn btn-primary" onClick={this.ClickMe}>Click Me using Arrow!</button> &nbsp;
                    <button className="btn btn-primary" onClick={this.OnClickMe}>Click Me using Simple Function!</button>
                    &nbsp;
                    <button className="btn btn-primary" onClick={() => this.ClickMePass('bhadresh')}>Click Me - Pass Value!</button>

                </div>
            </div>

        );

    }


}

export default EventExample;