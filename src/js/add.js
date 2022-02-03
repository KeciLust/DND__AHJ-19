export default function add() {
  document.addEventListener('click', (e) => {
    e.preventDefault();
    const buttonAdd = e.target.closest('.add_null');
    if (!buttonAdd) {
      return;
    }
    const column = e.target.closest('.column');
    const del = document.querySelector('.add_up');
    if (del) {
      del.classList.remove('add_up');
      del.classList.add('add_null');
      del.style.width = '90%';
      document.querySelector('.input').remove();
      document.querySelector('.add_del').remove();
    }

    buttonAdd.classList.add('add_up');
    buttonAdd.classList.remove('add_null');
    const input = document.createElement('textarea');
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('add');
    buttonDel.classList.add('add_del');
    buttonDel.style.width = '40%';
    buttonAdd.style.width = '40%';
    buttonDel.textContent = 'Стереть';
    input.classList.add('input');
    input.placeholder = 'Введите заметку';
    column.insertBefore(input, buttonAdd);
    column.append(buttonDel);
  });
}
