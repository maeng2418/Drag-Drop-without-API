import { Div } from 'tags';
import { Todo } from 'components';

const MainPage = () => {
  return Div([Todo()], {
    class: 'main-page',
  });
};

export default MainPage;
