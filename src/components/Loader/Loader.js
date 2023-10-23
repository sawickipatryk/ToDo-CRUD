export const Loader = () => {

    const container = document.createElement('div')
    container.className = 'todo-list__loader-container'
    const circle = document.createElement('div')
    circle.className = 'lds-ring'

    const firstDiv = document.createElement('div')
    const secondDiv = document.createElement('div')
    const thirdDiv = document.createElement('div')
    const fourthDiv = document.createElement('div')

    circle.appendChild(firstDiv)
    circle.appendChild(secondDiv)
    circle.appendChild(thirdDiv)
    circle.appendChild(fourthDiv)

    container.appendChild(circle)

    return container

}
export default Loader