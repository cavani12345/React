import React from 'react'

function ChildComp(props) {
    return (
        <div>
            {
                /* 
<button onClick={props.myparent}>Greet Parent</button>*/}
        <button onClick = { ()=>props.myparent('Cavani')}>Greet Parent</button>
        </div>
    )
}

export default ChildComp
