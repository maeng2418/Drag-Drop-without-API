import { Div } from 'tags';
import { Title } from './Title';
import { Content } from './Content';

export const Column = (children = [], props = {}) => {
  return Div([Title([...children]), Content()], {
    ...props,
    class: `column ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  display: flex;
  flex-direction: column;
  width: 25%;
  min-height: 80vh;
  border: .5rem solid lightgray;
`;
