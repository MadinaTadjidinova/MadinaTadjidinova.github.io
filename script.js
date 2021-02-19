let button = document.querySelector('button');
let inputName = document.querySelector("#name");
let inputMessage = document.querySelector("#message");
let inputColor = document.querySelector("#color");

let div = document.createElement('div');
let spanName = document.createElement('span');
let spanMessage = document.createElement('span');

button.addEventListener('click', function(){
    console.log(inputName.value, inputMessage.value, inputColor.value);
    let div = document.createElement('div');
    let spanName = document.createElement('span');
    let spanMessage = document.createElement('span');
    document.body.append(div);
    div.append(spanName);
    div.append(spanMessage);
    spanName.innerText = inputName.value + ": "
    spanMessage.innerText = inputMessage.value
    spanName.style.color = inputColor.value
    spanName.style.fontWeight = "bold"
})

