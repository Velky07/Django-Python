// Recupera o tema armazenado na memória do navegador (se houver)
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.body.classList.add(storedTheme);
} else {
  document.body.classList.add("light-theme"); // Define o tema claro como padrão
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  // Verifica se o tema atual é o claro
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeToggle.innerText = "Tema Escuro";
    // Armazena o tema escuro na memória do navegador
    localStorage.setItem("theme", "dark-theme");
  }
  // Caso contrário, o tema atual é o escuro
  else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeToggle.innerText = "Tema Claro";
    // Armazena o tema claro na memória do navegador
    localStorage.setItem("theme", "light-theme");
  }
}

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);