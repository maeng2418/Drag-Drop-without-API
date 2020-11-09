import { Div } from 'tags';

export const Note = (children = [], props = {}) => {
  return Div([], {
    ...props,
    class: `note ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
`;
