import data from './data.js';

const notificationsWrapper = document.querySelector('.notifications-wrapper');

notificationsWrapper.innerHTML = `
 ${data
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
const notificationsCounter = document.querySelector('.notifications-counter');
const markAllAsRead = document.querySelector('.header-btn');

notifications.forEach((notification, index) => {
  notification.addEventListener('mouseover', () => {
    notification.classList.remove('unchecked');
  });
});

markAllAsRead.addEventListener('click', () => {
  notifications.forEach((notification) => {
    notification.classList.remove('unchecked');
  });
});
