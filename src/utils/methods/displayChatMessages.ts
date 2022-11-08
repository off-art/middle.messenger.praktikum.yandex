// export function displayMessage(event, name) {
//     const wrapMessage = document.createElement('div');
//     wrapMessage.classList.add('message');
//     wrapMessage.classList.add(name);
//
//     const contentMessage = document.createElement('p');
//     contentMessage.textContent = event.content;
//
//     wrapMessage.appendChild(contentMessage);
//
//     const wrapInfoMessage = document.createElement('div');
//     wrapInfoMessage.classList.add('info-msg');
//
//     const time = document.createElement('span');
//     time.textContent = new Date(event.time).toLocaleTimeString();
//     time.classList.add('time');
//
//     wrapInfoMessage.appendChild(time);
//     wrapMessage.appendChild(wrapInfoMessage);
//
//     document.getElementById('MessagesContainer').appendChild(wrapMessage);
// }
