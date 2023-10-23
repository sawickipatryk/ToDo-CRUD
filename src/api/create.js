export const create = async (url, data) => {

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((response) => response.json())

}
export default create