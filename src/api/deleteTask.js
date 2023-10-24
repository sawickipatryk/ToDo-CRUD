import { makeApiUrl } from './makeApiUrl'

export const deleteTask = async (taskKey) => {
    const apiUrl = makeApiUrl(`${taskKey}`)

    const response = await fetch(apiUrl, {
        method: 'DELETE',
    })
    return await response.json()
}

export default deleteTask