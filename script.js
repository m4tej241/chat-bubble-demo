const bubble = document.getElementById('chat-bubble');
const chat = document.getElementById('copilot-chat');
const close = document.getElementById('close-chat');
const iframe = document.getElementById('chat-iframe');
const loading = document.getElementById('chat-loading');
const expand = document.getElementById('expand-chat');

// Restore open state
if (localStorage.getItem('chatOpen') === 'true') {
  openChat();
}

bubble.addEventListener('click', () => {
    if (chat.classList.contains('show')) {
      closeChat();
    } else {
      openChat();
    }
  });
  

// Close chat
close.addEventListener('click', () => {
  closeChat();
});

// Click outside to close
document.addEventListener('click', (e) => {
  if (chat.classList.contains('show') && !chat.contains(e.target) && !bubble.contains(e.target)) {
    closeChat();
  }
});

// Show iframe after load
iframe.onload = () => {
  loading.style.display = 'none';
  iframe.style.display = 'block';
};

function openChat() {
  chat.classList.add('show');
  localStorage.setItem('chatOpen', 'true');
}

function closeChat() {
  chat.classList.remove('show');
  localStorage.setItem('chatOpen', 'false');
}

const reset = document.getElementById('reset-chat');

reset.addEventListener('click', () => {
  loading.style.display = 'block';
  iframe.style.display = 'none';
  iframe.src = iframe.src;
});

expand.addEventListener('click', () => {
    chat.classList.toggle('enlarged');
    const isEnlarged = chat.classList.contains('enlarged');
  
    expand.setAttribute('aria-label', isEnlarged ? 'Shrink chat' : 'Expand chat');
    expand.setAttribute('title', isEnlarged ? 'Shrink chat' : 'Expand chat');
  
    const arrow = document.getElementById('expand-arrow');
    if (arrow) {
      arrow.setAttribute(
        'points',
        isEnlarged ? '6 9 12 15 18 9' : '6 15 12 9 18 15'
      );
    }
});