import data from './data.js';

let storageItem = localStorage.getItem('notifications');
if (storageItem) {
  storageItem = JSON.parse(localStorage.getItem('notifications'));
} else {
  storageItem = data;
}

localStorage.setItem('notifications', JSON.stringify(storageItem));

const notificationsWrapper = document.querySelector('.notifications-wrapper');

notificationsWrapper.innerHTML = `
 ${storageItem
   .map((item) => {
     const {
       name,
       image,
       action,
       action_is_group,
       action_subject,
       time,
       message,
       post,
       unchecked,
     } = item;
     return `
    <div class="${unchecked ? 'notification unchecked' : 'notification'} ${
       post && 'refers-to-post'
     }">
    <div class="avatar-wrapper">
    <img src=${image} alt="person" />
    </div>
    <div class="notification-content">
    <div class="notification-info">
    <span class="person-name">${name}</span>
    <span class="action">${action}</span>
    <span class="${
      action_is_group ? 'action-subject link' : 'action-subject'
    }" >${action_subject}</span>
    ${unchecked ? `<div class="dot"></div>` : ''}
    </div>
    <p class="time">${time}</p>
    ${message && `<div class="message">${message}</div>`}
    </div>
    ${
      post ? `<div class="post-wrapper"><img src=${post} alt='post'></div>` : ''
    }
    </div>
    `;
   })
   .join('')}
`;

const notifications = document.querySelectorAll('.notification');
const unchecked = document.querySelectorAll('.unchecked');
const notificationsCounter = document.querySelector('.notifications-counter');
const markAllAsRead = document.querySelector('.header-btn');

if (unchecked.length > 0) {
  notificationsCounter.textContent = unchecked.length;
} else {
  notificationsCounter.style.display = 'none';
}

notifications.forEach((notification, index) => {
  notification.addEventListener('mouseover', () => {
    notification.classList.remove('unchecked');
    storageItem[index].unchecked = false;
    localStorage.setItem('notifications', JSON.stringify(storageItem));
    decreaseCounter();
  });
});

markAllAsRead.addEventListener('click', () => {
  notifications.forEach((notification, index) => {
    notification.classList.remove('unchecked');
    storageItem[index].unchecked = false;
    notificationsCounter.style.display = 'none';
  });
  localStorage.setItem('notifications', JSON.stringify(storageItem));
});

function decreaseCounter() {
  let numbers = storageItem.filter((item) => {
    return item.unchecked;
  });
  if (numbers.length > 0) {
    notificationsCounter.textContent = numbers.length;
  } else {
    notificationsCounter.style.display = 'none';
  }
}
