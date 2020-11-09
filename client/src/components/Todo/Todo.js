import { Div } from 'tags';
import { Column } from 'components';

export const Todo = (children = [], props = {}) => {
  return Div([Column('해야할 일'), Column('진행중'), Column('완료')], {
    ...props,
    class: `todo ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;
