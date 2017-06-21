//Take input and attach it to output
//read input
//if input meets certain requirements do something with it.
//put output on screen in output area.

function personChat(string){
  let markup = `
  <div class="myChat">
  <img src="images/images.png">
  <p>${string}</p>
  </div>
  `;
  return markup;
}

function readString(string){
  
}



var chatInput = document.getElementById('chat-input');
var chatOutput = document.getElementById('chat-output');

chatInput.addEventListener('keypress', function(e){
  let x = e.which || e.keyCode;
  if(x === 13 && chatInput.value !="")
  {
      let stringChat = personChat(chatInput.value);
      console.log(chatInput.value);
      chatOutput.innerHTML += stringChat;
      stringChat = '';
  }
  return e;
});
