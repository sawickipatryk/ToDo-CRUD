import getData from "./api/getData"
import Loader from "./components/Loader"
import Button from './components/Button'
import Input from './components/Input'

const URL_DB = 'https://patryk--sandbox-default-rtdb.europe-west1.firebasedatabase.app/.json'

let mainContainer = null
let isLoading = true
let tasks = []
let hasError = null

let newNameToTask = ''
let isNewNameInputTaskFocused = false

let searchPhrases = ''
let isSearchInputFocused = false

let sort = 'NONE'
let filter = 'ALL'

const appendArray = (array, container) => {
    array.forEach((element) => {
        container.appendChild(element)
    })
}

const loadTasks = async () => {
    isLoading = true
    hasError = false
    try {
        const data = await getData(URL_DB)
        tasks = data
    } catch (error) {
        hasError = true
        console.error(error)
    } finally {
        isLoading = false
        update()
    }
}
const onChangeNewTaskInput = (e) => {
    isNewNameInputTaskFocused = true
    isSearchInputFocused = false
    newNameToTask = e.target.value
    console.log(newNameToTask)
}

const renderForm = () => {

    const form = document.createElement('form')
    form.className = 'todo-list__form'

    const formButton = Button('ADD', null, 'todo-list__button-add')
    const formInput = Input('Type your task', onChangeNewTaskInput, newNameToTask, 'todo-list__new-task-input')

    form.appendChild(formInput)
    form.appendChild(formButton)

    return form

}

const renderTask = (task) => {

    const li = document.createElement('li')
    li.className = 'todo-list__item-task'

    const innerText = document.createTextNode(task.name)


    li.appendChild(innerText)

    return li

}

const renderTasks = (tasks) => {

    const container = document.createElement('ol')
    container.className = 'todo-list__tasks-container'

    tasks = tasks.map((task) => {
        return renderTask(task)
    })

    appendArray(tasks, container)

    return container

}

const update = () => {

    mainContainer.innerHTML = ''

    const app = render()

    mainContainer.appendChild(app)

}

const render = () => {

    const container = document.createElement('div')
    container.className = 'todo-list__wrapper'

    const headerContainer = document.createElement('div')
    headerContainer.className = 'todo-list__header-containe'

    const header = document.createElement('h1')
    header.className = 'todo-list__header'
    header.innerText = 'ToDo'


    const formElement = renderForm()
    const tasksElement = renderTasks(tasks)

    headerContainer.appendChild(header)
    container.appendChild(headerContainer)
    container.appendChild(formElement)
    container.appendChild(tasksElement)


    return container

}
const init = (containerSelector = '#root') => {
    const container = document.querySelector(containerSelector)
    const loading = Loader()

    if (!container) {
        console.error('Type correct container')
    }
    if (isLoading) {
        container.appendChild(loading)
    }

    mainContainer = container
    loadTasks()

    const app = render()

    app.appendChild(loading)
    container.appendChild(app)

}
init()