class Task {
    text = ''
    done = false

    constructor (text) {
    this.text = text 
    }

    render () {
        const place = document.querySelector ('.block-todo')
        const element = document.createElement('div')
        element.classList = 'task'
        element.innerHTML = this.text
        place.appendChild(element)
        
    }

    createButton () {
        const btn = document.createElement('button')
        btn.classList = 'button'
        btn.innerHTML = 'Done!'
        const btnPlace = document.querySelector('.task')
        btnPlace.appendChild(btn)
    }

}



const form = document.querySelector('form')
form.addEventListener('submit', function () {    
    event.preventDefault()

    const input = document.querySelector('input')
    const newTask = new Task(input.value)
    newTask.render()
    newTask.createButton()
    input.value = ''
})