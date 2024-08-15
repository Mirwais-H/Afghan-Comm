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
      const introMessage = "Hello 👋! I'm Afg assist, your friendly chatbot. I will be assisting you today, I will do my best to answer your questions but if you ever need help from the admin/operator just say 'Operator' or fill out the help form in the <a href='/public/help.html'>help</a> page. ";
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

      // Handle "operator" command
      if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
          botResponse = "Hello 👋! I'm Afg assist, your friendly chatbot. I will be assisting you today. Do you have any questions? ";
      } else {
          // Other bot responses
          if (lowerCaseMessage.includes('about your website') || lowerCaseMessage.includes('what does your website do') || lowerCaseMessage.includes('what is this website')) {
              botResponse = "Our website offers resources including news, courses, and events tailored for the Afghan community. Visit our <a href='/public/index.html'>home</a> page for more details.";
          } else if (lowerCaseMessage.includes('news') || lowerCaseMessage.includes('latest news') || lowerCaseMessage.includes('updates')) {
              botResponse = "You can check out the latest news on our <a href='/news.html'>news</a> page.";
          } else if (lowerCaseMessage.includes('how are you') || lowerCaseMessage.includes('how are you doing') || lowerCaseMessage.includes('how is it going') || lowerCaseMessage.includes("what's up")) {
              botResponse = "I am good, Thanks for asking. What can I help you with today?";    
          } else if (lowerCaseMessage.includes('courses') || lowerCaseMessage.includes('learning') || lowerCaseMessage.includes('education') || lowerCaseMessage.includes('course')) {
              botResponse = "Explore our courses on the <a href='/courses.html'>courses</a> page.";
          } else if (lowerCaseMessage.includes('resources') || lowerCaseMessage.includes('important resources') || lowerCaseMessage.includes('low income families') || lowerCaseMessage.includes('sources') || lowerCaseMessage.includes('resource')){
              botResponse = "Check out our <a href='/public/resources.html'>resources</a> page for new and upcoming resources.";
          } else if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('get in touch') || lowerCaseMessage.includes('support') || lowerCaseMessage.includes('operator')) {
              botResponse = "You can contact us by filling out the help form in our <a href='/help.html'>help</a> page.";
          } else if (lowerCaseMessage.includes('membership') || lowerCaseMessage.includes('subscription') || lowerCaseMessage.includes('subscriptions') || lowerCaseMessage.includes('memberships')) {
              botResponse = "Learn more about our subscription plans on the <a href='/public/subscriptions.html'>subscription</a> page.";

          // Questions about the bot
          } else if (lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what is your name')) {
              botResponse = 'I am Afg assist, your friendly chatbot here to help you navigate our website and answer any questions you may have!';

          // Date and Time
          } else if (lowerCaseMessage.includes('date') || lowerCaseMessage.includes('time')) {
              botResponse = `The current date and time is ${new Date().toLocaleString()}.`;

          // Weather
          } else if (lowerCaseMessage.includes('weather')) {
              botResponse = await getWeather();
          }
      }

      return botResponse;
  }

  async function getWeather() {
      try {
          const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
          const city = 'Minneapolis'; // Change to your desired city
          const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
          const weather = await response.json();
          return `The current weather in ${city} is ${weather.weather[0].description} with a temperature of ${weather.main.temp}°C.`;
      } catch (error) {
          console.error('Error fetching weather:', error);
          return 'I\'m sorry, I couldn\'t retrieve the weather information at the moment.';
      }
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












document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('video-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('video-title').value;
    let url = document.getElementById('video-url').value;
    const category = document.getElementById('video-category').value;

    // Convert standard YouTube URL to embed URL if necessary
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
    const match = url.match(youtubeRegex);
    if (match) {
      url = `https://www.youtube.com/embed/${match[1]}`;
    }

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-item');

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.frameBorder = 0;
    iframe.allowFullscreen = true;
    iframe.onerror = function() {
      alert('This video cannot be embedded.');
    };

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = title;

    videoContainer.appendChild(iframe);
    videoContainer.appendChild(videoTitle);

    document.getElementById(category).querySelector('.videos-container').appendChild(videoContainer);

    document.getElementById('video-form').reset();
  });
});


