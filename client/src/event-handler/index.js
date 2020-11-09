import MainPage from 'pages/main';
import { getState, setState, setEvent } from '../store';

// 칼럼 이벤트 핸들러
// 노트 이벤트 핸들러

const onEventHandler = () => {
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
