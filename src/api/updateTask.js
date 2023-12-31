import { makeApiUrl } from './makeApiUrl'

export const update = async (taskKey, dataToUpdate) => {
    const apiUrl = makeApiUrl(`${taskKey}`)

    const response = await fetch(apiUrl, {
        method: 'PATCH',
        body: JSON.stringify(dataToUpdate)
    })
    return await response.json()
}

export default update