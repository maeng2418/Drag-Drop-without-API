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

// 드래그 노트 생성
const createDragNote = (id, offsetX, offsetY, clientX, clientY) => {
  const $note = document.getElementById(id);
  const { width, height } = $note.getBoundingClientRect();
  const $dragElement = $note.cloneNode(true);
  $dragElement.setAttribute('id', id);
  $dragElement.setAttribute('offsetX', offsetX);
  $dragElement.setAttribute('offsetY', offsetY);
  $dragElement.classList.replace('note', 'drag-note');
  $dragElement.setAttribute(
    'style',
    `border: .5rem solid lightgray;
     position: absolute;
     width: ${width}px;
     height: ${height}px;
     left: ${clientX - offsetX}px;
     top: ${clientY - offsetY}px;
     box-sizing: border-box;
     pointer-events: none;
    `
  );
  document.getElementById('root').append($dragElement);
};

const onMouseMoveHandler = (e) => {
  const $dragElement = document.querySelector('.drag-note');
  if ($dragElement) {
    $dragElement.style.left = `${e.clientX - $dragElement.getAttribute('offsetX')}px`;
    $dragElement.style.top = `${e.clientY - $dragElement.getAttribute('offsetY')}px`;
  }
};

const onMouseDownHanlder = (e) => {
  e.preventDefault();
  if (e.target.closest(`.note`)) {
    // offset : 노트자체에서 이벤트가 발생한 위치
    // client : 클라이언트 영역에서 이벤트가 발생한 위치
    const { offsetX, offsetY, clientX, clientY } = e;
    e.target.classList.add('selected');
    createDragNote(e.target.id, offsetX, offsetY, clientX, clientY);
  }
};

const onMouseUpHanlder = (e) => {
  e.preventDefault();
  const $dragElement = document.querySelector('.drag-note');
  if ($dragElement && e.target.closest('.note')) {
    const $newNote = document.createElement('div');
    $newNote.classList.add('note');
    $newNote.id = $dragElement.id;
    $newNote.setAttribute(
      'style',
      `border: .5rem solid gray;
       height: 8vh;
       margin: 1rem 0;
      `
    );
    $newNote.innerText = $dragElement.innerText;
    e.target.parentNode.insertBefore($newNote, e.target);
    $dragElement.remove();
    document.querySelector('.selected').remove();
  } else if ($dragElement && e.target.closest('.column')) {
    const $newNote = document.createElement('div');
    $newNote.classList.add('note');
    $newNote.id = $dragElement.id;
    $newNote.setAttribute(
      'style',
      `border: .5rem solid gray;
       height: 8vh;
       margin: 1rem 0;
      `
    );
    $newNote.innerText = $dragElement.innerText;
    e.target.append($newNote);
    $dragElement.remove();
    document.querySelector('.selected').remove();
  }
};

const onEventHandler = () => {
  window.addEventListener('load', () => {
    init();
  });

  document.getElementById('root').addEventListener('mousedown', onMouseDownHanlder);
  document.getElementById('root').addEventListener('mouseup', onMouseUpHanlder);
  document.getElementById('root').addEventListener('mousemove', onMouseMoveHandler);
};

export default onEventHandler;
