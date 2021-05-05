import * as wasm from '../pkg';
import { Remarkable } from 'remarkable';

// JS Markdown
const md = new Remarkable({ html: true });
const remarkableDiv = document.querySelector('.js-markdown');
const remarkableRender = (text) => {
  const html = md.render(text);
  remarkableDiv.innerHTML = html;
};

// Wasm Markdown
const wasmDiv = document.querySelector('.wasm-markdown');
const wasmRender = (text) => {
  const html = wasm.render(text);
  wasmDiv.innerHTML = html;
};

// User input
const textarea = document.getElementById('input-text');
textarea.addEventListener('keyup', (e) => {
  const text = e.target.value;
  console.time('remarkable');
  remarkableRender(text);
  console.timeEnd('remarkable');
  console.time('wasm');
  wasmRender(text);
  console.timeEnd('wasm');
});
