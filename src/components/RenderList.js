import React from 'react'
import Person from "./Person";

function RenderList() {
    var persons = [
        {
            id:1,
            name:"Edison",
            age:20
        },
        {
            id:2,
            name:"Philius",
            age:25
        },
        {
            id:3,
            name:"Patrick",
            age:34
        }
    ]
    var personLists = persons.map( (person) =>(
        <Person key={person.id} person = {person}></Person>
    ))
    return <div>{personLists}</div>
    
}

export default RenderList
