import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat-container');

let loadInterval;

const loader = (el) => {
  el.textContent = '';

  loadInterval = setInterval(() => {
    el.textContent += '.';

    if (el.textContent.length > 3) {
      el.textContent = '';
    }
  }, 300);
};

const typeText = (el, text) => {
  let i = 0;

  let typeInterval = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 20);
};

const uniqueId = () => {
  const timestamp = Date().now();
  const random = Math.random();
  const hexString = random.toString(16);
  return `id - ${timestamp}-${hexString}`;
}

const chatStripe = (isAi, val, uuid) => {
  return(
    `
      <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
          <div class="profile">
            <img src="${isAi ? bot : user}" alt="${isAi ? 'bot' : 'user'}" />
          </div>
          <div class="message" id="${uuid}">${val}</div>
        </div>
      </div>
    `)
};