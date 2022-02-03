import addNote from './addNote';

export default function add() {
  document.addEventListener('click', (e) => {
    e.preventDefault();
    const buttonAdd = e.target.closest('.add_null');
    if (!buttonAdd) {
      return;
    }
    const column = e.target.closest('.column');

    if (document.querySelector('.add_up')) {
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

    const input = document.createElement('textarea');
    const buttonDel = document.createElement('button');
    const buttonUp = document.createElement('button');
    buttonDel.classList.add('add');
    buttonDel.classList.add('add_del');
    buttonUp.classList.add('add');
    buttonUp.classList.add('add_up');
    buttonDel.style.width = '40%';
    buttonUp.style.width = '40%';
    buttonDel.textContent = 'Закрыть';
    buttonUp.textContent = 'Записать';
    input.classList.add('input');
    input.placeholder = 'Введите заметку';
    column.insertBefore(input, buttonAdd);
    buttonAdd.remove();
    column.append(buttonUp);
    column.append(buttonDel);
    buttonDel.addEventListener('click', (ev) => {
      ev.preventDefault();
      const columnL = document.querySelector('.add_up').closest('.column');
      document.querySelector('.add_up').remove();
      document.querySelector('.input').remove();
      document.querySelector('.add_del').remove();
      const button = document.createElement('button');
      button.classList.add('add');
      button.classList.add('add_null');
      button.textContent = 'Добавить';
      columnL.append(button);
    });
    addNote();
  });
}
