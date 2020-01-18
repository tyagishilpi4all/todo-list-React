import React from "react";

function Header(){
    const text ='Todo List';

    return(
        <React.Fragment>
            <div className="col-md-10 mx-auto d-flex header justify-content-center">
                <h3>{text}</h3>
            </div>
        </React.Fragment>
    )
}

export default Header;