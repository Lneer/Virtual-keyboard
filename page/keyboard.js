const BODY = document.querySelector('body');

const en = {
  name: 'eng',
  chars: {
    lowerCase: {
      1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
      3: ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      4: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr', 'Shift'],
      5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'],
    },
    upperCase: {
      1: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
      3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
      4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr', 'Shift'],
      5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'],
    },
    capsCase: {
      1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete'],
      3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
      4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr', 'Shift'],
      5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'],
    },
  },

};
const eventKey = {
  1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  2: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  3: ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  4: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift'],
  5: ['Control', 'Win', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'],
};

const ru = {
  name: 'ru',
  chars: {
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
    capsCase: {
      1: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
      3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uarr', 'Shift'],
      5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'RCtrl'],
    },
  },

};

const setting = {
  currentLanguage: 'eng',
  isLower: true,
  isCaps: false,
};

class Keyboard {
  constructor(languagesArr) {
    this.language = languagesArr;

    const containerCreate = () => {
      const container = document.createElement('div');
      container.classList.add('keyboard-container');
      const textarea = '<textarea class = "textarea" autofocus = "true" row ="5" wrap = "soft"></textarea>';
      container.innerHTML = textarea;
      BODY.append(container);
    };
    (containerCreate());

    const createEmptyButton = (event) => {
      const keyboardKeys = document.createElement('div');
      keyboardKeys.classList.add('keyboard-keys');
      const sample = this.language[0].chars.lowerCase;
      const sampleKeys = Object.keys(sample);
      sampleKeys.forEach((key) => {
        const keyboardKeysRow = document.createElement('div');
        keyboardKeysRow.classList.add('keyboard-keys-row');
        for (let i = 0; i < sample[key].length; i += 1) {
          keyboardKeysRow.innerHTML += '<button type = "button" class = "keyboard-key"></button>';
        }
        keyboardKeys.append(keyboardKeysRow);
      });
      if (document.querySelector('.keyboard-keys')) {
        document.querySelector('.keyboard-container').lastChild.remove();
      }
      document.querySelector('.keyboard-container').append(keyboardKeys);
      const keys = document.querySelectorAll('.keyboard-key');
      const eventKeys = Object.values(event);
      let arrs = [];
      eventKeys.forEach((eventArr) => {
        arrs = arrs.concat([...eventArr]);
      });
      for (let i = 0; i < keys.length; i += 1) {
        keys[i].setAttribute('keyname', arrs[i]);
      }
    };
    (createEmptyButton(eventKey));

    const keyPush = (config) => {
      const rows = document.querySelectorAll('.keyboard-keys-row');
      const largeButton = ['Tab', 'Backspace', 'CapsLock', 'Shift', 'Enter', 'Space'];
      this.language.forEach((additionLanguage) => {
        let languageHidden = '';
        let lowerHidden = '';
        let upperHidden = '';
        let capsHidden = '';

        const { lowerCase } = additionLanguage.chars;
        const { upperCase } = additionLanguage.chars;
        const { capsCase } = additionLanguage.chars;
        const keysArr = Object.keys(lowerCase);
        if (additionLanguage.name !== config.currentLanguage) {
          languageHidden = 'hidden';
        }

        if (config.isCaps) {
          lowerHidden = 'hidden';
          upperHidden = 'hidden';
        } else if (config.isLower) {
          upperHidden = 'hidden';
          capsHidden = 'hidden';
        } else {
          lowerHidden = 'hidden';
          capsHidden = 'hidden';
        }

        keysArr.forEach((key) => {
          const row = rows[key - 1].children;
          const lowerCaseRow = lowerCase[key];
          const upperCaseRow = upperCase[key];
          const capsCaseRow = capsCase[key];
          for (let i = 0; i < lowerCaseRow.length; i += 1) {
            if (largeButton.includes(lowerCaseRow[i])) {
              row[i].classList.add('keyboard-key--large');
            }
            if (lowerCaseRow[i] === 'Rctrl') {
              row[i].classList.add('keyboard-key--RCtrl');
            }
            row[i].innerHTML += `<div class = "${additionLanguage.name} ${languageHidden}"><span class = "lowerCase ${lowerHidden}">${lowerCaseRow[i]} </span><span class = "upperCase ${upperHidden} " >${upperCaseRow[i]} </span><span class = "CapsCase ${capsHidden}" >${capsCaseRow[i]} </span></div>`;
          }
        });
      });
    };
    (keyPush(setting));
  }
}

const currentKeyboard = new Keyboard([en, ru]);
const KEYBOARDKEYS = document.querySelectorAll('.keyboard-key');
const KEYS = document.querySelectorAll('.keyboard-key');

window.addEventListener('keydown', (event) => {
  for (let i = 0; i < KEYS.length; i += 1) {
    if (event.key === KEYS[i].getAttribute('keyname')) {
      KEYS[i].classList.add('activable');
    }
    if (event.key === 'Shift') {
      KEYS.forEach((key) => {
        key.querySelector(setting.currentLanguage).children[0].classList.toggle('hidden');
        key.querySelector(setting.currentLanguage).children[1].classList.toggle('hidden');
      });
    }

    if (event.key === 'CapsLock') {
      KEYS.forEach((key) => {
        key.querySelector('.eng').children[0].classList.add('hidden');
        key.querySelector('.eng').children[2].classList.toggle('hidden');
      });
    }
  }
});

// window.addEventListener('keyup', (event) => {
//   for (let i = 0; i < KEYS.length; i += 1) {
//     if (event.key === KEYS[i].getAttribute('keyname')) {
//       KEYS[i].classList.remove('activable');
//     }
//   //   if (event.key === 'Shift') {
//   //     KEYS.forEach((key) => {
//   //       key.querySelector(`.${setting.currentLanguage}`).children[0].classList.remove('hidden');
//   //       key.querySelector(`.${setting.currentLanguage}`).children[1].classList.add('hidden');
//   //     });
//   //   }
//   // }
// });
