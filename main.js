import { Button } from './components/Button.js'


function appendComponent() {
  const container = document.getElementById("app");
  const newComponent = Button('로그인');

  container.appendChild(newComponent);
}

window.onload = function() {
  appendComponent();
};
