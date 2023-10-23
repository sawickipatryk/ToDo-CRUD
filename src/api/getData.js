import objectToArray from './objectToArray'

export const getData = (url) => {

    return fetch(url)
        .then((response) => response.json())
        .then((data) => objectToArray(data))

}
export default getData