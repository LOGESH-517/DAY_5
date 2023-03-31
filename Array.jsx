import React from "react";
const Array=(props)=>{
    if(props.a.every((ele)=>typeof ele==='string'))
    {
        return(
            <div>
                <ul>
                    <ul>{props.a[0]}</ul>
                    <ul>{props.a[1]}</ul>
                    <ul>{props.a[2]}</ul>
                    <ul>{props.a[3]}</ul>
                </ul>
            </div>
        )
    }
    else
    {
        throw new Error("Error caught!!!");
    }
}
export default Array;