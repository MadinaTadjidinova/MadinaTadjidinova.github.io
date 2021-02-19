let button = document.querySelector('button')
let inputName = document.querySelector("#name")
let inputMessage = document.querySelector("#message")
let inputColor = document.querySelector("#color")
button.addEventListener('click', function(){
    console.log(inputName.value);
    console.log(inputMessage.value);
    console.log(inputColor.value);

})

