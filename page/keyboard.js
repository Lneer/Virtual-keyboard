const BODY = document.querySelector('body');
class Keyboard {
  constructor(lan) {
    this.language = lan;
  }

  createKeyboard() {
    const container = document.createElement('div');
    container.classList.add('keyboard-container');

    const keyboardKeys = document.createElement('div');
    keyboardKeys.classList.add('keyboard-keys');
    container.append(keyboardKeys);

    const largeButton = ['Tab', 'Backspace', 'CapsLock', 'RShift', 'Enter'];

    const keyGeneration = (elem) => {
      const elemButton = document.createElement('button');
      elemButton.setAttribute('type', 'button');
      elemButton.innerHTML = elem;
      elemButton.classList.add('keyboard-key');

      if (largeButton.includes(elem)) {
        elemButton.classList.add('keyboard-key--large');
      }

      if (elem === 'Space') {
        elemButton.classList.add('keyboard-key--extralarge');
      }
      return elemButton;
    };

    this.language.forEach((elem) => {
      keyboardKeys.append(keyGeneration(elem));
    });

    return container;
  }
}
const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'RShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr', 'LShift',
  'RCtrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&lt', 'Down', '&gt'];
const currentKeyboard = new Keyboard(en);

BODY.append(currentKeyboard.createKeyboard());
// const BODY = document.querySelector('body');
// const container = document.createElement('div');
// BODY.append(container);
// container.classList.add('keyboard-container');
// const keyboardKeys = document.createElement('div');
// keyboardKeys.classList.add('keyboard-keys');
// container.append(keyboardKeys);
// const enChars = ['a', 'b', 'c'];

// enChars.forEach((elem) => {
//   const elemButton = document.createElement('button');
//   elemButton.setAttribute('type', 'button');
//   elemButton.innerHTML = elem;
//   elemButton.classList.add('keyboard-key');
//   keyboardKeys.append(elemButton);
// });
