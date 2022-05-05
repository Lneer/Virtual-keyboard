const BODY = document.querySelector('body');

class Keyboard {
  constructor(lan) {
    this.language = lan;
  }

  createKeyboard(islowerCase = true) {
    const container = document.createElement('div');
    container.classList.add('keyboard-container');

    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard-keys');
    container.append(keyboardKeys);

    const largeButton = ['Tab', 'Backspace', 'CapsLock', 'Shift', 'Enter', 'Space'];
    let keyRegistr = 'undefined';

    if (islowerCase) {
      keyRegistr = this.language.lowerCase;
    } else { keyRegistr = this.language.upperCase; }

    for (const key in keyRegistr) {
      // console.log(this.language[key])

      const keyboardKeysRow = document.createElement('div');
      keyboardKeysRow.classList.add('keyboard-keys-row');

      for (let i = 0; i < keyRegistr[key].length; i += 1) {
        const keyBoardChar = keyRegistr[key];
        const elemButton = document.createElement('button');
        elemButton.setAttribute('type', 'button');
        elemButton.innerHTML = keyBoardChar[i];
        elemButton.classList.add('keyboard-key');
        if (largeButton.includes(keyBoardChar[i])) {
          elemButton.classList.add('keyboard-key--large');
        }

        if (keyBoardChar[i] === 'RCtrl') {
          elemButton.classList.add('keyboard-key--RCtrl');
        }

        keyboardKeysRow.append(elemButton);
      }
      keyboardKeys.append(keyboardKeysRow);
    }

    container.append(keyboardKeys);


    return container;
  }
}
// const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
//   'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
//   'RShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr', 'LShift',
//   'RCtrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&lt', 'Down', '&gt'];

const en = {

  lowerCase: {
    1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    2: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    3: ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    4: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr', 'Shift'],
    5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'RCtrl'],
  },
  upperCase: {
    1: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
    3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr', 'Shift'],
    5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'RCtrl'],
  },

};

const currentKeyboard = new Keyboard(en);

let islowerCase = true;
BODY.append(currentKeyboard.createKeyboard(islowerCase));

const Shiftable = () => {
  if (islowerCase) { islowerCase = false; } else islowerCase = true;
  console.log(islowerCase);
  BODY.append(currentKeyboard.createKeyboard(islowerCase));
};

document.querySelector('body').addEventListener('click', Shiftable);
