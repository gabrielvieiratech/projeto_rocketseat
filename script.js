function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('img')

  //substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver o light mode ele adiciona a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta, sem barba e fundo roxo"
    )
  }else {
    // se estiver sem o dark mode, ele mantem a imagem normal
   img.setAttribute('src', './assets/avatar.png')
   img.setAttribute(
     "alt",
     "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
   )
  }


  

}

