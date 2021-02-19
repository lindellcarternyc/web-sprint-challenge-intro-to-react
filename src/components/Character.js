import React from 'react'
import styled from 'styled-components'

export const CharacterWrapper = styled.article`
    background: ${({ theme }) => theme.color.background};
    padding: 0.5rem;
    border-radius: 2px;
    color: ${({ theme }) => theme.color.text};
    overflow: hidden;
    position: relative;
    height: 60px;
    transition: all 0.4s ease-in;

    &.active {
        height: 242px;
    }

    & > header {
        background-color: ${({ theme }) => theme.color.primary};
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        border-radius: 2px;
        
        h3 {
            font-weight: 100;
        }

        button {
            padding: 0.25rem 0.5rem;
            background-color: ${({ theme }) => theme.color.secondary};
            color: white;
            border-color: transparent;
            border-radius: 2px;
        }
    }

    & > div {
        padding: 1rem;
    }
`

export default function Character(props) {
    const { character, isOpen, onClickButton, id } = props
    const onClick = (evt) => {
        onClickButton(id)
    }

    return (
        <CharacterWrapper className={isOpen ? 'active' : ''}>
            <header>
                <h3>{character.name}</h3>
                <button onClick={onClick}>{isOpen ? 'Hide' : 'Show'} Details</button>
            </header>
            <div>
                <p>Height: {character.height}cm</p>
                <p>Weight: {character.mass}kg</p>
                <p>Hair color: {character.hair_color}</p>
                <p>Skin color: {character.skin_color}</p>
                <p>Eye color: {character.eye_color}</p>
                <p>Birth year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </CharacterWrapper>
    )
}