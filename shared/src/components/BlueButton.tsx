import React from "react";

const BlueButton: React.FunctionComponent<{}> = (props) => {

    const handleClick = () => {
        alert("Hello world");
    };

    return (<button className="blueButton" onClick={handleClick}>I am blue</button>);
}

export default BlueButton;