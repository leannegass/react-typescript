import React from 'react';

export const Message = (prop:{data : string}):any => {

    function greeter(name : string, age ?: number, ...skills : string[]): any {
        return (
            <p>Hi {name +" " + skills.join(',')} </p>
        )
    }

    return (
        <>
          <h1> {prop.data} </h1>
          <h2>{greeter('leanne',55,'Java','Javascript')} </h2>

        </>
    )
}