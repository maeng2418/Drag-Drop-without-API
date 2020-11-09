import { Note } from 'components';
import { getState, setState, setEvent } from '../store';

// 샘플 데이터 세팅
const init = () => {
  const todoNotes = ['안녕', '하세요', '저는', '김명성', '입니다'];
  const doingNotes = ['무엇을', '해야', '할까요', '잘 모르겠어요'];
  const doneNotes = ['끝낸게', '있을까?', '진짜', '모르겠다'];

  const $todo = document.querySelector('#todo-list .column-content');
  const $doing = document.querySelector('#doing-list .column-content');
  const $done = document.querySelector('#done-list .column-content');

  todoNotes.forEach((note, idx) => ($todo.innerHTML += Note([note], { id: `todo-${idx}` })));
  doingNotes.forEach((note, idx) => ($doing.innerHTML += Note([note], { id: `doing-${idx}` })));
  doneNotes.forEach((note, idx) => ($done.innerHTML += Note([note], { id: `done-${idx}` })));
};

// 칼럼 이벤트 핸들러
const onColumnHandler = (id) => {
  console.log(id);
};
// 노트 이벤트 핸들러
const onNoteHandler = (id, offsetX, offsetY, clientX, clientY) => {
  const $todo = document.querySelector('.todo');
  const $note = document.getElementById(id);
  const { width, height } = $note.getBoundingClientRect();
  const $transparency = $note.cloneNode(true);
  const $dragElement = $note.cloneNode(true);
  $dragElement.setAttribute(
    'style',
    `border: .5rem solid gray;
     position: absolute;
     width: ${width}px;
     height: ${height}px;
     left: ${clientX - offsetX}px;
     top: ${clientY - offsetY}px;
     box-sizing: border-box;`
  );
  $todo.append($dragElement);
  $todo.addEventListener('mousemove', (e) => {
    $dragElement.style.left = `${e.clientX - offsetX}px`;
    $dragElement.style.top = `${e.clientY - offsetY}px`;
  });
};

const onEventHandler = () => {
  window.addEventListener('load', () => {
    init();
  });
  document.getElementById('root').addEventListener('click', async (e) => {
    e.preventDefault();
    if (e.target.closest(`.note`)) {
      // 노트자체에서 이벤트가 발생한 위치
      const { offsetX, offsetY, clientX, clientY } = e;
      onNoteHandler(e.target.id, offsetX, offsetY, clientX, clientY);
    } else if (e.target.closest(`.column`)) {
      onColumnHandler(e.target.closest(`.column`).id);
    }
  });
};

export default onEventHandler;
