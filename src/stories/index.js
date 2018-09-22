import { storiesOf, addDecorator } from '@storybook/polymer';
import '@vaadin/vaadin-button';
// import { action } from '@storybook/addon-actions';
// import { document } from 'global';
// import { html } from 'lit-html';

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

// const label = 'Your Name';
// const defaultValue = 'Arunoda Susiripala';
// const groupId = 'GROUP-ID1';

// const value = text(label, defaultValue, groupId);

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