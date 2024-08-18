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
        const introMessage = "Hello 👋! I'm Afg assist, your friendly chatbot. I will be assisting you today. I will do my best to answer your questions but if you ever need help from the admin/operator just say 'Operator' or fill out the help form in the <a href='/public/help.html'>help</a> page.";
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
            botResponse = "Hello 👋! I'm Afg assist, your friendly chatbot. I will be assisting you today. Do you have any questions?";
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
        }
  
        // Afghanistan Specific
        else if (lowerCaseMessage.includes('afghanistan') || lowerCaseMessage.includes('kabul') || lowerCaseMessage.includes('history of afghanistan') || lowerCaseMessage.includes('afghan culture') || lowerCaseMessage.includes('current events in afghanistan')) {
            botResponse = "Afghanistan is a country rich in history and culture. For more detailed information, you can visit our <a href='https://en.wikipedia.org/wiki/Afghanistan'>Afghanistan</a> page.";
        } else if (lowerCaseMessage.includes('capital of afghanistan')) {
            botResponse = "The capital of Afghanistan is Kabul.";
        } else if (lowerCaseMessage.includes('official language of afghanistan')) {
            botResponse = "The official languages of Afghanistan are Pashto and Dari.";
        } else if (lowerCaseMessage.includes('currency of afghanistan')) {
            botResponse = "The currency of Afghanistan is the Afghan Afghani (AFN).";
        } else if (lowerCaseMessage.includes('major cities in afghanistan')) {
            botResponse = "Some major cities in Afghanistan include Kabul, Herat, Kandahar, and Mazar-i-Sharif.";
        } else if (lowerCaseMessage.includes('afghan food') || lowerCaseMessage.includes('afghan cuisine') || lowerCaseMessage.includes('traditional afghan dishes')) {
            botResponse = "Afghan cuisine features dishes like Kabuli Pulao, Mantu, and Kebab. It's known for its rich flavors and unique spices.";
        } else if (lowerCaseMessage.includes('famous landmarks in afghanistan')) {
            botResponse = "Some famous landmarks in Afghanistan include the Buddhas of Bamiyan, the Minaret of Jam, and the Red Mosque in Herat.";
        } else if (lowerCaseMessage.includes('afghan culture') || lowerCaseMessage.includes('afghanistan traditions') || lowerCaseMessage.includes('afghan festivals')) {
            botResponse = "Afghan culture is rich with traditions, including festivals like Nowruz (Persian New Year) and Eid. Traditional music, dance, and handicrafts are also significant.";
        } else if (lowerCaseMessage.includes('afghanistan population') || lowerCaseMessage.includes('population of afghanistan')) {
            botResponse = "As of 2024, the estimated population of Afghanistan is around 42 million.";
        } else if (lowerCaseMessage.includes('afghanistan war') || lowerCaseMessage.includes('conflict in afghanistan')) {
            botResponse = "The ongoing conflict in Afghanistan has involved various international and local actors, with significant impacts on the country's stability and development.";
        } else if (lowerCaseMessage.includes('afghan national symbols') || lowerCaseMessage.includes('national emblem of afghanistan')) {
            botResponse = "The national emblem of Afghanistan features a mosque with two flags, a rising sun, and a book. The national flag consists of three vertical stripes: black, red, and green, with the national emblem in the center.";
        } else if (lowerCaseMessage.includes('afghanistan geography') || lowerCaseMessage.includes('geographic features of afghanistan')) {
            botResponse = "Afghanistan is a landlocked country located in South Asia, characterized by its mountainous terrain and arid climate. Major mountain ranges include the Hindu Kush and the Pamirs.";
        } else if (lowerCaseMessage.includes('afghan history') || lowerCaseMessage.includes('historical events in afghanistan')) {
            botResponse = "Afghanistan has a rich history influenced by various empires and cultures, including the Persian Empire, Alexander the Great, and the British Empire. The Soviet invasion in 1979 and the subsequent conflicts shaped modern Afghan history.";
        } else if (lowerCaseMessage.includes('afghan music') || lowerCaseMessage.includes('traditional afghan music')) {
            botResponse = "Afghan music includes a variety of traditional instruments such as the rubab, tabla, and dambura. It features diverse styles and rhythms reflecting the country’s cultural heritage.";
        } else if (lowerCaseMessage.includes('afghan sports') || lowerCaseMessage.includes('popular sports in afghanistan')) {
            botResponse = "Popular sports in Afghanistan include cricket, football (soccer), and volleyball. Cricket has gained significant popularity in recent years.";
        } else if (lowerCaseMessage.includes('afghan education system') || lowerCaseMessage.includes('schools in afghanistan')) {
            botResponse = "The education system in Afghanistan has faced challenges due to ongoing conflict, but there have been efforts to improve access to education, particularly for girls.";
        } else if (lowerCaseMessage.includes('afghanistan economy') || lowerCaseMessage.includes('economic situation in afghanistan')) {
            botResponse = "Afghanistan's economy relies heavily on agriculture, with major crops including wheat, rice, and fruits. The economy has been significantly impacted by political instability and conflict.";
        } else if (lowerCaseMessage.includes('afghanistan climate') || lowerCaseMessage.includes('weather in afghanistan')) {
            botResponse = "Afghanistan has a diverse climate, with arid and semi-arid regions in the central and southern areas, and a more temperate climate in the northern and eastern regions. Winters can be cold, especially in the mountainous areas.";
        } else if (lowerCaseMessage.includes('afghan arts') || lowerCaseMessage.includes('traditional afghan arts')) {
            botResponse = "Traditional Afghan arts include intricate carpet weaving, pottery, and embroidery. Afghan carpets are particularly renowned for their craftsmanship and designs.";
        } else if (lowerCaseMessage.includes('afghanistan government') || lowerCaseMessage.includes('political system in afghanistan')) {
            botResponse = "Afghanistan has experienced various forms of government over the years, including monarchy, republic, and Islamic Emirate. The current political situation is complex and subject to frequent changes.";
        } else if (lowerCaseMessage.includes('afghan holidays') || lowerCaseMessage.includes('public holidays in afghanistan')) {
            botResponse = "Public holidays in Afghanistan include Nowruz (Persian New Year), Eid al-Fitr, Eid al-Adha, and Independence Day, among others.";
        } else if (lowerCaseMessage.includes('afghan literature') || lowerCaseMessage.includes('famous afghan writers')) {
            botResponse = "Afghan literature includes works by notable authors such as Khaled Hosseini, who wrote 'The Kite Runner,' and other poets and writers who reflect the country's rich cultural heritage.";
        } else if (lowerCaseMessage.includes('afghanistan ethnic groups') || lowerCaseMessage.includes('ethnic diversity in afghanistan')) {
            botResponse = "Afghanistan is ethnically diverse, with major groups including Pashtuns, Tajiks, Hazaras, Uzbeks, and others. Each group has its own distinct culture and traditions.";
        } else if (lowerCaseMessage.includes('afghanistan wildlife') || lowerCaseMessage.includes('animals in afghanistan')) {
            botResponse = "Afghanistan is home to a variety of wildlife, including snow leopards, Marco Polo sheep, and various bird species. The country's diverse habitats support a range of animal life.";
        } else if (lowerCaseMessage.includes('afghan traditional clothing') || lowerCaseMessage.includes('clothing in afghanistan')) {
            botResponse = "Traditional Afghan clothing includes the shalwar kameez for both men and women. Men also often wear a pakol (a type of hat) and women may wear a burqa or hijab for modesty.";
        } else if (lowerCaseMessage.includes('afghanistan major rivers') || lowerCaseMessage.includes('rivers in afghanistan')) {
            botResponse = "Major rivers in Afghanistan include the Helmand River, the Kabul River, and the Amu Darya, which flow through different regions of the country.";
        } else if (lowerCaseMessage.includes('afghanistan national sports') || lowerCaseMessage.includes('traditional sports in afghanistan')) {
            botResponse = "Traditional sports in Afghanistan include Buzkashi, a game where players on horseback compete to place a goat carcass in a goal.";
        } else if (lowerCaseMessage.includes('afghanistan agriculture') || lowerCaseMessage.includes('farming in afghanistan')) {
            botResponse = "Agriculture is a key part of Afghanistan's economy, with major crops including wheat, barley, and various fruits and nuts. The sector faces challenges due to environmental and political factors.";
        } else if (lowerCaseMessage.includes('afghanistan tourism') || lowerCaseMessage.includes('tourist attractions in afghanistan')) {
            botResponse = "Tourist attractions in Afghanistan include historical sites such as the Minaret of Jam, ancient ruins, and natural landscapes. However, travel may be affected by security concerns.";
        } else if (lowerCaseMessage.includes('afghan traditional festivals') || lowerCaseMessage.includes('cultural festivals in afghanistan')) {
            botResponse = "Traditional Afghan festivals include Nowruz, which marks the Persian New Year, and Eid al-Fitr and Eid al-Adha, which are celebrated by Muslims worldwide.";  
        } else if (lowerCaseMessage.includes('afghanistan history') || lowerCaseMessage.includes('historical events in afghanistan')) {
            botResponse = "Afghanistan's history includes ancient civilizations, the Silk Road, invasions by Alexander the Great, the Mongol Empire, and more recent conflicts.";
        } else if (lowerCaseMessage.includes('afghanistan national identity') || lowerCaseMessage.includes('cultural identity of afghanistan')) {
            botResponse = "Afghanistan's national identity is shaped by its diverse ethnic groups, rich cultural traditions, and historical influences from neighboring regions.";
        } else if (lowerCaseMessage.includes('afghan culture') || lowerCaseMessage.includes('cultural practices in afghanistan')) {
            botResponse = "Afghan culture includes traditional music, dance, art, and customs such as hospitality and family values.";
        } else if (lowerCaseMessage.includes('afghanistan flag') || lowerCaseMessage.includes('national flag of afghanistan')) {
            botResponse = "The flag of Afghanistan consists of three vertical stripes: black, red, and green, with the national emblem in the center.";
        } else if (lowerCaseMessage.includes('afghanistan language') || lowerCaseMessage.includes('languages spoken in afghanistan')) {
            botResponse = "The primary languages spoken in Afghanistan are Pashto and Dari, though there are also several regional languages and dialects.";
        } else if (lowerCaseMessage.includes('afghanistan cuisine') || lowerCaseMessage.includes('typical afghan dishes')) {
            botResponse = "Afghan cuisine features dishes such as Kabuli Pulao, Mantu, and Kebab, known for its flavorful and aromatic spices.";
        } else if (lowerCaseMessage.includes('afghanistan geography') || lowerCaseMessage.includes('geographic features of afghanistan')) {
            botResponse = "Afghanistan's geography includes mountainous regions, arid deserts, and fertile plains, with major ranges like the Hindu Kush.";
        } else if (lowerCaseMessage.includes('afghanistan population') || lowerCaseMessage.includes('current population of afghanistan')) {
            botResponse = "As of 2024, the estimated population of Afghanistan is around 42 million.";
        } else if (lowerCaseMessage.includes('afghanistan landmarks') || lowerCaseMessage.includes('famous landmarks in afghanistan')) {
            botResponse = "Landmarks in Afghanistan include the Buddhas of Bamiyan, the Minaret of Jam, and the Red Mosque in Herat.";
        } else if (lowerCaseMessage.includes('afghanistan wildlife') || lowerCaseMessage.includes('animals in afghanistan')) {
            botResponse = "Afghanistan's wildlife includes animals such as snow leopards, Marco Polo sheep, and various bird species.";
        } else if (lowerCaseMessage.includes('afghanistan economy') || lowerCaseMessage.includes('economic conditions in afghanistan')) {
            botResponse = "Afghanistan's economy relies on agriculture, with significant challenges due to conflict and instability.";
        } else if (lowerCaseMessage.includes('afghanistan sports') || lowerCaseMessage.includes('popular sports in afghanistan')) {
            botResponse = "Popular sports in Afghanistan include cricket, football, and volleyball.";
        } else if (lowerCaseMessage.includes('afghanistan education') || lowerCaseMessage.includes('school system in afghanistan')) {
            botResponse = "The education system in Afghanistan faces challenges but efforts are ongoing to improve access, especially for girls.";
        } else if (lowerCaseMessage.includes('afghanistan government') || lowerCaseMessage.includes('political system of afghanistan')) {
            botResponse = "Afghanistan has experienced various forms of government, including monarchy, republic, and Islamic Emirate.";
        } else if (lowerCaseMessage.includes('afghanistan holidays') || lowerCaseMessage.includes('public holidays in afghanistan')) {
            botResponse = "Public holidays in Afghanistan include Nowruz, Eid al-Fitr, Eid al-Adha, and Independence Day.";
        } else if (lowerCaseMessage.includes('afghanistan arts') || lowerCaseMessage.includes('traditional afghan arts')) {
            botResponse = "Afghan arts include carpet weaving, pottery, and embroidery, with a rich tradition of craftsmanship.";
        } else if (lowerCaseMessage.includes('afghanistan traditional clothing') || lowerCaseMessage.includes('clothing in afghanistan')) {
            botResponse = "Traditional Afghan clothing includes the shalwar kameez, and men often wear a pakol while women may wear a burqa or hijab.";
        } else if (lowerCaseMessage.includes('afghanistan rivers') || lowerCaseMessage.includes('major rivers in afghanistan')) {
            botResponse = "Major rivers in Afghanistan include the Helmand River, Kabul River, and Amu Darya.";
        } else if (lowerCaseMessage.includes('afghanistan festivals') || lowerCaseMessage.includes('cultural festivals in afghanistan')) {
            botResponse = "Festivals in Afghanistan include Nowruz, Eid al-Fitr, and Eid al-Adha.";
        } else if (lowerCaseMessage.includes('afghanistan traditional sports') || lowerCaseMessage.includes('sports in afghanistan')) {
            botResponse = "Traditional sports in Afghanistan include Buzkashi, a game played on horseback with a goat carcass.";
        } else if (lowerCaseMessage.includes('afghanistan agriculture') || lowerCaseMessage.includes('farming in afghanistan')) {
            botResponse = "Agriculture in Afghanistan includes crops like wheat, barley, and various fruits and nuts.";
        } else if (lowerCaseMessage.includes('afghanistan tourism') || lowerCaseMessage.includes('tourist attractions in afghanistan')) {
            botResponse = "Tourist attractions in Afghanistan include historical sites and natural landscapes, though travel may be affected by security concerns.";
        } else if (lowerCaseMessage.includes('afghanistan national symbols') || lowerCaseMessage.includes('symbols of afghanistan')) {
            botResponse = "Afghanistan's national symbols include the flag, emblem, and national anthem, reflecting its cultural heritage.";
        } else if (lowerCaseMessage.includes('afghanistan traditional music') || lowerCaseMessage.includes('music of afghanistan')) {
            botResponse = "Traditional Afghan music includes instruments like the rubab, tabla, and dambura, with diverse styles and rhythms.";
        } else if (lowerCaseMessage.includes('afghanistan famous poets') || lowerCaseMessage.includes('notable afghan poets')) {
            botResponse = "Notable Afghan poets include Khushal Khan Khattak and Rahman Baba, known for their contributions to Pashto literature.";
        } else if (lowerCaseMessage.includes('afghanistan major industries') || lowerCaseMessage.includes('economic sectors in afghanistan')) {
            botResponse = "Major industries in Afghanistan include agriculture, mining, and textiles, though economic development is hindered by ongoing conflict.";
        } else if (lowerCaseMessage.includes('afghanistan historical sites') || lowerCaseMessage.includes('ancient sites in afghanistan')) {
            botResponse = "Historical sites in Afghanistan include the Bamiyan Buddhas, the Minaret of Jam, and the ancient city of Herat.";
        } else if (lowerCaseMessage.includes('afghanistan refugee crisis') || lowerCaseMessage.includes('displacement in afghanistan')) {
            botResponse = "The refugee crisis in Afghanistan has led to significant displacement of people due to conflict and instability, affecting neighboring countries as well.";
        } else if (lowerCaseMessage.includes('afghanistan traditional festivals') || lowerCaseMessage.includes('cultural celebrations in afghanistan')) {
            botResponse = "Traditional festivals in Afghanistan include Nowruz (Persian New Year) and various Islamic holidays such as Eid al-Fitr and Eid al-Adha.";
        } else if (lowerCaseMessage.includes('afghanistan famous leaders') || lowerCaseMessage.includes('notable figures from afghanistan')) {
            botResponse = "Notable figures from Afghanistan include Ahmad Shah Durrani, the founder of modern Afghanistan, and Malala Maiwand, an activist for women's rights.";
        } else if (lowerCaseMessage.includes('afghanistan arts and crafts') || lowerCaseMessage.includes('handicrafts of afghanistan')) {
            botResponse = "Afghan arts and crafts include intricate carpet weaving, traditional pottery, and embroidered textiles.";
        } else if (lowerCaseMessage.includes('afghanistan military history') || lowerCaseMessage.includes('military conflicts in afghanistan')) {
            botResponse = "Afghanistan has a complex military history, including the Soviet invasion, the rise of the Taliban, and ongoing international conflicts.";
        } else if (lowerCaseMessage.includes('afghanistan natural resources') || lowerCaseMessage.includes('resources in afghanistan')) {
            botResponse = "Natural resources in Afghanistan include minerals such as lithium, copper, and rare earth elements, as well as natural gas and oil.";
        } else if (lowerCaseMessage.includes('afghanistan traditional food') || lowerCaseMessage.includes('afghan dishes')) {
            botResponse = "Traditional Afghan food includes Kabuli Pulao, Mantu, and Kebab, often featuring a mix of rice, meat, and spices.";
        } else if (lowerCaseMessage.includes('afghanistan cultural heritage') || lowerCaseMessage.includes('heritage sites in afghanistan')) {
            botResponse = "Cultural heritage sites in Afghanistan include the Bamiyan Buddhas and the Minaret of Jam, reflecting its rich history and diverse influences.";
        } else if (lowerCaseMessage.includes('afghanistan current affairs') || lowerCaseMessage.includes('latest news about afghanistan')) {
            botResponse = "For current affairs and the latest news about Afghanistan, check reliable news sources or visit dedicated news platforms.";
        } else if (lowerCaseMessage.includes('afghanistan top universities') || lowerCaseMessage.includes('education institutions in afghanistan')) {
            botResponse = "Top universities in Afghanistan include the University of Kabul, Herat University, and the American University of Afghanistan.";
        } else if (lowerCaseMessage.includes('afghanistan important events') || lowerCaseMessage.includes('key historical events in afghanistan')) {
            botResponse = "Important events in Afghan history include the Soviet invasion of 1979, the rise of the Taliban in the 1990s, and the ongoing conflict since 2001.";
        } else if (lowerCaseMessage.includes('afghanistan famous scientists') || lowerCaseMessage.includes('notable figures in afghanistan science')) {
            botResponse = "Famous Afghan scientists include Dr. Anwar ul-Haq, a renowned physicist, and Dr. Sayed Agha, a prominent researcher in environmental science.";
        } else if (lowerCaseMessage.includes('afghanistan economic challenges') || lowerCaseMessage.includes('economic issues in afghanistan')) {
            botResponse = "Economic challenges in Afghanistan include instability, limited infrastructure, and reliance on international aid.";
        } else if (lowerCaseMessage.includes('afghanistan public health') || lowerCaseMessage.includes('healthcare in afghanistan')) {
            botResponse = "Public health in Afghanistan faces challenges including limited healthcare infrastructure, disease outbreaks, and inadequate access to medical services.";
        } else if (lowerCaseMessage.includes('afghanistan religious practices') || lowerCaseMessage.includes('religions in afghanistan')) {
            botResponse = "Islam is the predominant religion in Afghanistan, with various practices and traditions observed across the country.";
        } else if (lowerCaseMessage.includes("afghanistan women's rights") || lowerCaseMessage.includes('gender issues in afghanistan')) {
            botResponse = "Women's rights in Afghanistan have faced significant challenges due to ongoing conflict and political instability, though there have been efforts to improve conditions.";
        } else if (lowerCaseMessage.includes('afghanistan local customs') || lowerCaseMessage.includes('traditional customs in afghanistan')) {
            botResponse = "Local customs in Afghanistan include traditional hospitality, respect for elders, and various cultural rituals and ceremonies.";
        } else if (lowerCaseMessage.includes('afghanistan major festivals') || lowerCaseMessage.includes('important festivals in afghanistan')) {
            botResponse = "Major festivals in Afghanistan include Nowruz, Eid al-Fitr, and Eid al-Adha, celebrated with various cultural and religious activities.";
        } else if (lowerCaseMessage.includes('afghanistan population density') || lowerCaseMessage.includes('density of afghanistan population')) {
            botResponse = "Afghanistan's population density varies significantly, with higher density in urban areas like Kabul and lower density in rural regions.";
        } else if (lowerCaseMessage.includes('afghanistan health system') || lowerCaseMessage.includes('healthcare system in afghanistan')) {
            botResponse = "The health system in Afghanistan includes public and private healthcare facilities, though access to services can be limited in some areas.";
        } else if (lowerCaseMessage.includes('afghanistan cultural values') || lowerCaseMessage.includes('values in afghanistan')) {
            botResponse = "Cultural values in Afghanistan include strong family ties, hospitality, and respect for tradition and religious practices.";
        } else if (lowerCaseMessage.includes('afghanistan environmental issues') || lowerCaseMessage.includes('environmental concerns in afghanistan')) {
            botResponse = "Environmental issues in Afghanistan include deforestation, water scarcity, and pollution, which impact both the environment and public health.";
        } else if (lowerCaseMessage.includes('afghanistan key industries') || lowerCaseMessage.includes('main industries in afghanistan')) {
            botResponse = "Key industries in Afghanistan include agriculture, mining, and textiles, with significant potential for growth and development.";
        } else if (lowerCaseMessage.includes('afghanistan foreign relations') || lowerCaseMessage.includes('international relations of afghanistan')) {
            botResponse = "Afghanistan's foreign relations involve various international actors, with a focus on security, development aid, and diplomatic engagement.";
        } else if (lowerCaseMessage.includes('afghanistan traditional crafts') || lowerCaseMessage.includes('handmade crafts in afghanistan')) {
            botResponse = "Traditional Afghan crafts include carpet weaving, pottery, and embroidery, reflecting the country's rich artisanal heritage.";
        } else if (lowerCaseMessage.includes('afghanistan famous artists') || lowerCaseMessage.includes('notable artists from afghanistan')) {
            botResponse = "Famous Afghan artists include Ustad Mohammad Omar, known for his paintings, and other contemporary artists who contribute to the country's art scene.";
        } else if (lowerCaseMessage.includes('afghanistan ancient civilizations') || lowerCaseMessage.includes('historical civilizations in afghanistan')) {
            botResponse = "Ancient civilizations in Afghanistan include the Gandhara civilization, known for its Buddhist art and cultural exchange along the Silk Road.";
        } else if (lowerCaseMessage.includes('afghanistan major events in 2024') || lowerCaseMessage.includes('recent events in afghanistan')) {
            botResponse = "For major events in Afghanistan in 2024, check reliable news sources for the most recent updates and developments.";
        } else if (lowerCaseMessage.includes('afghanistan traditional festivals') || lowerCaseMessage.includes('cultural events in afghanistan')) {
            botResponse = "Traditional festivals in Afghanistan include Nowruz, Eid celebrations, and various local cultural events."
        } else if (lowerCaseMessage.includes('afghanistan social issues') || lowerCaseMessage.includes('challenges in afghanistan society')) {
            botResponse = "Social issues in Afghanistan include gender inequality, education access, and poverty, with ongoing efforts to address these challenges.";
        } else if (lowerCaseMessage.includes('afghanistan famous historical figures') || lowerCaseMessage.includes('notable people in afghanistan history')) {
            botResponse = "Famous historical figures from Afghanistan include Ahmad Shah Durrani, the founder of modern Afghanistan, and Sher Ali Khan, an influential leader in the 19th century.";
        } else if (lowerCaseMessage.includes('afghanistan traditional music') || lowerCaseMessage.includes('music of afghanistan')) {
            botResponse = "Traditional Afghan music features instruments like the rubab, tabla, and dambura, and is known for its diverse and melodic styles.";
        } else if (lowerCaseMessage.includes('afghanistan top universities') || lowerCaseMessage.includes('educational institutions in afghanistan')) {
            botResponse = "Top universities in Afghanistan include the University of Kabul, Herat University, and the American University of Afghanistan.";
        } else if (lowerCaseMessage.includes('afghanistan cultural festivals') || lowerCaseMessage.includes('major celebrations in afghanistan')) {
            botResponse = "Cultural festivals in Afghanistan include Nowruz, Eid al-Fitr, and Eid al-Adha, celebrated with traditional events and ceremonies.";
        } else if (lowerCaseMessage.includes('afghanistan major cities') || lowerCaseMessage.includes('key urban centers in afghanistan')) {
            botResponse = "Major cities in Afghanistan include Kabul, Herat, Kandahar, and Mazar-i-Sharif.";
        } else if (lowerCaseMessage.includes('afghanistan ethnic groups') || lowerCaseMessage.includes('diverse communities in afghanistan')) {
            botResponse = "Afghanistan is home to several ethnic groups, including Pashtuns, Tajiks, Hazaras, and Uzbeks, each with its own cultural traditions."
        } else if (lowerCaseMessage.includes('afghanistan traditional festivals') || lowerCaseMessage.includes('cultural celebrations in afghanistan')) {
            botResponse = "Traditional festivals in Afghanistan include Nowruz, Eid al-Fitr, and Eid al-Adha, with various local customs and celebrations."
        } else if (lowerCaseMessage.includes('afghanistan religious sites') || lowerCaseMessage.includes('holy places in afghanistan')) {
            botResponse = "Religious sites in Afghanistan include the Shrine of Hazrat Ali, the Pul-e Khishti Mosque, and various Sufi shrines and historical mosques."
        } else if (lowerCaseMessage.includes('afghanistan infrastructure') || lowerCaseMessage.includes('development in afghanistan')) {
            botResponse = "Infrastructure development in Afghanistan includes projects in transportation, energy, and education, though progress is affected by ongoing challenges."
        } else if (lowerCaseMessage.includes("afghanistan gender equality") || lowerCaseMessage.includes("women's rights issues in afghanistan")) {
            botResponse = "Gender equality in Afghanistan faces significant challenges, including limited access to education and healthcare for women and girls."
        } else if (lowerCaseMessage.includes('afghanistan natural beauty') || lowerCaseMessage.includes('scenic locations in afghanistan')) {
            botResponse = "Afghanistan's natural beauty includes landscapes like the Panjshir Valley, the Wakhan Corridor, and the mountains of Bamiyan."
        } else if (lowerCaseMessage.includes('afghanistan traditional dances') || lowerCaseMessage.includes('dance forms in afghanistan')) {
            botResponse = "Traditional Afghan dances include the Attan, a folk dance performed at celebrations, and various regional dance styles."
        } else if (lowerCaseMessage.includes('afghanistan political history') || lowerCaseMessage.includes('political developments in afghanistan')) {
            botResponse = "Afghanistan's political history includes periods of monarchy, republic, and Islamic Emirate, with ongoing changes and challenges in recent decades."
        } else if (lowerCaseMessage.includes("afghanistan women's education") || lowerCaseMessage.includes('education for girls in afghanistan')) {
            botResponse = "Education for girls in Afghanistan has faced challenges but there are ongoing efforts to improve access and quality in various regions."
        } else if (lowerCaseMessage.includes('afghanistan traditional medicine') || lowerCaseMessage.includes('health practices in afghanistan')) {
            botResponse = "Traditional Afghan medicine includes herbal remedies and practices passed down through generations, often used alongside modern healthcare."
        } else if (lowerCaseMessage.includes('afghanistan cultural heritage sites') || lowerCaseMessage.includes('important sites in afghanistan')) {
            botResponse = "Cultural heritage sites in Afghanistan include the Bamiyan Buddhas, the Minaret of Jam, and the ancient city of Herat."
        } else if (lowerCaseMessage.includes('afghanistan economic development') || lowerCaseMessage.includes('growth and progress in afghanistan')) {
            botResponse = "Economic development in Afghanistan includes efforts in infrastructure, agriculture, and industry, though it is hindered by instability and conflict."
        } else if (lowerCaseMessage.includes('afghanistan religious diversity') || lowerCaseMessage.includes('religious groups in afghanistan')) {
            botResponse = "Afghanistan is predominantly Muslim, but there are also small communities of Hindus, Sikhs, and other religious minorities."
        } else if (lowerCaseMessage.includes('afghanistan traditional housing') || lowerCaseMessage.includes('homes in afghanistan')) {
            botResponse = "Traditional housing in Afghanistan includes mud-brick homes in rural areas and more modern structures in urban centers, reflecting local building practices."
        } else if (lowerCaseMessage.includes('afghanistan major rivers') || lowerCaseMessage.includes('important rivers in afghanistan')) {
            botResponse = "Major rivers in Afghanistan include the Helmand River, the Kabul River, and the Amu Darya, which are crucial for agriculture and water supply."
        } else if (lowerCaseMessage.includes('afghanistan current leaders') || lowerCaseMessage.includes('political leaders in afghanistan')) {
            botResponse = "Current political leaders in Afghanistan can be found through reliable news sources and official government announcements, reflecting ongoing changes."
        } else if (lowerCaseMessage.includes('afghanistan local governance') || lowerCaseMessage.includes('administrative divisions in afghanistan')) {
            botResponse = "Local governance in Afghanistan includes provincial and district administrations, with varying degrees of autonomy and central oversight."
        } else if (lowerCaseMessage.includes('afghanistan transportation system') || lowerCaseMessage.includes('travel in afghanistan')) {
            botResponse = "The transportation system in Afghanistan includes roads, railways, and airports, with ongoing efforts to improve infrastructure and connectivity."
        } else if (lowerCaseMessage.includes('afghanistan rural life') || lowerCaseMessage.includes('life in rural areas of afghanistan')) {
            botResponse = "Rural life in Afghanistan often involves traditional farming practices, close-knit communities, and reliance on local customs and traditions."
        } else if (lowerCaseMessage.includes('afghanistan traditional festivals') || lowerCaseMessage.includes('cultural events in afghanistan')) {
            botResponse = "Traditional festivals in Afghanistan include Nowruz, Eid al-Fitr, and Eid al-Adha, celebrated with local customs and ceremonies."
        } else if (lowerCaseMessage.includes('afghanistan historical conflicts') || lowerCaseMessage.includes('conflicts in afghanistan history')) {
            botResponse = "Historical conflicts in Afghanistan include the Soviet invasion, the civil war, and the ongoing conflict involving various international and local actors."
        } else if (lowerCaseMessage.includes('afghanistan regional cuisine') || lowerCaseMessage.includes('food from different regions of afghanistan')) {
            botResponse = "Regional cuisine in Afghanistan includes dishes such as Kabuli Pulao, Pulao, and traditional bread, varying by region and local ingredients."
        } else if (lowerCaseMessage.includes('afghanistan traditional crafts') || lowerCaseMessage.includes('handmade goods from afghanistan')) {
            botResponse = "Traditional Afghan crafts include carpet weaving, pottery, and embroidery, known for their intricate designs and cultural significance."
        } else if (lowerCaseMessage.includes('afghanistan economic sectors') || lowerCaseMessage.includes('industries in afghanistan')) {
            botResponse = "Economic sectors in Afghanistan include agriculture, mining, and textiles, with efforts to develop other areas such as tourism and technology."
        } else if (lowerCaseMessage.includes('afghanistan environmental protection') || lowerCaseMessage.includes('conservation efforts in afghanistan')) {
            botResponse = "Environmental protection in Afghanistan includes initiatives to address issues like deforestation, water scarcity, and wildlife conservation."
        } else if (lowerCaseMessage.includes('afghanistan famous authors') || lowerCaseMessage.includes('literature from afghanistan')) {
            botResponse = "Famous Afghan authors include Khaled Hosseini, known for his novel 'The Kite Runner,' and other writers who contribute to Afghan and global literature."
        } else if (lowerCaseMessage.includes('afghanistan educational challenges') || lowerCaseMessage.includes('issues in afghanistan education system')) {
            botResponse = "Educational challenges in Afghanistan include limited access to schools, particularly for girls, and the need for improved infrastructure and resources."
        } else if (lowerCaseMessage.includes('afghanistan international aid') || lowerCaseMessage.includes('foreign assistance to afghanistan')) {
            botResponse = "International aid to Afghanistan includes humanitarian assistance, development projects, and support for governance and security efforts."
        } else if (lowerCaseMessage.includes('afghanistan ethnic diversity') || lowerCaseMessage.includes('cultural groups in afghanistan')) {
            botResponse = "Afghanistan is ethnically diverse, with major groups including Pashtuns, Tajiks, Hazaras, and Uzbeks, each contributing to the country's rich cultural tapestry."
        } else if (lowerCaseMessage.includes('afghanistan traditional attire') || lowerCaseMessage.includes('clothing styles in afghanistan')) {
            botResponse = "Traditional Afghan attire includes the shalwar kameez for both men and women, with variations based on region and occasion."
        } else if (lowerCaseMessage.includes('afghanistan famous historical sites') || lowerCaseMessage.includes('notable landmarks in afghanistan')) {
            botResponse = "Famous historical sites in Afghanistan include the Bamiyan Buddhas, the Minaret of Jam, and the ancient city of Herat, each with significant historical importance."
        } else if (lowerCaseMessage.includes('afghanistan public services') || lowerCaseMessage.includes('services available in afghanistan')) {
            botResponse = "Public services in Afghanistan include healthcare, education, and utilities, though availability and quality can vary widely across regions."
        } else if (lowerCaseMessage.includes('afghanistan cultural heritage') || lowerCaseMessage.includes('heritage and traditions of afghanistan')) {
            botResponse = "Cultural heritage in Afghanistan encompasses traditions, customs, and historical sites reflecting the country’s rich and diverse history."
        } else if (lowerCaseMessage.includes('afghanistan significant events') || lowerCaseMessage.includes('noteworthy occurrences in afghanistan')) {
            botResponse = "Significant events in Afghanistan include key historical milestones, conflicts, and recent developments affecting the country's political and social landscape."
        } else if (lowerCaseMessage.includes('afghanistan local governance') || lowerCaseMessage.includes('administrative divisions in afghanistan')) {
            botResponse = "Local governance in Afghanistan is structured into provinces and districts, with administrative responsibilities varying across regions."
        } else if (lowerCaseMessage.includes('afghanistan contemporary issues') || lowerCaseMessage.includes('current problems in afghanistan')) {
            botResponse = "Contemporary issues in Afghanistan include political instability, security concerns, and socio-economic challenges impacting daily life and development."
        } else if (lowerCaseMessage.includes('afghanistan traditional arts') || lowerCaseMessage.includes('art forms in afghanistan')) {
            botResponse = "Traditional arts in Afghanistan include intricate carpet weaving, pottery, and decorative embroidery, showcasing skilled craftsmanship and cultural heritage."
        } else if (lowerCaseMessage.includes('afghanistan notable landmarks') || lowerCaseMessage.includes('important places in afghanistan')) {
            botResponse = "Notable landmarks in Afghanistan include the Buddhas of Bamiyan, the Minaret of Jam, and historical sites in Herat and Kabul."
        } else if (lowerCaseMessage.includes('afghanistan key political events') || lowerCaseMessage.includes('important political changes in afghanistan')) {
            botResponse = "Key political events in Afghanistan include the Soviet invasion, the rise and fall of the Taliban, and ongoing international involvement."
        } else if (lowerCaseMessage.includes('afghanistan cultural practices') || lowerCaseMessage.includes('customs and traditions in afghanistan')) {
            botResponse = "Cultural practices in Afghanistan include traditional hospitality, community gatherings, and observance of religious and cultural festivals."
        } else if (lowerCaseMessage.includes('afghanistan regional differences') || lowerCaseMessage.includes('variations across afghanistan')) {
            botResponse = "Regional differences in Afghanistan include variations in dialects, customs, and traditional practices across the country's diverse ethnic and cultural groups."
        } else if (lowerCaseMessage.includes('afghanistan current political situation') || lowerCaseMessage.includes('political climate in afghanistan')) {
            botResponse = "The current political situation in Afghanistan is complex, involving ongoing conflict, negotiations, and efforts to establish stability and governance."
        } else if (lowerCaseMessage.includes('afghanistan recent developments') || lowerCaseMessage.includes('latest news from afghanistan')) {
            botResponse = "Recent developments in Afghanistan include political changes, security updates, and international interactions, which are covered by news agencies and official sources."
        } else if (lowerCaseMessage.includes('afghanistan international relations') || lowerCaseMessage.includes('foreign policy of afghanistan')) {
            botResponse = "Afghanistan's international relations involve diplomatic engagements, security partnerships, and economic aid from various countries and organizations."
        } else if (lowerCaseMessage.includes('afghanistan famous landmarks') || lowerCaseMessage.includes('well-known places in afghanistan')) {
            botResponse = "Famous landmarks in Afghanistan include the Bamiyan Buddhas, the Minaret of Jam, and historical sites in Herat and Kabul."
        } else if (lowerCaseMessage.includes('afghanistan social structure') || lowerCaseMessage.includes('society in afghanistan')) {
            botResponse = "The social structure in Afghanistan is influenced by ethnic and tribal affiliations, family ties, and traditional customs and values."
        } else if (lowerCaseMessage.includes('afghanistan rural communities') || lowerCaseMessage.includes('life in rural afghanistan')) {
            botResponse = "Rural communities in Afghanistan often practice traditional agriculture, maintain close-knit family structures, and follow local customs and practices."
        } else if (lowerCaseMessage.includes('afghanistan current events') || lowerCaseMessage.includes('latest updates on afghanistan')) {
            botResponse = "For the latest updates and current events in Afghanistan, please refer to trusted news sources and official reports."          
        } else if (lowerCaseMessage.includes('current events in afghanistan') || lowerCaseMessage.includes('news in afghanistan')) {
            botResponse = "For the latest news and updates about Afghanistan, check reliable news sources or visit our <a href='afghanistan.html'>Afghanistan</a> page.";
  
        // General Knowledge
        } else if (lowerCaseMessage.includes('who is the president of the united states') || lowerCaseMessage.includes('current us president')) {
            botResponse = "As of 2024, the President of the United States is Joe Biden.";
        } else if (lowerCaseMessage.includes('who is the prime minister of the uk') || lowerCaseMessage.includes('current uk prime minister')) {
            botResponse = "As of 2024, the Prime Minister of the United Kingdom is Rishi Sunak.";
        } else if (lowerCaseMessage.includes('largest country by area') || lowerCaseMessage.includes('biggest country in the world')) {
            botResponse = "The largest country by area is Russia.";
        } else if (lowerCaseMessage.includes('smallest country in the world') || lowerCaseMessage.includes('smallest country by area')) {
            botResponse = "The smallest country by area is Vatican City.";
        } else if (lowerCaseMessage.includes('most spoken language in the world') || lowerCaseMessage.includes('most common language')) {
            botResponse = "The most spoken language in the world by number of native speakers is Mandarin Chinese.";
        } else if (lowerCaseMessage.includes('highest mountain in the world') || lowerCaseMessage.includes('tallest mountain')) {
            botResponse = "The highest mountain in the world is Mount Everest, standing at 8,848 meters (29,029 feet) above sea level.";
        } else if (lowerCaseMessage.includes('longest river in the world') || lowerCaseMessage.includes('longest river')) {
            botResponse = "The longest river in the world is the Nile River, which is approximately 6,650 kilometers (4,130 miles) long.";
        } else if (lowerCaseMessage.includes('largest ocean in the world') || lowerCaseMessage.includes('biggest ocean')) {
            botResponse = "The largest ocean in the world is the Pacific Ocean.";
        } else if (lowerCaseMessage.includes('fastest animal on land') || lowerCaseMessage.includes('fastest land animal')) {
            botResponse = "The fastest land animal is the cheetah, capable of reaching speeds up to 70 miles per hour (113 kilometers per hour).";
        } else if (lowerCaseMessage.includes('tallest building in the world') || lowerCaseMessage.includes('highest building')) {
            botResponse = "The tallest building in the world is the Burj Khalifa in Dubai, standing at 828 meters (2,717 feet).";
        } else if (lowerCaseMessage.includes('invented the lightbulb') || lowerCaseMessage.includes('who invented the light bulb')) {
            botResponse = "Thomas Edison is often credited with inventing the practical lightbulb, though several inventors contributed to its development.";
        } else if (lowerCaseMessage.includes('capital of France') || lowerCaseMessage.includes('France capital')) {
            botResponse = "The capital of France is Paris.";
        } else if (lowerCaseMessage.includes('smallest continent') || lowerCaseMessage.includes('smallest continent by land area')) {
            botResponse = "The smallest continent by land area is Australia.";
        } else if (lowerCaseMessage.includes('wrote Pride and Prejudice') || lowerCaseMessage.includes('Pride and Prejudice author')) {
            botResponse = "Pride and Prejudice was written by Jane Austen.";
        } else if (lowerCaseMessage.includes('chemical symbol for gold') || lowerCaseMessage.includes('gold symbol')) {
            botResponse = "The chemical symbol for gold is Au.";
        } else if (lowerCaseMessage.includes('Red Planet') || lowerCaseMessage.includes('Mars nickname')) {
            botResponse = "Mars is known as the Red Planet.";
        } else if (lowerCaseMessage.includes('painted the Mona Lisa') || lowerCaseMessage.includes('Mona Lisa artist')) {
            botResponse = "The Mona Lisa was painted by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('largest desert in the world') || lowerCaseMessage.includes('biggest desert')) {
            botResponse = "The largest desert in the world is the Antarctic Desert.";
        } else if (lowerCaseMessage.includes('discovered penicillin') || lowerCaseMessage.includes('penicillin discovery')) {
            botResponse = "Alexander Fleming discovered penicillin.";
        } else if (lowerCaseMessage.includes('capital of Japan') || lowerCaseMessage.includes('Japan capital')) {
            botResponse = "The capital of Japan is Tokyo.";
        } else if (lowerCaseMessage.includes('hardest natural substance') || lowerCaseMessage.includes('hardest material on Earth')) {
            botResponse = "The hardest natural substance on Earth is diamond.";
        } else if (lowerCaseMessage.includes('most populous country') || lowerCaseMessage.includes('country with highest population')) {
            botResponse = "The most populous country in the world is China.";
        } else if (lowerCaseMessage.includes('largest island in the world') || lowerCaseMessage.includes('biggest island')) {
            botResponse = "The largest island in the world is Greenland.";
        } else if (lowerCaseMessage.includes('longest river in the world') || lowerCaseMessage.includes('biggest river')) {
            botResponse = "The longest river in the world is the Nile River.";
        } else if (lowerCaseMessage.includes('first man on the moon') || lowerCaseMessage.includes('moon landing')) {
            botResponse = "Neil Armstrong was the first man to walk on the moon.";
        } else if (lowerCaseMessage.includes('biggest planet in the solar system') || lowerCaseMessage.includes('largest planet')) {
            botResponse = "The biggest planet in the solar system is Jupiter.";
        } else if (lowerCaseMessage.includes('hottest planet in the solar system') || lowerCaseMessage.includes('planet with highest temperature')) {
            botResponse = "The hottest planet in the solar system is Venus.";
        } else if (lowerCaseMessage.includes('longest human lifespan') || lowerCaseMessage.includes('oldest person ever')) {
            botResponse = "The longest confirmed human lifespan is 122 years, held by Jeanne Calment.";
        } else if (lowerCaseMessage.includes('largest ocean in the world') || lowerCaseMessage.includes('biggest ocean')) {
            botResponse = "The largest ocean in the world is the Pacific Ocean.";
        } else if (lowerCaseMessage.includes('fastest animal on land') || lowerCaseMessage.includes('fastest land animal')) {
            botResponse = "The fastest land animal is the cheetah, capable of reaching speeds up to 70 miles per hour (113 kilometers per hour).";
        } else if (lowerCaseMessage.includes('largest mammal') || lowerCaseMessage.includes('biggest mammal')) {
            botResponse = "The largest mammal is the blue whale.";
        } else if (lowerCaseMessage.includes('most populous city in the world') || lowerCaseMessage.includes('largest city by population')) {
            botResponse = "As of 2024, the most populous city in the world is Tokyo, Japan, with over 37 million people in its metropolitan area.";
        } else if (lowerCaseMessage.includes('longest bridge in the world') || lowerCaseMessage.includes('biggest bridge')) {
            botResponse = "The longest bridge in the world is the Danyang–Kunshan Grand Bridge in China, which is approximately 164.8 kilometers (102.4 miles) long.";
        } else if (lowerCaseMessage.includes('largest volcano in the world') || lowerCaseMessage.includes('biggest volcano')) {
            botResponse = "The largest volcano in the world is Mauna Loa in Hawaii.";
        } else if (lowerCaseMessage.includes('tallest mountain in the world') || lowerCaseMessage.includes('highest mountain')) {
            botResponse = "The tallest mountain in the world is Mount Everest.";
        } else if (lowerCaseMessage.includes('largest planet in the solar system') || lowerCaseMessage.includes('biggest planet')) {
            botResponse = "The largest planet in the solar system is Jupiter.";
        } else if (lowerCaseMessage.includes('oldest university in the world') || lowerCaseMessage.includes('first university')) {
            botResponse = "The oldest university in the world is the University of al-Qarawiyyin in Morocco, founded in 859 AD.";
        } else if (lowerCaseMessage.includes('fastest fish in the ocean') || lowerCaseMessage.includes('quickest fish')) {
            botResponse = "The fastest fish in the ocean is the sailfish.";
        } else if (lowerCaseMessage.includes('longest reigning monarch') || lowerCaseMessage.includes('longest serving monarch')) {
            botResponse = "The longest reigning monarch is King Louis XIV of France, who ruled for 72 years.";
        } else if (lowerCaseMessage.includes('largest pyramid in the world') || lowerCaseMessage.includes('biggest pyramid')) {
            botResponse = "The largest pyramid in the world is the Great Pyramid of Cholula in Mexico.";
        } else if (lowerCaseMessage.includes('oldest living person') || lowerCaseMessage.includes('oldest person alive')) {
            botResponse = "The title of the oldest living person is often held by individuals who are 115 years or older, as recognized by the Guinness World Records.";
        } else if (lowerCaseMessage.includes('largest animal on land') || lowerCaseMessage.includes('biggest land animal')) {
            botResponse = "The largest animal on land is the African elephant.";
        } else if (lowerCaseMessage.includes('highest waterfall in the world') || lowerCaseMessage.includes('tallest waterfall')) {
            botResponse = "The highest waterfall in the world is Angel Falls in Venezuela, with a height of 3,212 feet (979 meters).";
        } else if (lowerCaseMessage.includes('longest muscle in the human body') || lowerCaseMessage.includes('biggest muscle')) {
            botResponse = "The longest muscle in the human body is the sartorius muscle, which runs from the hip to the knee.";
        } else if (lowerCaseMessage.includes('highest mountain peak') || lowerCaseMessage.includes('tallest peak')) {
            botResponse = "The highest mountain peak is the summit of Mount Everest.";
        } else if (lowerCaseMessage.includes('largest glacier in the world') || lowerCaseMessage.includes('biggest glacier')) {
            botResponse = "The largest glacier in the world is the Lambert Glacier in Antarctica.";
        } else if (lowerCaseMessage.includes('largest lake in the world') || lowerCaseMessage.includes('biggest lake')) {
            botResponse = "The largest lake in the world by surface area is the Caspian Sea.";
        } else if (lowerCaseMessage.includes('largest bird in the world') || lowerCaseMessage.includes('biggest bird')) {
            botResponse = "The largest bird in the world is the ostrich.";
        } else if (lowerCaseMessage.includes('deepest part of the ocean') || lowerCaseMessage.includes('deepest ocean point')) {
            botResponse = "The deepest part of the ocean is the Mariana Trench.";
        } else if (lowerCaseMessage.includes('most spoken language in the world') || lowerCaseMessage.includes('language with most speakers')) {
            botResponse = "The most spoken language in the world by number of native speakers is Mandarin Chinese.";
        } else if (lowerCaseMessage.includes('longest reigning queen') || lowerCaseMessage.includes('longest serving queen')) {
            botResponse = "The longest reigning queen is Queen Elizabeth II of the United Kingdom.";
        } else if (lowerCaseMessage.includes('largest coral reef system') || lowerCaseMessage.includes('biggest coral reef')) {
            botResponse = "The largest coral reef system in the world is the Great Barrier Reef in Australia.";
        } else if (lowerCaseMessage.includes('longest river in the United States') || lowerCaseMessage.includes('biggest river in the US')) {
            botResponse = "The longest river in the United States is the Missouri River.";
        } else if (lowerCaseMessage.includes('largest waterfall by volume') || lowerCaseMessage.includes('biggest waterfall by volume')) {
            botResponse = "The largest waterfall by volume is Inga Falls on the Congo River in Africa.";
        } else if (lowerCaseMessage.includes('oldest tree in the world') || lowerCaseMessage.includes('longest living tree')) {
            botResponse = "The oldest known tree in the world is a bristlecone pine named Methuselah, which is over 4,800 years old.";
        } else if (lowerCaseMessage.includes('most expensive painting ever sold') || lowerCaseMessage.includes('highest price painting')) {
            botResponse = "The most expensive painting ever sold is Salvator Mundi by Leonardo da Vinci, which sold for $450.3 million in 2017.";
        } else if (lowerCaseMessage.includes('largest known star') || lowerCaseMessage.includes('biggest star')) {
            botResponse = "The largest known star by volume is UY Scuti.";
        } else if (lowerCaseMessage.includes('fastest bird in the world') || lowerCaseMessage.includes('quickest bird')) {
            botResponse = "The fastest bird in the world is the peregrine falcon.";
        } else if (lowerCaseMessage.includes('most populous state in the US') || lowerCaseMessage.includes('highest population state')) {
            botResponse = "The most populous state in the US is California.";
        } else if (lowerCaseMessage.includes('longest mountain range in the world') || lowerCaseMessage.includes('biggest mountain range')) {
            botResponse = "The longest mountain range in the world is the Andes.";        
        } else if (lowerCaseMessage.includes('largest mammal') || lowerCaseMessage.includes('biggest mammal')) {
            botResponse = "The largest mammal is the blue whale.";
        } else if (lowerCaseMessage.includes('most populous city in the world') || lowerCaseMessage.includes('largest city by population')) {
            botResponse = "As of 2024, the most populous city in the world is Tokyo, Japan, with over 37 million people in its metropolitan area.";
        } else if (lowerCaseMessage.includes('largest planet in the solar system') || lowerCaseMessage.includes('biggest planet')) {
                botResponse = "The largest planet in the solar system is Jupiter.";
        } else if (lowerCaseMessage.includes('fastest land animal') || lowerCaseMessage.includes('quickest animal on land')) {
            botResponse = "The fastest land animal is the cheetah, capable of reaching speeds up to 70 miles per hour (113 kilometers per hour).";
        } else if (lowerCaseMessage.includes('largest ocean in the world') || lowerCaseMessage.includes('biggest ocean')) {
            botResponse = "The largest ocean in the world is the Pacific Ocean.";
        } else if (lowerCaseMessage.includes('longest river in the world') || lowerCaseMessage.includes('largest river by length')) {
            botResponse = "The longest river in the world is the Nile River.";
        } else if (lowerCaseMessage.includes('highest mountain in the world') || lowerCaseMessage.includes('tallest mountain')) {
            botResponse = "The highest mountain in the world is Mount Everest.";
        } else if (lowerCaseMessage.includes('largest desert in the world') || lowerCaseMessage.includes('biggest desert')) {
            botResponse = "The largest desert in the world is the Antarctic Desert.";
        } else if (lowerCaseMessage.includes('smallest country in the world') || lowerCaseMessage.includes('least populous country')) {
            botResponse = "The smallest country in the world by area is Vatican City.";
        } else if (lowerCaseMessage.includes('most spoken language in the world') || lowerCaseMessage.includes('language with most speakers')) {
            botResponse = "The most spoken language in the world by number of native speakers is Mandarin Chinese.";
        } else if (lowerCaseMessage.includes('most populous city in the world') || lowerCaseMessage.includes('largest city by population')) {
            botResponse = "As of 2024, the most populous city in the world is Tokyo, Japan, with over 37 million people in its metropolitan area.";
        } else if (lowerCaseMessage.includes('longest bridge in the world') || lowerCaseMessage.includes('biggest bridge')) {
            botResponse = "The longest bridge in the world is the Danyang–Kunshan Grand Bridge in China, which is approximately 164.8 kilometers (102.4 miles) long.";
        } else if (lowerCaseMessage.includes('largest island in the world') || lowerCaseMessage.includes('biggest island')) {
            botResponse = "The largest island in the world is Greenland.";
        } else if (lowerCaseMessage.includes('largest lake in the world') || lowerCaseMessage.includes('biggest lake by area')) {
            botResponse = "The largest lake in the world by surface area is the Caspian Sea.";
        } else if (lowerCaseMessage.includes('deepest ocean in the world') || lowerCaseMessage.includes('ocean with the greatest depth')) {
            botResponse = "The deepest ocean in the world is the Pacific Ocean, with the Mariana Trench being its deepest point.";
        } else if (lowerCaseMessage.includes('largest volcano in the world') || lowerCaseMessage.includes('biggest volcano by size')) {
            botResponse = "The largest volcano in the world is Mauna Loa in Hawaii.";
        } else if (lowerCaseMessage.includes('most visited city in the world') || lowerCaseMessage.includes('city with the most tourists')) {
            botResponse = "The most visited city in the world is Bangkok, Thailand.";
        } else if (lowerCaseMessage.includes('longest reigning monarch') || lowerCaseMessage.includes('monarch with the longest reign')) {
            botResponse = "The longest reigning monarch is King Louis XIV of France, who reigned for 72 years and 110 days.";
        } else if (lowerCaseMessage.includes('largest animal on earth') || lowerCaseMessage.includes('biggest animal')) {
            botResponse = "The largest animal on Earth is the blue whale.";
        } else if (lowerCaseMessage.includes('most abundant gas in the earth’s atmosphere') || lowerCaseMessage.includes('major component of the atmosphere')) {
            botResponse = "The most abundant gas in the Earth's atmosphere is nitrogen.";
        } else if (lowerCaseMessage.includes('fastest bird in the world') || lowerCaseMessage.includes('quickest flying bird')) {
            botResponse = "The fastest bird in the world is the peregrine falcon, which can reach speeds over 240 miles per hour (386 kilometers per hour) in a dive.";
        } else if (lowerCaseMessage.includes('most popular sport in the world') || lowerCaseMessage.includes('most played sport')) {
            botResponse = "The most popular sport in the world is soccer, also known as football.";
        } else if (lowerCaseMessage.includes('largest diamond in the world') || lowerCaseMessage.includes('biggest diamond by size')) {
            botResponse = "The largest diamond in the world is the Cullinan Diamond.";
        } else if (lowerCaseMessage.includes('highest waterfall in the world') || lowerCaseMessage.includes('tallest waterfall')) {
            botResponse = "The highest waterfall in the world is Angel Falls in Venezuela.";
        } else if (lowerCaseMessage.includes('largest city in the USA by population') || lowerCaseMessage.includes('most populous city in the USA')) {
            botResponse = "The largest city in the USA by population is New York City.";
        } else if (lowerCaseMessage.includes('oldest university in the world') || lowerCaseMessage.includes('first university')) {
            botResponse = "The oldest university in the world is the University of al-Qarawiyyin in Morocco.";
        } else if (lowerCaseMessage.includes('most famous painting in the world') || lowerCaseMessage.includes('well-known artwork')) {
            botResponse = "One of the most famous paintings in the world is the Mona Lisa by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('largest stadium in the world') || lowerCaseMessage.includes('biggest sports arena')) {
            botResponse = "The largest stadium in the world by capacity is the Rungrado 1st of May Stadium in North Korea.";
        } else if (lowerCaseMessage.includes('oldest known civilization') || lowerCaseMessage.includes('earliest civilization')) {
            botResponse = "The oldest known civilization is the Sumerian civilization in Mesopotamia.";
        } else if (lowerCaseMessage.includes('longest running TV show') || lowerCaseMessage.includes('TV show with the longest run')) {
            botResponse = "The longest running TV show is 'The Simpsons,' which has been on air since 1989.";
        } else if (lowerCaseMessage.includes('largest river by volume') || lowerCaseMessage.includes('river with the greatest discharge')) {
            botResponse = "The largest river by volume is the Amazon River.";
        } else if (lowerCaseMessage.includes('largest sea in the world') || lowerCaseMessage.includes('biggest sea by area')) {
            botResponse = "The largest sea in the world by surface area is the Philippine Sea.";
        } else if (lowerCaseMessage.includes('longest mountain range in the world') || lowerCaseMessage.includes('largest mountain chain')) {
            botResponse = "The longest mountain range in the world is the Andes.";
        } else if (lowerCaseMessage.includes('most expensive painting ever sold') || lowerCaseMessage.includes('highest auction price for a painting')) {
            botResponse = "The most expensive painting ever sold is 'Salvator Mundi' by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('largest country in the world by area') || lowerCaseMessage.includes('biggest country by size')) {
            botResponse = "The largest country in the world by area is Russia.";
        } else if (lowerCaseMessage.includes('most populous country in the world') || lowerCaseMessage.includes('country with the largest population')) {
            botResponse = "The most populous country in the world is China.";
        } else if (lowerCaseMessage.includes('most valuable metal') || lowerCaseMessage.includes('highest value metal')) {
            botResponse = "The most valuable metal is rhodium.";
        } else if (lowerCaseMessage.includes('largest crater in the world') || lowerCaseMessage.includes('biggest impact crater')) {
            botResponse = "The largest impact crater in the world is the Vredefort Crater in South Africa.";
        } else if (lowerCaseMessage.includes('oldest person ever recorded') || lowerCaseMessage.includes('longest-lived person')) {
            botResponse = "The oldest person ever recorded was Jeanne Calment, who lived to be 122 years old.";
        } else if (lowerCaseMessage.includes('highest temperature ever recorded') || lowerCaseMessage.includes('hottest temperature ever measured')) {
            botResponse = "The highest temperature ever recorded on Earth was 134 degrees Fahrenheit (56.7 degrees Celsius) in Furnace Creek Ranch, California, USA.";
        } else if (lowerCaseMessage.includes('largest collection of books in the world') || lowerCaseMessage.includes('biggest library by number of books')) {
            botResponse = "The largest collection of books in the world is held by the Library of Congress in Washington, D.C.";
        } else if (lowerCaseMessage.includes('largest monument in the world') || lowerCaseMessage.includes('biggest statue')) {
            botResponse = "The largest monument in the world is the Statue of Unity in India.";
        } else if (lowerCaseMessage.includes('largest building in the world by area') || lowerCaseMessage.includes('biggest structure by floor space')) {
            botResponse = "The largest building in the world by area is the New Century Global Center in Chengdu, China.";
        } else if (lowerCaseMessage.includes('longest wall in the world') || lowerCaseMessage.includes('biggest wall')) {
            botResponse = "The longest wall in the world is the Great Wall of China.";
        } else if (lowerCaseMessage.includes('most used search engine') || lowerCaseMessage.includes('most popular search engine')) {
            botResponse = "The most used search engine is Google.";
        } else if (lowerCaseMessage.includes('highest mountain peak in the Americas') || lowerCaseMessage.includes('tallest mountain in South America')) {
            botResponse = "The highest mountain peak in the Americas is Aconcagua in Argentina.";
        } else if (lowerCaseMessage.includes('most widely spoken language in Africa') || lowerCaseMessage.includes('most common language in Africa')) {
            botResponse = "The most widely spoken language in Africa is Swahili.";
        } else if (lowerCaseMessage.includes('largest known star') || lowerCaseMessage.includes('biggest star by size')) {
            botResponse = "The largest known star is UY Scuti.";
        } else if (lowerCaseMessage.includes('oldest known tree') || lowerCaseMessage.includes('longest-lived tree')) {
            botResponse = "The oldest known tree is a Bristlecone Pine named Methuselah.";
        } else if (lowerCaseMessage.includes('most expensive film ever made') || lowerCaseMessage.includes('highest budget for a movie')) {
            botResponse = "The most expensive film ever made is 'Pirates of the Caribbean: On Stranger Tides.'";
        } else if (lowerCaseMessage.includes('fastest car in the world') || lowerCaseMessage.includes('quickest automobile')) {
            botResponse = "The fastest car in the world is the Bugatti Chiron Super Sport 300+.";
        } else if (lowerCaseMessage.includes('largest computer manufacturer in the world') || lowerCaseMessage.includes('biggest tech company')) {
            botResponse = "The largest computer manufacturer in the world is Lenovo.";
        } else if (lowerCaseMessage.includes('most expensive city to live in') || lowerCaseMessage.includes('highest cost of living city')) {
            botResponse = "As of recent reports, the most expensive city to live in is Singapore.";
        } else if (lowerCaseMessage.includes('largest telescope in the world') || lowerCaseMessage.includes('biggest optical telescope')) {
            botResponse = "The largest optical telescope in the world is the Gran Telescopio Canarias in Spain.";
        } else if (lowerCaseMessage.includes('most famous sculpture in the world') || lowerCaseMessage.includes('well-known sculpture')) {
            botResponse = "One of the most famous sculptures in the world is Michelangelo's David.";
        } else if (lowerCaseMessage.includes('largest waterfall by volume') || lowerCaseMessage.includes('biggest waterfall by flow')) {
            botResponse = "The largest waterfall by volume is Inga Falls in the Congo River.";
        } else if (lowerCaseMessage.includes('oldest active volcano') || lowerCaseMessage.includes('longest-active volcano')) {
            botResponse = "The oldest active volcano is Mount Etna in Italy.";
        } else if (lowerCaseMessage.includes('most valuable gemstone') || lowerCaseMessage.includes('highest value gem')) {
            botResponse = "The most valuable gemstone is the Pink Star diamond.";
        } else if (lowerCaseMessage.includes('largest amusement park in the world') || lowerCaseMessage.includes('biggest theme park')) {
            botResponse = "The largest amusement park in the world is the Disney World Resort in Florida.";
        } else if (lowerCaseMessage.includes('most viewed video on YouTube') || lowerCaseMessage.includes('most popular YouTube video')) {
            botResponse = "The most viewed video on YouTube is 'Baby Shark Dance' by Pinkfong.";
        } else if (lowerCaseMessage.includes('largest train station in the world') || lowerCaseMessage.includes('biggest railway station')) {
            botResponse = "The largest train station in the world by floor area is the Grand Central Terminal in New York City.";
        } else if (lowerCaseMessage.includes('longest river in South America') || lowerCaseMessage.includes('biggest river in South America')) {
            botResponse = "The longest river in South America is the Amazon River.";
        } else if (lowerCaseMessage.includes('most photographed landmark in the world') || lowerCaseMessage.includes('most popular landmark for photos')) {
            botResponse = "One of the most photographed landmarks in the world is the Eiffel Tower in Paris.";
        } else if (lowerCaseMessage.includes('highest recorded altitude of a bird') || lowerCaseMessage.includes('bird flying highest')) {
            botResponse = "The highest recorded altitude of a bird is 37,000 feet (11,278 meters) by the Rüppell's griffon vulture.";
        } else if (lowerCaseMessage.includes('most significant scientific discovery') || lowerCaseMessage.includes('greatest scientific breakthrough')) {
            botResponse = "One of the most significant scientific discoveries is the theory of relativity by Albert Einstein.";
        } else if (lowerCaseMessage.includes('most influential book ever written') || lowerCaseMessage.includes('most impactful book')) {
            botResponse = "One of the most influential books ever written is 'The Bible.'";
        } else if (lowerCaseMessage.includes('largest library by number of volumes') || lowerCaseMessage.includes('biggest library collection')) {
            botResponse = "The largest library by number of volumes is the British Library in London.";
        } else if (lowerCaseMessage.includes('highest-grossing film of all time') || lowerCaseMessage.includes('most successful movie at the box office')) {
            botResponse = "The highest-grossing film of all time is 'Avatar,' directed by James Cameron.";
        } else if (lowerCaseMessage.includes('largest sports stadium in the world') || lowerCaseMessage.includes('biggest stadium by capacity')) {
            botResponse = "The largest sports stadium in the world by capacity is the Rungrado 1st of May Stadium in Pyongyang, North Korea.";
        } else if (lowerCaseMessage.includes('most expensive sports team') || lowerCaseMessage.includes('highest valued sports team')) {
            botResponse = "The most expensive sports team is the Dallas Cowboys in the NFL.";
        } else if (lowerCaseMessage.includes('largest coral reef in the world') || lowerCaseMessage.includes('biggest reef system')) {
            botResponse = "The largest coral reef system in the world is the Great Barrier Reef in Australia.";
        } else if (lowerCaseMessage.includes('most visited museum in the world') || lowerCaseMessage.includes('museum with the highest attendance')) {
            botResponse = "The most visited museum in the world is the Louvre Museum in Paris.";
        } else if (lowerCaseMessage.includes('most powerful telescope in space') || lowerCaseMessage.includes('most advanced space telescope')) {
            botResponse = "The most powerful telescope in space is the James Webb Space Telescope.";
        } else if (lowerCaseMessage.includes('longest lasting empire in history') || lowerCaseMessage.includes('most enduring empire')) {
            botResponse = "The longest lasting empire in history is the Byzantine Empire.";
        } else if (lowerCaseMessage.includes('largest economy in the world') || lowerCaseMessage.includes('biggest GDP')) {
            botResponse = "The largest economy in the world by nominal GDP is the United States.";
        } else if (lowerCaseMessage.includes('most famous shipwreck') || lowerCaseMessage.includes('most well-known shipwreck')) {
            botResponse = "One of the most famous shipwrecks is the Titanic.";
        } else if (lowerCaseMessage.includes('largest glacier in the world') || lowerCaseMessage.includes('biggest glacier by size')) {
            botResponse = "The largest glacier in the world is the Lambert Glacier in Antarctica.";
        } else if (lowerCaseMessage.includes('oldest city in the world') || lowerCaseMessage.includes('most ancient city')) {
            botResponse = "The oldest continuously inhabited city in the world is Damascus in Syria.";
        } else if (lowerCaseMessage.includes('largest opera house in the world') || lowerCaseMessage.includes('biggest theater by capacity')) {
            botResponse = "The largest opera house in the world by capacity is the Metropolitan Opera House in New York City.";
        } else if (lowerCaseMessage.includes('most visited website in the world') || lowerCaseMessage.includes('most popular website')) {
            botResponse = "The most visited website in the world is Google.";
        } else if (lowerCaseMessage.includes('longest flight in the world') || lowerCaseMessage.includes('longest nonstop flight')) {
            botResponse = "The longest nonstop flight in the world is Singapore Airlines Flight SQ23, from Singapore to New York City.";
        } else if (lowerCaseMessage.includes('largest volcano eruption in history') || lowerCaseMessage.includes('biggest volcanic eruption')) {
            botResponse = "The largest volcanic eruption in history is the eruption of Mount Tambora in 1815.";
        } else if (lowerCaseMessage.includes('largest swimming pool in the world') || lowerCaseMessage.includes('biggest pool by area')) {
            botResponse = "The largest swimming pool in the world by area is the San Alfonso del Mar pool in Chile.";
        } else if (lowerCaseMessage.includes('most successful video game of all time') || lowerCaseMessage.includes('highest selling video game')) {
            botResponse = "The most successful video game of all time by sales is 'Minecraft.'";
        } else if (lowerCaseMessage.includes('largest diamond mine in the world') || lowerCaseMessage.includes('biggest diamond mine by area')) {
            botResponse = "The largest diamond mine in the world by area is the Mirny Mine in Russia.";
        } else if (lowerCaseMessage.includes('largest hotel in the world') || lowerCaseMessage.includes('biggest hotel by number of rooms')) {
            botResponse = "The largest hotel in the world by number of rooms is the First World Hotel in Malaysia.";
        } else if (lowerCaseMessage.includes('largest pen in the world') || lowerCaseMessage.includes('biggest writing instrument')) {
            botResponse = "The largest pen in the world is the 'BIC Cristal' in France.";
        } else if (lowerCaseMessage.includes('largest moon in the solar system') || lowerCaseMessage.includes('biggest moon by size')) {
            botResponse = "The largest moon in the solar system is Ganymede, a moon of Jupiter.";
        } else if (lowerCaseMessage.includes('largest cave in the world') || lowerCaseMessage.includes('biggest cave by volume')) {
            botResponse = "The largest cave in the world by volume is the Hang Son Doong cave in Vietnam.";
        } else if (lowerCaseMessage.includes('most valuable currency') || lowerCaseMessage.includes('highest exchange rate currency')) {
            botResponse = "The most valuable currency in terms of exchange rate is the Kuwaiti Dinar.";
        } else if (lowerCaseMessage.includes('largest online retailer in the world') || lowerCaseMessage.includes('biggest e-commerce company')) {
            botResponse = "The largest online retailer in the world is Amazon.";
        } else if (lowerCaseMessage.includes('oldest known artifact') || lowerCaseMessage.includes('earliest discovered artifact')) {
            botResponse = "The oldest known artifact is the Oldowan stone tools found in Africa.";
        } else if (lowerCaseMessage.includes('most populous country in Africa') || lowerCaseMessage.includes('country with the largest population in Africa')) {
            botResponse = "The most populous country in Africa is Nigeria.";
        } else if (lowerCaseMessage.includes('largest national park in the world') || lowerCaseMessage.includes('biggest protected area')) {
            botResponse = "The largest national park in the world is the Northeast Greenland National Park.";
        } else if (lowerCaseMessage.includes('most famous historical figure') || lowerCaseMessage.includes('most well-known historical person')) {
            botResponse = "One of the most famous historical figures is Albert Einstein.";
        } else if (lowerCaseMessage.includes('most valuable collectible item') || lowerCaseMessage.includes('highest value collectible')) {
            botResponse = "The most valuable collectible item is the 'Mona Lisa' painting by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('most famous landmark in the USA') || lowerCaseMessage.includes('most well-known US landmark')) {
            botResponse = "One of the most famous landmarks in the USA is the Statue of Liberty.";
        } else if (lowerCaseMessage.includes('largest freshwater lake in the world') || lowerCaseMessage.includes('biggest freshwater lake by area')) {
            botResponse = "The largest freshwater lake in the world by area is Lake Superior.";
        } else if (lowerCaseMessage.includes('most expensive artwork ever sold') || lowerCaseMessage.includes('highest auction price for an art piece')) {
            botResponse = "The most expensive artwork ever sold is 'Salvator Mundi' by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('highest number of languages spoken in a country') || lowerCaseMessage.includes('country with most languages')) {
            botResponse = "The country with the highest number of spoken languages is Papua New Guinea.";
        } else if (lowerCaseMessage.includes('largest aquarium in the world') || lowerCaseMessage.includes('biggest marine life center')) {
            botResponse = "The largest aquarium in the world is the Georgia Aquarium in Atlanta, USA.";
        } else if (lowerCaseMessage.includes('most expensive car ever sold') || lowerCaseMessage.includes('highest auction price for a car')) {
            botResponse = "The most expensive car ever sold is a 1955 Ferrari 410 Sport Spider.";
        } else if (lowerCaseMessage.includes('largest artificial lake in the world') || lowerCaseMessage.includes('biggest man-made lake by volume')) {
            botResponse = "The largest artificial lake in the world by volume is Lake Volta in Ghana.";
        } else if (lowerCaseMessage.includes('largest planet in the solar system') || lowerCaseMessage.includes('biggest planet')) {
            botResponse = "The largest planet in the solar system is Jupiter.";
        } else if (lowerCaseMessage.includes('fastest land animal') || lowerCaseMessage.includes('quickest animal on land')) {
            botResponse = "The fastest land animal is the cheetah, capable of reaching speeds up to 70 miles per hour (113 kilometers per hour).";
        } else if (lowerCaseMessage.includes('largest ocean in the world') || lowerCaseMessage.includes('biggest ocean')) {
            botResponse = "The largest ocean in the world is the Pacific Ocean.";
        } else if (lowerCaseMessage.includes('longest river in the world') || lowerCaseMessage.includes('largest river by length')) {
            botResponse = "The longest river in the world is the Nile River.";
        } else if (lowerCaseMessage.includes('highest mountain in the world') || lowerCaseMessage.includes('tallest mountain')) {
            botResponse = "The highest mountain in the world is Mount Everest.";
        } else if (lowerCaseMessage.includes('largest desert in the world') || lowerCaseMessage.includes('biggest desert')) {
            botResponse = "The largest desert in the world is the Antarctic Desert.";
        } else if (lowerCaseMessage.includes('smallest country in the world') || lowerCaseMessage.includes('least populous country')) {
            botResponse = "The smallest country in the world by area is Vatican City.";
        } else if (lowerCaseMessage.includes('most spoken language in the world') || lowerCaseMessage.includes('language with most speakers')) {
            botResponse = "The most spoken language in the world by number of native speakers is Mandarin Chinese.";
        } else if (lowerCaseMessage.includes('most populous city in the world') || lowerCaseMessage.includes('largest city by population')) {
            botResponse = "As of 2024, the most populous city in the world is Tokyo, Japan, with over 37 million people in its metropolitan area.";
        } else if (lowerCaseMessage.includes('longest bridge in the world') || lowerCaseMessage.includes('biggest bridge')) {
            botResponse = "The longest bridge in the world is the Danyang–Kunshan Grand Bridge in China, which is approximately 164.8 kilometers (102.4 miles) long.";
        } else if (lowerCaseMessage.includes('largest island in the world') || lowerCaseMessage.includes('biggest island')) {
            botResponse = "The largest island in the world is Greenland.";
        } else if (lowerCaseMessage.includes('largest lake in the world') || lowerCaseMessage.includes('biggest lake by area')) {
            botResponse = "The largest lake in the world by surface area is the Caspian Sea.";
        } else if (lowerCaseMessage.includes('deepest ocean in the world') || lowerCaseMessage.includes('ocean with the greatest depth')) {
            botResponse = "The deepest ocean in the world is the Pacific Ocean, with the Mariana Trench being its deepest point.";
        } else if (lowerCaseMessage.includes('largest volcano in the world') || lowerCaseMessage.includes('biggest volcano by size')) {
            botResponse = "The largest volcano in the world is Mauna Loa in Hawaii.";
        } else if (lowerCaseMessage.includes('most visited city in the world') || lowerCaseMessage.includes('city with the most tourists')) {
            botResponse = "As of 2024, the most visited city in the world is Bangkok, Thailand.";
        } else if (lowerCaseMessage.includes('longest reigning monarch') || lowerCaseMessage.includes('monarch with the longest reign')) {
            botResponse = "The longest reigning monarch is King Louis XIV of France, who reigned for 72 years and 110 days.";
        } else if (lowerCaseMessage.includes('largest animal on earth') || lowerCaseMessage.includes('biggest animal')) {
            botResponse = "The largest animal on Earth is the blue whale.";
        } else if (lowerCaseMessage.includes('most abundant gas in the earth’s atmosphere') || lowerCaseMessage.includes('major component of the atmosphere')) {
            botResponse = "The most abundant gas in the Earth's atmosphere is nitrogen.";
        } else if (lowerCaseMessage.includes('fastest bird in the world') || lowerCaseMessage.includes('quickest flying bird')) {
            botResponse = "The fastest bird in the world is the peregrine falcon, which can reach speeds over 240 miles per hour (386 kilometers per hour) in a dive.";
        } else if (lowerCaseMessage.includes('most popular sport in the world') || lowerCaseMessage.includes('most played sport')) {
            botResponse = "The most popular sport in the world is soccer, also known as football.";
        } else if (lowerCaseMessage.includes('largest diamond in the world') || lowerCaseMessage.includes('biggest diamond by size')) {
            botResponse = "The largest diamond in the world is the Cullinan Diamond.";
        } else if (lowerCaseMessage.includes('highest waterfall in the world') || lowerCaseMessage.includes('tallest waterfall')) {
            botResponse = "The highest waterfall in the world is Angel Falls in Venezuela.";
        } else if (lowerCaseMessage.includes('largest city in the USA by population') || lowerCaseMessage.includes('most populous city in the USA')) {
            botResponse = "The largest city in the USA by population is New York City.";
        } else if (lowerCaseMessage.includes('oldest university in the world') || lowerCaseMessage.includes('first university')) {
            botResponse = "The oldest university in the world is the University of al-Qarawiyyin in Morocco.";
        } else if (lowerCaseMessage.includes('most famous painting in the world') || lowerCaseMessage.includes('well-known artwork')) {
            botResponse = "One of the most famous paintings in the world is the 'Mona Lisa' by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('largest gold mine in the world') || lowerCaseMessage.includes('biggest gold mine by output')) {
            botResponse = "The largest gold mine in the world by output is the Grasberg Mine in Indonesia.";
        } else if (lowerCaseMessage.includes('largest wind farm in the world') || lowerCaseMessage.includes('biggest wind power facility')) {
            botResponse = "The largest wind farm in the world is the Gansu Wind Farm in China.";
        } else if (lowerCaseMessage.includes('oldest known language') || lowerCaseMessage.includes('earliest written language')) {
            botResponse = "The oldest known written language is Sumerian.";
        } else if (lowerCaseMessage.includes('most expensive painting ever sold') || lowerCaseMessage.includes('highest auction price for an artwork')) {
            botResponse = "The most expensive painting ever sold is 'Salvator Mundi' by Leonardo da Vinci.";
        } else if (lowerCaseMessage.includes('largest public park in the world') || lowerCaseMessage.includes('biggest urban park')) {
            botResponse = "The largest public park in the world is the Sizewell Woods in the UK.";
        } else if (lowerCaseMessage.includes('largest pyramid in the world') || lowerCaseMessage.includes('biggest pyramid by size')) {
            botResponse = "The largest pyramid in the world by volume is the Great Pyramid of Cholula in Mexico.";
        } else if (lowerCaseMessage.includes('largest sea in the world') || lowerCaseMessage.includes('biggest sea by area')) {
            botResponse = "The largest sea in the world by surface area is the Philippine Sea.";
        } else if (lowerCaseMessage.includes('largest island in the Mediterranean Sea') || lowerCaseMessage.includes('biggest Mediterranean island')) {
            botResponse = "The largest island in the Mediterranean Sea is Sicily.";
        } else if (lowerCaseMessage.includes('longest mountain range in the world') || lowerCaseMessage.includes('biggest mountain range')) {
            botResponse = "The longest mountain range in the world is the Andes.";
        } else if (lowerCaseMessage.includes('largest animal migration') || lowerCaseMessage.includes('biggest wildlife migration')) {
            botResponse = "The largest animal migration is the Great Migration of wildebeests in the Serengeti.";
        } else if (lowerCaseMessage.includes('largest number of countries visited by a single airline') || lowerCaseMessage.includes('airline with the most international destinations')) {
            botResponse = "The airline with the most international destinations is Turkish Airlines.";
        } else if (lowerCaseMessage.includes('longest bridge in the world') || lowerCaseMessage.includes('biggest bridge')) {
        botResponse = "The longest bridge in the world is the Danyang–Kunshan Grand Bridge in China, which is approximately 164.8 kilometers (102.4 miles) long.";
  
        // Default Response
        } else {
            botResponse = "Sorry, I am not sure about that. Can you please rephrase?";
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

  
