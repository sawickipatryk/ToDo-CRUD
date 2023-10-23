import objectToArray from './objectToArray'

export const getData = async (url) => {

    const response = await fetch(url)
    const data = await response.json()
    return objectToArray(data, 'key')

}
export default getData