
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>object =>HTML element(render)

const heading = React.createElement("div",{id:"parrent"},
[React.createElement("div",{},"I am cool"),
React.createElement("div",{},"I an Engeneer")]);
 
// JSX - it is an html/XML like syntax,
// JSX - (Transpiled before it reaches the JS) - parcel - babel(javascript compiler),
// JSX => React.createElement => JS object => HTML element

const JSXheading = ( <h1 id="headingg" className="head">Namaste React using JSX </h1> ); //--it is JSX

//React functional component

const HeadingComponent =() => {
    return (
    <div>
        <h1 className="header">namaste react 87374987</h1>
    </div>
    );
};

// it is component compositon;
const HeadingComponent2 =() =>  (
    <div>
    {JSXheading}
    { HeadingComponent() }
    <h1 className="headinggg">namaste react usin JSX</h1>
    <HeadingComponent/>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);

console.log(heading) // object
