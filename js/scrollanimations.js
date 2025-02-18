const elementsLeft = document.querySelectorAll(".hiddenLeft")
const elementsRight = document.querySelectorAll(".hiddenRight")
const elementsUp = document.querySelectorAll(".hiddenUp")

// Crio essa constante=e comum interdectionObserver para poder observar
// o elemento, ver se ele está visivel na tela.
const myObserver = new IntersectionObserver(
  (entries) => {

    /* Para cada item que for observado se estiver na tela adiciona uma clesse
    e se estiver fora da tela vai remover uma classe */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })

  }
)

/* Aqui eu puxo o observer e falo para qual elemento ele vai observar */
elementsLeft.forEach((element) => myObserver.observe(element))
elementsRight.forEach((element) => myObserver.observe(element))
elementsUp.forEach((element) => myObserver.observe(element))

