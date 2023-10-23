import getData from "./api/getData"
import create from './api/create'
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
const handleAsyncAction = async (asyncAction) => {
    isLoading = true
    try {
        await asyncAction()
    } catch (error) {
        hasError = true
    } finally {
        isLoading = false
        update()
    }
}

const loadTasks = async () => {
    handleAsyncAction(async () => {
        tasks = await getData(URL_DB)
        console.log(tasks)
    })
}
const onChangeNewTaskInput = (e) => {
    isNewNameInputTaskFocused = true
    isSearchInputFocused = false
    newNameToTask = e.target.value
    console.log(newNameToTask)
}
const addNewTask = (newNameTask) => {

    if (!newNameTask) return

    const newTask = {
        name: newNameTask,
        isCompleted: false,
    }

    newNameToTask = ''

    return handleAsyncAction(async () => {
        await create(URL_DB, newTask)
        await loadTasks()
    })


}

const renderForm = () => {

    const form = document.createElement('form')
    form.className = 'todo-list__form'

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        addNewTask(newNameToTask)
    })

    const formButton = Button(
        'ADD',
        null,
        'todo-list__button-add'
    )
    const formInput = Input(
        'Type your task',
        onChangeNewTaskInput,
        newNameToTask,
        'todo-list__new-task-input'
    )

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
    const loading = Loader()

    const app = render()

    if (isLoading) {
        mainContainer.appendChild(loading)
    } else {
        mainContainer.appendChild(app)
    }

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

    mainContainer = container

    loadTasks()

    const app = render()

    if (isLoading) {
        container.appendChild(loading)
    } else {
        container.appendChild(app)
    }

}
init()