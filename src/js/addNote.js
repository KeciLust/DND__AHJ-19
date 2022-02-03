export default function addNote() {
  const buttonAdd = document.querySelector('.add_up');
  const inputText = document.querySelector('.input');
  const column = buttonAdd.closest('.column');
  buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (!buttonAdd) {
      return;
    }
    if (inputText.value) {
      const note = document.createElement('div');
      const buttonRes = document.createElement('button');
      buttonRes.classList.add('res');
      note.classList.add('note');
      note.textContent = `${inputText.value}`;
      column.append(note);
      note.append(buttonRes);
      buttonRes.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.target.closest('.note').remove();
      });
      const columnL = document.querySelector('.add_up').closest('.column');
      document.querySelector('.add_up').remove();
      document.querySelector('.input').remove();
      document.querySelector('.add_del').remove();
      const button = document.createElement('button');
      button.classList.add('add');
      button.classList.add('add_null');
      button.textContent = 'Добавить';
      columnL.append(button);
    }
  });
}
