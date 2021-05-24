class Task {
  text = '';
  done = false;
  element = null;

  constructor (text) {
    this.text = text;
  }

  render () {
    if (!this.element) {
      this.element = document.createElement ('div');
    }

    this.element.classList = 'task';
    this.element.innerHTML = this.text;

    let place = null;
    if (this.done) {
      place = document.querySelector ('.block-done');
    } else {
      place = document.querySelector ('.block-todo');
      this.element.appendChild (this.createButton ());
    }
    place.appendChild (this.element);
  }

  createButton () {
    const btn = document.createElement ('button');
    btn.classList = 'button';
    btn.innerHTML = '&#10004; DONE';

    btn.addEventListener ('click', this.clickedButton.bind (this));

    return btn;
  }

  clickedButton () {
    this.done = true;
    this.render ();
  }
}

const form = document.querySelector ('form');
form.addEventListener ('submit', function () {
  event.preventDefault ();

  const input = document.querySelector ('input');
  let newTask = new Task (input.value);
  newTask.render ();
  newTask.createButton ();
  input.value = '';
});
