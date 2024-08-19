document.addEventListener('DOMContentLoaded', function() {
  // Menu buttons and screen overlay
  const menuButtons = document.querySelectorAll(".menu-button");
  const screenOverlay = document.querySelector(".main-layout .screen-overlay");
  const themeButton = document.querySelector(".navbar .theme-button i");

  // Toggle sidebar visibility when menu buttons are clicked
  menuButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-hidden");
    });
  });

  // Toggle sidebar visibility when screen overlay is clicked
  screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });

  // Show sidebar on large screens by default
  if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
  }
  // login and signup forms

  document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Ensure these elements exist before adding event listeners
    if (loginToggle && signupToggle && forgotPasswordLink && loginForm && signupForm) {
        loginToggle.addEventListener('click', function() {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });

        signupToggle.addEventListener('click', function() {
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        });

        forgotPasswordLink.addEventListener('click', function() {
            // Implement forgot password functionality or redirect here
            alert('Forgot password link clicked');
        });

        // Initially display the login form
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        console.error("One or more elements are missing, please check the IDs and HTML structure.");
    }
});

}
)


document.addEventListener('DOMContentLoaded', () => {
  const planItems = document.querySelectorAll('.planItem');

  planItems.forEach(item => {
    item.addEventListener('click', () => {
      planItems.forEach(item => item.classList.remove('blue'));
      item.classList.add('blue');
    });
  });
});




// Chat Bot

document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const openChatbotButton = document.getElementById('open-chatbot');
    const closeChatbotButton = document.getElementById('close-chatbot');
    const sendMessageButton = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
  
    // Open chatbot
    openChatbotButton.addEventListener('click', () => {
        chatbotContainer.style.display = 'flex';
        openChatbotButton.style.display = 'none';
        sendIntroductionMessage(); // Send introductory message
    });
  
    // Close chatbot
    closeChatbotButton.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
        openChatbotButton.style.display = 'flex';
    });
  
    // Send message with button click
    sendMessageButton.addEventListener('click', async () => {
        await sendMessage();
    });
  
    // Send message with Enter key
    userInput.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            await sendMessage();
        }
    });
  
    // Function to send the introductory message
    function sendIntroductionMessage() {
        const introMessage = "Hello 👋! I'm Afg assist, your friendly chatbot. I will be assisting you around this website. If you need further assistance please fill out the <a href='/public/help.html'>help</a> form and someone will get back to you within 5 hours.";
        addMessage('bot', introMessage);
    }
  
    async function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            const botResponse = await getBotResponse(message);
            addMessage('bot', botResponse);
            userInput.value = '';
        }
      }

  
    async function getBotResponse(userMessage) {
        let botResponse = 'Sorry, I am not sure about that. Can you please rephrase?';
        const lowerCaseMessage = userMessage.toLowerCase();
  
        // Greetings
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            botResponse = "Hello 👋! I'm Afg assist, your friendly chatbot. I will be assisting you today. Do you need assistance around this website?";
        }
  
        // Website Information
        else if (lowerCaseMessage.includes('about your website') || lowerCaseMessage.includes('what does your website do') || lowerCaseMessage.includes('what is this website')) {
            botResponse = "Our website offers resources including news, courses, and events tailored for the Afghan community. Visit our <a href='index.html'>home</a> page for more details.";
        } else if (lowerCaseMessage.includes('news') || lowerCaseMessage.includes('latest news') || lowerCaseMessage.includes('updates')) {
            botResponse = "You can check out the latest news on our <a href='news.html'>news</a> page.";
        } else if (lowerCaseMessage.includes('courses') || lowerCaseMessage.includes('learning') || lowerCaseMessage.includes('education') || lowerCaseMessage.includes('course')) {
            botResponse = "Explore our courses on the <a href='courses.html'>courses</a> page.";
        } else if (lowerCaseMessage.includes('resources') || lowerCaseMessage.includes('important resources') || lowerCaseMessage.includes('low income families') || lowerCaseMessage.includes('sources') || lowerCaseMessage.includes('resource')) {
            botResponse = "Check out our <a href='resources.html'>resources</a> page for new and upcoming resources.";
        } else if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('get in touch') || lowerCaseMessage.includes('support') || lowerCaseMessage.includes('operator')) {
            botResponse = "You can contact us by filling out the help form in our <a href='help.html'>help</a> page.";
        } else if (lowerCaseMessage.includes('membership') || lowerCaseMessage.includes('subscription') || lowerCaseMessage.includes('subscriptions') || lowerCaseMessage.includes('memberships')) {
            botResponse = "Learn more about our subscription plans on the <a href='subscriptions.html'>subscription</a> page.";
        } else if (lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what is your name')) {
            botResponse = 'I am Afg assist, your friendly chatbot here to help you navigate our website and answer any questions you may have!';
        } else if (lowerCaseMessage.includes('date') || lowerCaseMessage.includes('time')) {
            botResponse = `The current date and time is ${new Date().toLocaleString()}.`;
        } else if (lowerCaseMessage.includes('weather')) {
            botResponse = await getWeather();
  
        // Default Response
        } else {
            botResponse = "Sorry, I am designed to answer questions only about this website. Please rephrase your question!";
        }
  
        return botResponse;
    }
  
  
    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
  
        // Add the message content without any prefix
        messageElement.innerHTML = `<div class="${sender}-message">${message}</div>`;
  
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
});

  
