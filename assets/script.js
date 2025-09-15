document.querySelectorAll(".quantity-input").forEach((input) => {
  input.addEventListener("change", function () {
    if (this.value < 0) this.value = 0
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle")
  const menu = document.querySelector(".header__menu")

  mobileToggle.addEventListener("click", function () {
    menu.classList.toggle("active")
  })
})
