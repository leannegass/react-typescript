import React from 'react';

export const Message = (prop:{data : string}):any => {

    function greeter(name : string): any {
        return (
            <p>Hi {name} </p>
        )
    }

    return (
        <>
          <h1> {prop.data} </h1>
          <h2>{greeter('leanne')} </h2>

        </>
    )
}