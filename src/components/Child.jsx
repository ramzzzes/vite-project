import {useState} from "react";

const Child = ({onButtonClick}) => {
     // number =  15;

    // return <>
    //     <br/>
    //     this is state number from child component : {number}
    //     <br/>
    //     <button onClick={() => setNumber(20)}>change Number from child component</button>
    // </>

    console.log('Child component rendered');
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={onButtonClick}>Show Count</button>
        </div>
    );
}

export default Child
