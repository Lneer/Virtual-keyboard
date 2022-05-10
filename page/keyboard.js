const BODY = document.querySelector('body');
BODY.innerHTML += '<p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p>';
BODY.innerHTML += '<textarea name="textarea"  id = "textarea" class="textarea" cols="30" rows="10" autofocus ="true"></textarea>';

const en = {
  name: 'eng',
  chars: {
    lowerCase: {
      1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
      3: ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      4: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift'],
      5: ['Ctrl', 'Meta', 'Alt', 'Space', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'],
    },
    upperCase: {
      1: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
      3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
      4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650', 'Shift'],
      5: ['Ctrl', 'Meta', 'Alt', 'Space', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'],
    },
    capsCase: {
      1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
      3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
      4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650', 'Shift'],
      5: ['Ctrl', 'Meta', 'Alt', 'Space', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'],
    },
  },

};
const eventKey = {
  1: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  2: ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  3: ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  4: ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  5: ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
};

const ru = {
  name: 'ru',
  chars: {
    lowerCase: {
      1: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
      3: ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
      4: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'],
      5: ['Ctrl', 'OS', 'Alt', 'Space', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'],
    },
    upperCase: {
      1: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
      2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
      3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650', 'Shift'],
      5: ['Ctrl', 'OS', 'Alt', 'Space', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'],
    },
    capsCase: {
      1: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
      3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
      4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650', 'Shift'],
      5: ['Ctrl', 'OS', 'Alt', 'Space', 'Alt', '&#9668', '&#9660', '&#9658', 'Ctrl'],
    },
  },

};

class Keyboard {
  constructor(languagesArr) {
    this.language = languagesArr;

    const containerCreate = () => {
      if (!document.querySelector('.keyboard-container')) {
        const container = document.createElement('div');
        container.classList.add('keyboard-container');
        BODY.append(container);
      }
    };
    (containerCreate());

    const createEmptyButton = (event) => {
      document.querySelector('.keyboard-container').innerHTML = '';
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
  }

  keyPush = (config) => {
    const rows = document.querySelectorAll('.keyboard-keys-row');
    const largeButton = ['Tab', 'Backspace', 'CapsLock', 'Shift', 'Enter', 'Space'];

    const additionLanguage = this.language.find((e) => e.name === config.currentLanguage);
    // console.log(additionLanguage);
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
        row[i].innerHTML = '';
        row[i].innerHTML += `<div class = "${additionLanguage.name} ${languageHidden}"><span class = "lowerCase ${lowerHidden}">${lowerCaseRow[i]}</span><span class = "upperCase ${upperHidden}">${upperCaseRow[i]}</span><span class = "capsCase ${capsHidden}">${capsCaseRow[i]}</span></div>`;
      }
    });

    return this;
  };
}

const setting = {
  currentLanguage: null,
  isLower: true,
  isCaps: false,
};

if (!sessionStorage.getItem('keyLan')) {
  setting.currentLanguage = 'eng';
} else {
  setting.currentLanguage = sessionStorage.getItem('keyLan');
}

sessionStorage.setItem('keyLan', `${setting.currentLanguage}`);

const nonPrintableButton = ['Tab', 'Backspace', 'CapsLock', 'Shift', 'Enter', 'Space', 'Alt', 'Delete', 'Control', 'OS', 'Ctrl', 'Del'];
const currentKeyboard = new Keyboard([en, ru]);
currentKeyboard.keyPush(setting);
const KEYS = document.querySelectorAll('.keyboard-key');
const KEYARR = [...document.querySelectorAll('.keyboard-key')];
const LOWER = [...document.querySelectorAll('.lowerCase')];
const UPPER = [...document.querySelectorAll('.upperCase')];
const CAPS = [...document.querySelectorAll('.capsCase')];
const TEXT = document.querySelector('.textarea');
const KEYBOARD = document.querySelector('.keyboard-keys');
let altKey = false;
let ctrlKey = false;

const keyPress = (event) => {
  // console.log(event.altKey);
  // console.log(event.ctrlKey);
  // console.log(event.key);
  TEXT.focus();
  event.preventDefault();

  if (event.code === 'Delete') {
    TEXT.focus();
    let caretposition = TEXT.value.length;
    if (TEXT.selectionStart !== TEXT.value.length) {
      caretposition = TEXT.selectionStart;
    }
    TEXT.textContent = TEXT.textContent.slice(0, caretposition)
    + TEXT.textContent.slice(caretposition + 1);
    TEXT.selectionStart = caretposition;
  }

  if (event.code === 'Backspace') {
    TEXT.focus();
    let caretposition = 0;
    if (!TEXT.selectionStart) {
      caretposition = TEXT.value.length;
    } else {
      caretposition = TEXT.selectionStart;
    }
    TEXT.textContent = TEXT.textContent.slice(0, caretposition - 1)
    + TEXT.textContent.slice(caretposition);
    TEXT.selectionStart = caretposition - 1;
  }

  if (event.altKey && event.ctrlKey) {
    if (setting.currentLanguage === 'eng') {
      setting.currentLanguage = 'ru';
    } else {
      setting.currentLanguage = 'eng';
    }

    sessionStorage.setItem('keyLan', `${setting.currentLanguage}`);
    currentKeyboard.keyPush(setting);
  }
  if (event.code === 'Tab') {
    TEXT.textContent += '\t';
  }
  if (event.code === 'Space') {
    TEXT.textContent += ' ';
  }
  if (event.code === 'Enter') {
    TEXT.textContent += '\n';
  }

  if (event.key === 'CapsLock') {
    if (setting.isCaps) {
      setting.isCaps = false;
    } else {
      setting.isCaps = true;
    }
    currentKeyboard.keyPush(setting);
  }
  if (event.key === 'Shift') {
    event.preventDefault();
    setting.isLower = false;
    currentKeyboard.keyPush(setting);
  }
  for (let i = 0; i < KEYS.length; i += 1) {
    if (event.code === KEYS[i].getAttribute('keyname')) {
      // console.log(event);
      KEYS[i].classList.add('activable');
      if (!nonPrintableButton.includes(event.key) && event.code !== 'Space') {
        TEXT.textContent += KEYS[i].innerText;
      }
    }
  }
};

window.addEventListener('keydown', keyPress);

window.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    event.preventDefault();
    setting.isLower = true;
    currentKeyboard.keyPush(setting);
  }

  for (let i = 0; i < KEYS.length; i += 1) {
    if (event.code === KEYS[i].getAttribute('keyname')) {
      KEYS[i].classList.remove('activable');
    }
  }

  window.addEventListener('keydown', keyPress);
});

const mousePress = (event) => {
  // console.log(event.target);
  if (!(KEYARR.includes(event.target)
  || LOWER.includes(event.target)
  || UPPER.includes(event.target)
  || CAPS.includes(event.target))) {
    return;
  }

  if (event.target.innerText === 'Tab') {
    TEXT.textContent += '\t';
  }
  if (event.target.innerText === 'Space') {
    TEXT.textContent += ' ';
  }
  if (event.target.innerText === 'Enter') {
    TEXT.textContent += '\n';
  }

  if (event.target.innerText === 'CapsLock') {
    if (setting.isCaps) {
      setting.isCaps = false;
    } else {
      setting.isCaps = true;
    }
    currentKeyboard.keyPush(setting);
  }
  if (event.target.innerText === 'Ctrl') {
    ctrlKey = true;
    if (ctrlKey && altKey) {
      if (setting.currentLanguage === 'eng') {
        setting.currentLanguage = 'ru';
      } else {
        setting.currentLanguage = 'eng';
      }
      window.sessionStorage.setItem('keyLan', setting.currentLanguage);
      currentKeyboard.keyPush(setting);
    }
    ctrlKey = false;
  }
  if (event.target.innerText === 'Alt') {
    altKey = true;
    if (ctrlKey && altKey) {
      if (setting.currentLanguage === 'eng') {
        setting.currentLanguage = 'ru';
      } else {
        setting.currentLanguage = 'eng';
      }
      window.sessionStorage.setItem('keyLan', setting.currentLanguage);
      currentKeyboard.keyPush(setting);
    }
    altKey = false;
  }

  if (event.target.innerText === 'Del') {
    TEXT.focus();
    let caretposition = TEXT.value.length;
    if (TEXT.selectionStart !== TEXT.value.length) {
      caretposition = TEXT.selectionStart;
    }
    TEXT.textContent = TEXT.textContent.slice(0, caretposition)
    + TEXT.textContent.slice(caretposition + 1);
    TEXT.selectionStart = caretposition;
  }

  if (event.target.innerText === 'Backspace') {
    TEXT.focus();
    let caretposition = 0;
    if (!TEXT.selectionStart) {
      caretposition = TEXT.value.length;
    } else {
      caretposition = TEXT.selectionStart;
    }
    TEXT.textContent = TEXT.textContent.slice(0, caretposition - 1)
    + TEXT.textContent.slice(caretposition);
    TEXT.selectionStart = caretposition - 1;
  }

  if (!nonPrintableButton.includes(event.target.innerText)) {
    TEXT.textContent += event.target.innerText;
  }
};

KEYBOARD.addEventListener('click', mousePress);
KEYBOARD.addEventListener('mousedown', (event) => {
  if (event.target.innerText === 'Shift') {
    setting.isLower = false;
    currentKeyboard.keyPush(setting);
    event.target.classList.add('activable');
  }

  if (event.target.innerText === 'Alt') {
    altKey = true;
    event.target.classList.add('activable');
  }
  if (event.target.innerText === 'Ctrl') {
    ctrlKey = true;
    event.target.classList.add('activable');
  }
});

KEYBOARD.addEventListener('mouseup', (event) => {
  if (event.target.innerText === 'Shift') {
    setting.isLower = true;
    currentKeyboard.keyPush(setting);
    event.target.classList.remove('activable');
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].classList.remove('activable');
    }
  }
  if (event.target.innerText === 'Alt') {
    altKey = false;
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].classList.remove('activable');
    }
  }
  if (event.target.innerText === 'Ctrl') {
    ctrlKey = false;
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].classList.remove('activable');
    }
  }
});
