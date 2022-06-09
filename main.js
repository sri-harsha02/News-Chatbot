let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


fetch('https://api.covid19india.org/data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        coronaCaseStatus.push(data.cases_time_series[data.cases_time_series.length-1].totalconfirmed); 
        coronaDeathCases.push(data.cases_time_series[data.cases_time_series.length-1].totaldeceased); 
        coronaRecoveredCases.push(data.cases_time_series[data.cases_time_series.length-1].totalrecovered);    
    });


//News API Fetch
fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Top 3 Indian News
        topnews.push(data.articles[0].title);
        topnews.push(data.articles[1].title);
        
    });

// fetch('https://saurav.tech/NewsAPI/top-headlines/category/politics/in.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         //Top 2 Indian  Business News
//         businessNews.push(data.articles[0].title);
//         businessNews.push(data.articles[1].title);
//     });

fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Top 2 Indian News
        technologyNews.push(data.articles[0].title);
        technologyNews.push(data.articles[1].title);
    });

fetch('https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Top 3 Indian News
        entertainmentNews.push(data.articles[0].title);
        entertainmentNews.push(data.articles[1].title);
    });

fetch('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Top 3 Indian News
        sportsNews.push(data.articles[0].title);
        sportsNews.push(data.articles[1].title);
    });

fetch('https://saurav.tech/NewsAPI/top-headlines/category/science/in.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Top 3 Indian News
        scienceNews.push(data.articles[0].title);
        scienceNews.push(data.articles[1].title);
    });

fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //Top 3 Indian News
        healthNews.push(data.articles[0].title);
        healthNews.push(data.articles[1].title);
    });
// let topic;
// let newsByTopic = [];
let coronaCaseStatus = [];
let coronaDeathCases = [];
let coronaRecoveredCases = [];
let topnews = [];
let businessNews = [];
let technologyNews = [];
let entertainmentNews = [];
let sportsNews = [];
let scienceNews = [];
let healthNews = [];
let intro = ["Hello, I am Zebrun.", " I am a Super News ChatBot", "Hello, My name is Zebrun"];
let help = ["How may i assist you?", "How can i help you?", "What i can do for you?"];
let greetings = ["i am fine, what about you", "i am Lover Boy, what about you"];
let hobbies = ["i love to talk with humans", "i like to make friends like you"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I can't understand try again";
    if (message.includes('hi')) {
        let finalresult = `Hello, I am Zebrun. How can I help you?`;
        speech.text = finalresult;
    }
    if (message.includes('how are you' || 'how are you doing today')) {
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if (message.includes('tell me something about you' || 'tell me about yourself')) 
    {
        let finalresult = intro[0]+intro[1];
        speech.text = finalresult;
    }
    if (message.includes('what you can do')) {
        let finalresult = 'I can tell you the News from all over India';
        speech.text = finalresult;
    }
    if (message.includes('what you can do for me')) {
        let finalresult = 'I can tell you the News from all over India';
        speech.text = finalresult;
    }
    if (message.includes('so give me some example')) {
        let finalresult = `Try "Today's top News"`;
        speech.text = finalresult;
    }
    if (message.includes('give me some example')) {
        let finalresult = `Try Today's top News`;
        speech.text = finalresult;
    }
    if (message.includes('what are the categories you have')) {
        let finalresult = `I have category like Business,Entertainment,Health,Science,Technology and Sports`;
        speech.text = finalresult;
    }
    if (message.includes('thank you' || 'thank you so much')) {
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
        ;
    }
    if (message.includes('ok bye' || 'bye')) {
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    //Top headlines
    if (message.includes(`today's top news`)) {
        let finalresult = topnews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = topnews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('today top news')) {
        let finalresult = topnews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = topnews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('breaking news')) {
        let finalresult = topnews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = topnews[1];
        speech.text = finalresult_1;
    }

    if (message.includes('business news')) {
        let finalresult = businessNews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = businessNews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('technology news')) {
        let finalresult = technologyNews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = technologyNews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('entertainment news')) {
        let finalresult = entertainmentNews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = entertainmentNews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('sports news')) {
        let finalresult = sportsNews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = sportsNews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('science news')) {
        let finalresult = scienceNews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = scienceNews[1];
        speech.text = finalresult_1;
    }
    if (message.includes('health news')) {
        let finalresult = healthNews[0];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = healthNews[1];
        speech.text = finalresult_1;
    }

    //Corona status in India
    if (message.includes('Coronavirus')) {
        let finalresult = `total confirmed cases are ${coronaCaseStatus[0]} in India`;
        speech.text = finalresult;
    }

    //Covid-19 Death Cases
    if (message.includes('Corona death')) {
        let finalresult = `total death cases are ${coronaDeathCases[0]} in India`;
        speech.text = finalresult;
    }
    if (message.includes('death')) {
        let finalresult = `total death cases are ${coronaDeathCases[0]} in India`;
        speech.text = finalresult;
    }

    // Covid-19 Recovered Cases
    if (message.includes('recovered')) {
        let finalresult = `total recovered cases are ${coronaRecoveredCases[0]} in India`;
        speech.text = finalresult;
    }
    if (message.includes('Corona recovered')) {
        let finalresult = `total recovered cases are ${coronaRecoveredCases[0]} in India`;
        speech.text = finalresult;
    }
    // }
    // if (message.includes(`${topic} news`)) {
    //     // fetch(`https://gnews.io/api/v3/topics/${topic}?token=300b2a3d0fda1a663506b8979913b51b`)
    //     //     .then(function (response) {
    //     //         return response.json();
    //     //     })
    //     //     .then(function (data) {
    //     //         newsByTopic.push(data.articles[0].title);
    //     //     });
    //     let finalresult = newsByTopic[0];
    //     speech.text = finalresult;
    // }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    // let res = transcript.split(" ");
    // topic = res[0];
    // console.log(topic);
    chatbotvoice(transcript);
    console.log(transcript);
}

recognition.onend = function () {
    mic.style.background = "#ff3b3b";
}

mic.addEventListener("click", () => {
    mic.style.background = '#39c81f';
    recognition.start();
    console.log("Activated");
})
