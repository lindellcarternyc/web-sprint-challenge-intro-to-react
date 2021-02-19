import React, { useState } from 'react'
import styled from 'styled-components'

import Character, { CharacterWrapper } from './Character'

const CharacterListWrapper = styled.ul`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    & > ${CharacterWrapper} {
        margin-bottom: 1rem;
    }
`

const CharacterList = ({ characters }) => {
    const [openCharId, setOpenCharId] = useState(null)

    const onClickCharacterButton = (id) => {
        if (openCharId === id) {
            return setOpenCharId(null)
        }
        setOpenCharId(id)
    }
    
    if (characters.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <CharacterListWrapper>
            {characters.map((character, idx) => {
                return <Character 
                    character={character} 
                    key={`${character.name}--${idx}`}
                    onClickButton={onClickCharacterButton}
                    id={character.id}
                    isOpen={character.id === openCharId}
                />
            })}
        </CharacterListWrapper>
    )
}

export default CharacterList