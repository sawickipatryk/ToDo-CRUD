let mainContainer = null

const update = () => {

    mainContainer.innerHTML = ''

    const app = render()

    mainContainer.appendChild(app)

}

const render = () => {

    const container = document.createElement('div')

    return container

}
const init = (containerSelector = '#root') => {

    const container = document.querySelector(containerSelector)

    if (!container) {
        console.error('Type correct container')
    }

    mainContainer = container

    const app = render()

    container.appendChild(app)

}
init()