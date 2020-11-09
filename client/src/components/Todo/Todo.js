import { Div } from 'tags';
import { Column } from 'components';

export const Todo = (children = [], props = {}) => {
  return Div(
    [
      Column(['해야할 일'], { id: 'todo-list' }),
      Column(['진행중'], { id: 'doing-list' }),
      Column(['완료'], { id: 'done-list' }),
    ],
    {
      ...props,
      class: `todo ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;
