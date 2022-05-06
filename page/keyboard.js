const BODY = document.querySelector('body');

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

// eslint-disable-next-line no-unused-vars
const ru = {

  lowerCase: {
    1: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    2: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    3: ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    4: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr', 'Shift'],
    5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'RCtrl'],
  },
  upperCase: {
    1: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
    3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr', 'Shift'],
    5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'RCtrl'],
  },

};

class Keyboard {
  constructor(lan) {
    this.language = lan;

    const containerCreate = () => {
      const container = document.createElement('div');
      container.classList.add('keyboard-container');
      const textarea = document.createElement('textarea');
      textarea.classList.add('textarea');
      textarea.setAttribute('autofocus', 'true');
      textarea.setAttribute('rows', '5');
      textarea.setAttribute('wrap', 'soft');

      container.append(textarea);
      BODY.append(container);
    };
    (containerCreate());
  }

  createKeyboard(islowerCase = true) {
    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard-keys');

    const largeButton = ['Tab', 'Backspace', 'CapsLock', 'Shift', 'Enter', 'Space'];
    let keyRegistr = 'undefined';

    if (islowerCase) {
      keyRegistr = this.language.lowerCase;
    } else { keyRegistr = this.language.upperCase; }

    const keyRegistrKeys = Object.keys(keyRegistr);

    keyRegistrKeys.forEach((key) => {
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
    });

    return keyboardKeys;
  }

  deleteKeyboard() {
    const keyboardKeys = document.querySelector('.keyboard-keys');
    keyboardKeys.parentElement.remove(keyboardKeys);
    return this;
  }
}
// const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
//   'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
//   'RShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr', 'LShift',
//   'RCtrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&lt', 'Down', '&gt'];

const currentKeyboard = new Keyboard(en);
const keyboardcontainer = document.querySelector('.keyboard-container');
let islowerCase = true;
keyboardcontainer.append(currentKeyboard.createKeyboard(islowerCase));

const Shiftable = () => {
  if (islowerCase) { islowerCase = false; } else islowerCase = true;
  currentKeyboard.deleteKeyboard();
  keyboardcontainer.append(currentKeyboard.createKeyboard(islowerCase));
};

document.querySelector('body').addEventListener('click', Shiftable);
