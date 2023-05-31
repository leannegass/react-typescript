import React from 'react';

export const Message = (prop:{data : string}):any => {
    //rest params should be last 
    function greeter(name : string, age ?: number, ...skills : string[]): any {
        return (
            <p>Hi {name +" " + skills.join(',')} </p>
        )
    }
    //function overloading is same function multiple times with differeent types
    function add(a : number, b : number) : number {
        return <> {a + b} </>
    }

    function add(a : string, b : string) : string {
        return <> {a + b} </>
    }
    


    return (
        <>
          <h1> {prop.data} </h1>
          <h2>{greeter('leanne',55,'Java','Javascript')} </h2>
          <p>{add(1,6)}</p>
          <p>{add('hi', 'Juno')} </p>

        </>
    )
}