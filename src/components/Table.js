import React from 'react'

const Table = (props) => {

    let newArray = props.map(e => (<div>{e.x1}, {e.x2}</div>))
    return (
        <div>
            {newArray}
        </div>
    )
}

export default Table
