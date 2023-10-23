import getData from "./api/getData"

const URL_DB = 'https://patryk--sandbox-default-rtdb.europe-west1.firebasedatabase.app/.json'

let mainContainer = null
let isLoading = true
let tasks = []
let hasError = null

const loadTasks = async () => {
    const data = await getData(URL_DB)
    return console.log(data)
}

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

    loadTasks()

    const app = render()

    container.appendChild(app)

}
init()