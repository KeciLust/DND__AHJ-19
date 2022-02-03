export default function move() {
  let dragNote = null;
  let dropNote = null;
  const con = document.querySelector('.container');
  con.addEventListener('mousedown', (e) => {
    if (!e.target.closest('.note')) {
      return;
    }
    dragNote = e.target;
    dropNote = e.target.cloneNode(true);
    dropNote.classList.add('drag');
    document.body.appendChild(dropNote);
    dropNote.style.left = `${e.pageX - dropNote.offsetWidth / 2}px`;
    dropNote.style.top = `${e.pageY - dropNote.offsetHeight / 2}px`;
  });
  con.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!dragNote) {
      return;
    }
    dropNote.style.left = `${e.pageX - dropNote.offsetWidth / 2}px`;
    dropNote.style.top = `${e.pageY - dropNote.offsetHeight / 2}px`;
  });
  con.addEventListener('mouseleave', () => {
    if (!dragNote) {
      return;
    }
    document.body.removeChild(dropNote);
    dragNote = null;
    dropNote = null;
  });
  con.addEventListener('mouseup', (e) => {
    if (!dragNote) {
      return;
    }
    const sibl = document.elementFromPoint(e.clientX, e.clientY);
    
    
    sibl.insertBefore(dragNote, sibl.lastChild);
    document.body.removeChild(dropNote);
    dragNote = null;
    dropNote = null;
  });
}
