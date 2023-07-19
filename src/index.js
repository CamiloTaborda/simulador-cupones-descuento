const inputPrice = document.querySelector("#price")
const inputCupon = document.querySelector("#cupon")
const btn = document.querySelector("#calcular")
const result = document.querySelector("#result")

btn.addEventListener("click", calcularPrecioConDescuento);

const cuponObj = {
  '50%off': 50,
  '25%off' : 25,
  '10%off': 10
}

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const cupon = inputCupon.value;

    if(!price || !cupon) {
       result.innerText = "Llena el formulario";
       return;
    }

    let discount;

    if (cuponObj[cupon]) {
       discount = cuponObj[cupon]
    } else {
      result.innerText = "Cupon No Valido!!!"
      return;
    }

    // if (cupon === "50%_Off") {
    //   discount = 50;
    // } else if (cupon === "25%_Off") {
    //   discount = 25;
    // } else {
    //     result.innerText = "Cupon No Valido!!!"
    //     return;
    // }

    const newPrice = (price * (100 -discount)) / 100;

    result.innerText = `Tu Nuevo Precio Es $ ${newPrice}`
}