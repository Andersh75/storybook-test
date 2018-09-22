import { storiesOf, addDecorator } from '@storybook/polymer';
import '@vaadin/vaadin-button';
// import { action } from '@storybook/addon-actions';
import { document } from 'global';
import { html, render } from 'lit-html';

import {
  withKnobs,
  text,
  button,
  number,
  select,
  date,
  color,
  array,
  boolean,
} from '@storybook/addon-knobs/polymer';

storiesOf('Addon|Knobs', module)
  .addDecorator(withKnobs)
  .add('simple', () => {
    const title = text('Button title', 'Hello');
    const el = document.createElement('vaadin-button');
    el.innerHTML = title;
    // el.setAttribute('focus-ring', 'focus-ring');
    // button('callback', () => el.setAttribute('title', 'testing'));
    return el;
  })
.add('html string', () => '<div>Rendered with string</div>')
  .add('lit', () => {
    const title = text('Button title', 'Hello');
    const root = document.createElement('div');
    render(html`<vaadin-button>${text('Lit title', 'Hello')}</vaadin-button>`, root);
    return root
  })