// function mainfunction(){
//   // alert("its working mf");
//   const message1 = prompt("write here lil nigga");
//   const lenghtMessage1 = message1.length
//   let message1Array = [];
//   let encryptedMessageArray = [];
//   let encryptedMessage;
//   const vocals = ['a', 'e', 'i', 'o', 'u'];
//   const keyWords = ["ai", "enter", "imes", "ober", "ufat"]
//   let keys = {
//     'a':"ai",
//     'e':"enter",
//     'i':"imes",
//     'o':"ober",
//     'u':"ufat"
//   }
//   let keys2 = {
//     "ai": 'a',
//     "enter": 'e',
//     "imes": 'i',
//     "ober": 'o',
//     "ufat": 'u'
//   }
//   // alert(`your fucking message was: ${message1}  beautiful nigga`);
//   for (let i=0; i < lenghtMessage1; i++){
//     // alert(message1[i]);
//     message1Array.push(message1[i]);
//   }
//   // alert(message1Array);
//   // alert(`the key is: ${keys["u"]}`);

//   for (let i = 0; i < lenghtMessage1; i++){
//     if (vocals.includes(message1Array[i])){
//       encryptedMessageArray.push(keys[message1Array[i]]);
//     }
//     else {
//       encryptedMessageArray.push(message1Array[i]);
//     }
//   }
//   encryptedMessage = encryptedMessageArray.join("")
//   alert(`the codified message1 is: ${encryptedMessage}`);

//   let message2 = prompt("write your message: ");
  
//   for (const item of keyWords){
//     if (message2.includes(item)) {
//       // alert(`the keyword is: ${item}`);
//       // alert(`the item is: ${keys2[item]}`);
//       // alert(`the message is ${message2.replace(item, keys2[item])}`)
//       message2 = message2.replace(item, keys2[item]);
//     }
//   }
//   alert(`the decrypted message is: ${message2}`);
// }




function encryptInfo(){
  // dom selection
  const labelInput = document.querySelector("#inputMessage");
  const labelInputValue = labelInput.value;
  // variables and const for later
  let message1 = labelInputValue;
  const lenghtMessage1 = message1.length;
  let message1Array = [];
  let encryptedMessageArray = [];
  let encryptedMessage;
  const vocals = ['a', 'e', 'i', 'o', 'u'];
  let keys = {
    'a':"ai",
    'e':"enter",
    'i':"imes",
    'o':"ober",
    'u':"ufat"
  }
  // transform message str to array
  for (let i=0; i < lenghtMessage1; i++){
    message1Array.push(message1[i]);
  }
  // encrypts the message by vocals
  for (let i = 0; i < lenghtMessage1; i++){
    if (vocals.includes(message1Array[i])){
      encryptedMessageArray.push(keys[message1Array[i]]);
    }
    else {
      encryptedMessageArray.push(message1Array[i]);
    }
  }
  // transform the array into str
  encryptedMessage = encryptedMessageArray.join("")
  alert(`encrypted message: ${encryptedMessage}`);
}

function decryptInfo(){
  const labelInput2 = document.querySelector("#inputMessage");
  const labelInput2Value = labelInput2.value;
  // alert(labelInput2Value);

  const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
  let keys2 = {
    "ai": 'a',
    "enter": 'e',
    "imes": 'i',
    "ober": 'o',
    "ufat": 'u'
  }

  let message2 = labelInput2Value;
  for (const item of keyWords){
    if (message2.includes(item)) {
      message2 = message2.replaceAll(item, keys2[item]);
    }
  }
  alert(`decrypted message: ${message2}`);
}
