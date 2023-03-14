// Recupera o tema armazenado na memória do navegador (se houver)
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.body.classList.add(storedTheme);
  
  // Define o estado do botão com base no valor do tema armazenado
  const storedButtonState = localStorage.getItem("buttonState");
  const themeToggle = document.getElementById("btn-switch");
  if (themeToggle) {
    themeToggle.querySelector(".checkbox").checked = storedButtonState === "dark-on";
  }
} else {
  document.body.classList.add("light-theme"); // Define o tema claro como padrão
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("btn-switch");
  const isChecked = themeToggle.querySelector(".checkbox").checked;

  // Verifica se o tema atual é o claro
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    // Armazena o tema escuro na memória do navegador
    localStorage.setItem("theme", "dark-theme");
  }
  // Caso contrário, o tema atual é o escuro
  else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    // Armazena o tema claro na memória do navegador
    localStorage.setItem("theme", "light-theme");
  }
  
  // Armazena o estado do botão na memória do navegador
  if (isChecked) {
    localStorage.setItem("buttonState", "dark-on");
  } else {
    localStorage.setItem("buttonState", "dark-off");
  }
}

const themeToggle = document.getElementById("btn-switch");
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

const button = document.querySelector('button');
const buttonContainer = document.querySelector('.button-container');

button.addEventListener('click', () => {
  button.classList.add('slide');
  
  // Remove a classe 'slide' após a animação terminar
  setTimeout(() => {
    button.classList.remove('slide');
  }, 300);
});
