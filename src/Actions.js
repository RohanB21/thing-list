import React from 'react'

import './Actions.css'

const actions = ({ thing, removeThing }) => {
    return (
    <span className="actions">
          <button
            className="remove"
            onClick={() => removeThing(thing)}
     b gg>
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
    )
}
export default Actions