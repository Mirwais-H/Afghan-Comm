// server.js (or your relevant server file)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Ensure static files are served

app.post('/send-form', (req, res) => {
  const { name, email, phone } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'afghan.comm.web@gmail.com', // Your email
      pass: 'Afghanistan223' // Your email password
    }
  });

  const mailOptions = {
    from: email,
    to: 'afghan.comm.web@gmail.com', // Your email
    subject: 'Chatbot Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Form submitted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chatbot', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define Conversation schema and model
const ConversationSchema = new mongoose.Schema({
    userMessage: String,
    botResponse: String,
    timestamp: { type: Date, default: Date.now }
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

// Chatbot route
app.post('/chatbot', async (req, res) => {
    const { userMessage } = req.body;
    let botResponse = 'Sorry, I am not sure about that. Can you please rephrase?';

    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('about your website')) {
        botResponse = 'Our website offers resources including news, courses, and events tailored for the Afghan community. Visit our [Home Page](index.html) for more details.';
    } else if (lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what is your name')) {
        botResponse = 'I am Afghan Link, your friendly chatbot here to help you navigate our website and answer any questions you may have!';
    } else if (lowerCaseMessage.includes('date') || lowerCaseMessage.includes('time')) {
        botResponse = `The current date and time is ${new Date().toLocaleString()}.`;
    } else if (lowerCaseMessage.includes('weather')) {
        botResponse = await getWeather();
    } else if (lowerCaseMessage.includes('news')) {
        botResponse = 'You can check out the latest news on our [News Page](news.html).';
    } else if (lowerCaseMessage.includes('courses')) {
        botResponse = 'Explore our courses on the [Courses Page](courses.html).';
    } else if (lowerCaseMessage.includes('events')) {
        botResponse = 'Find upcoming events on our [Events Page](events.html).';
    }

    // Save the conversation to the database
    const conversation = new Conversation({ userMessage, botResponse });
    await conversation.save();

    // Send response back to the chatbot
    res.json({ botResponse });
});

// Function to get the current weather
async function getWeather() {
    try {
        const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
        const city = 'Minneapolis'; // Change to your desired city
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weather = response.data;
        return `The current weather in ${city} is ${weather.weather[0].description} with a temperature of ${weather.main.temp}°C.`;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return 'I\'m sorry, I couldn\'t retrieve the weather information at the moment.';
    }
}


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});




