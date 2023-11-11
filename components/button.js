export function Button(label) {
  var element = document.createElement("div");
  element.innerHTML = `<button class="py-4 px-6 bg-sky-500 rounded-full text-white">${label}</button>`;
  return element;
}

