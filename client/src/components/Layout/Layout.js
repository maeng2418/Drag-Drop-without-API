import { Div } from 'tags';

export const Layout = (children = [], props = {}) => {
  return Div([Div(children, { class: 'content' })], {
    ...props,
    class: `app ${props.class && props.class}`,
    style: `${Style} ${props.style && props.style}`,
  });
};

const Style = `
`;
