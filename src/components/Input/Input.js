export const Input = (placeholder, onChange, value, className) => {

    const input = document.createElement('input')
    input.className = 'todo-list__input'

    if (className) {
        input.className = `${input.className} ${className}`
    }

    input.setAttribute('placeholder', placeholder)

    input.value = value

    input.addEventListener('input', onChange)


    return input

}
export default Input