let button = document.querySelector('button');
let inputName = document.querySelector("#name");
let inputMessage = document.querySelector("#message");
let inputColor = document.querySelector("#color");

let div = document.createElement('div');
let spanName = document.createElement('span');
let spanMessage = document.createElement('span');

button.addEventListener('click', function(){
    fetch("https://live-chat-e33d1-default-rtdb.firebaseio.com/chat.json" , {
        method: "POST",
        body: JSON.stringify({
            name: inputName.value,
            message: inputMessage.value,
            color: inputColor.value,
        }),
    })
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



