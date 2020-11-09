import MainPage from 'pages/main';
import { Note } from 'components';
import { getState, setState, setEvent } from '../store';

const init = () => {
  const todoNotes = ['안녕', '하세요', '저는', '김명성', '입니다'];
  const doingNotes = ['무엇을', '해야', '할까요', '잘 모르겠어요'];
  const doneNotes = ['끝낸게', '있을까?', '진짜', '모르겠다'];

  const $todo = document.querySelector('#todo-list .column-content');
  const $doing = document.querySelector('#doing-list .column-content');
  const $done = document.querySelector('#done-list .column-content');

  todoNotes.forEach((note) => ($todo.innerHTML += Note([note])));
  doingNotes.forEach((note) => ($doing.innerHTML += Note([note])));
  doneNotes.forEach((note) => ($done.innerHTML += Note([note])));
};

// 칼럼 이벤트 핸들러
// 노트 이벤트 핸들러

const onEventHandler = () => {
  window.addEventListener('load', () => {
    init();
  });
  document.getElementById('root').addEventListener('click', async (e) => {
    if (e.target.closest(`.nav-btn`)) {
      e.preventDefault();
    } else if (e.target.closest('.month-nav-btn')) {
      e.preventDefault();
    } else if (e.target.closest('.type-btn')) {
      e.preventDefault();
    } else if (e.target.closest('.submit-btn')) {
      e.preventDefault();
    }
  });
};

export default onEventHandler;
