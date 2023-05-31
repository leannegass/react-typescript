import React from 'react';

export const Message = (prop:{data : string}):any => {

    return (
        <>
          <h1> {prop.data} </h1>

        </>
    )
}