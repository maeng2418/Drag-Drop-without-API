import { Div } from 'tags';
import { Title } from './Title';

export const Column = (children = [], props = {}) => {
  return Div([Title([...children])], {
    ...props,
    class: `column ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  width: 25%;
  height: 80vh;
  border: .5rem solid lightgray;
`;
