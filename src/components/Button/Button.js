export const Button = (label, onClick, className) => {

    const button = document.createElement('button')
    button.className = 'todo-list__button'

    if (onClick) {
        button.addEventListener('click', onClick)
    }

    if (className) {
        button.className = `${button.className} ${className}`
    }

    button.innerText = label

    return button

}
export default Button