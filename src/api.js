import axios from 'axios'

export const fetchAllCharacters = (url, resolve, reject, characters = []) => {
    axios.get(url)
        .then(response => {
            const fetchedCharacters = characters.concat(response.data).map(char => {
                const urlParts = char.url.split('/')
                const id = urlParts[urlParts.length - 2]
                return {
                    ...char,
                    id
                }
            })
            return resolve(fetchedCharacters)
        })
        .catch(err => {
            console.error(err)
            reject(`An error occurred!`)
        })
}