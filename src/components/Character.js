import React from 'react'

export default function Character(props) {
    const { character } = props

    return (
        <div>
            {JSON.stringify(character)}
        </div>
    )
}