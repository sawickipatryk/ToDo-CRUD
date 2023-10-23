import { makeApiUrl } from './makeApiUrl'

export const update = (taskKey, dataToUpdate) => {
    const apiUrl = makeApiUrl(`${taskKey}`)

    return fetch(apiUrl, {
        method: 'PATCH',
        body: JSON.stringify(dataToUpdate)
    })
        .then((response) => response.json())
}

export default update