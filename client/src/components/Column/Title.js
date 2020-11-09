import { Div } from 'tags';

export const Title = (children = [], props = {}) => {
  return Div([...children], {
    ...props,
    class: `column-title ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
  border-bottom: .5rem solid lightgray;
`;
