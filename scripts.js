function showInfo() {
  // containers
  const sideContentCrypted = document.querySelector("#sideContentCrypted");
  const sideContentEmpty = document.querySelector("#sideContentEmpty");
  // text
  const sideContentText = document.querySelector("#sideContentText");
  if (sideContentText.innerHTML == "") {
    sideContentCrypted.classList.toggle("hidden");
    sideContentEmpty.classList.toggle("hidden");
  }
}

function encryptInfo() {
  showInfo();
  // dom selection
  const labelInput = document.querySelector("#inputMessage");
  const labelInputValue = labelInput.value;
  const sideContentText = document.querySelector("#sideContentText");
  // variables and const for later
  let message1 = labelInputValue;
  const lenghtMessage1 = message1.length;
  let message1Array = [];
  let encryptedMessageArray = [];
  let encryptedMessage;
  const vocals = ["a", "e", "i", "o", "u"];
  let keys = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  // transform message str to array
  for (let i = 0; i < lenghtMessage1; i++) {
    message1Array.push(message1[i]);
  }
  // encrypts the message by vocals
  for (let i = 0; i < lenghtMessage1; i++) {
    if (vocals.includes(message1Array[i])) {
      encryptedMessageArray.push(keys[message1Array[i]]);
    } else {
      encryptedMessageArray.push(message1Array[i]);
    }
  }
  // transform the array into str
  encryptedMessage = encryptedMessageArray.join("");
  sideContentText.innerHTML = encryptedMessage;
  // alert(`encrypted message: ${encryptedMessage}`);
}

function decryptInfo() {
  showInfo();
  const labelInput2 = document.querySelector("#inputMessage");
  const labelInput2Value = labelInput2.value;
  const sideContentText = document.querySelector("#sideContentText");
  // alert(labelInput2Value);

  const keyWords = ["ai", "enter", "imes", "ober", "ufat"];
  let keys2 = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let message2 = labelInput2Value;
  for (const item of keyWords) {
    if (message2.includes(item)) {
      message2 = message2.replaceAll(item, keys2[item]);
    }
  }
  sideContentText.innerHTML = message2;
  // alert(`decrypted message: ${message2}`);
}

function copyTextToClipBoard() {
  const sideContentText = document.querySelector("#sideContentText");
  navigator.clipboard.writeText(sideContentText.innerHTML);
  alert("Copied!");
}
