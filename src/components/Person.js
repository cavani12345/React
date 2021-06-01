import React from 'react'
import './Person.css'

function Person({person}) {
    return (
        <div>
          <h3 className={`myfont heading`}> My name is {person.name} I am {person.age} old</h3>  
        </div>
    )
}

export default Person
