var crl = circlr('circlr', {
    scroll : true,
    loader : 'loader'
  });

  function answer(num) {
    if(num == 1) {
      document.querySelector("#num1").classList.toggle("hidden")
      document.querySelector("#num11").classList.toggle("rotate")
    }
    if(num == 2) {
      document.querySelector("#num2").classList.toggle("hidden")
      document.querySelector("#num12").classList.toggle("rotate")

    }
    if(num == 3) {
      document.querySelector("#num3").classList.toggle("hidden")
      document.querySelector("#num13").classList.toggle("rotate")

    }
  }