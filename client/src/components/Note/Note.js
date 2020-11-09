import { Div } from 'tags';

export const Note = (children = [], props = {}) => {
  return Div(children, {
    ...props,
    class: `note ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  border: .5rem solid gray;
  height: 5rem;
  margin: 1rem 0;
`;
