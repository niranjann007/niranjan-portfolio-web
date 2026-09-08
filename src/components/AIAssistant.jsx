import React, { useState, useRef, useEffect } from "react";
import "./AIAssistant.css";
import { FaPaperPlane, FaTimes, FaMagic } from "react-icons/fa";
import { niranjanContext } from "../data/niranjanData";
import aiGlowVideo from "../assets/ai-glow.mp4";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Niranjan's AI Assistant. Ask me anything about his skills, projects, education, or career!",
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

// Local Search Engine
const getLocalResponse = (userQuery) => {
  const query = userQuery.toLowerCase();

  if (
    query.includes("skill") ||
    query.includes("technolog") ||
    query.includes("stack")
  ) {
    return `🛠️ **Niranjan's Technical Skills:**

**Programming:**
- Python (Advanced / Primary focus)
- C Programming
- C++
- Java (Basics)
- JavaScript
- SQL

**Data Science & Machine Learning:**
- Machine Learning
- Scikit-learn
- Natural Language Processing (NLP)
- NLTK
- Pandas
- NumPy
- PyTorch
- Data Analytics

**Data Visualization & Analytics:**
- Power BI
- Matplotlib
- Seaborn
- Advanced Excel
- MySQL

**Web Technologies:**
- React.js
- Streamlit
- HTML / HTML5
- CSS3 (Basics)

**IoT & Hardware:**
- IoT Development
- Arduino Uno
- MQ3 & MQ5 Gas Sensors
- Buzzer
- LEDs
- LCD Display

**Tools & Platforms:**
- Git
- GitHub
- VS Code

**Core Concepts:**
- DBMS
- OOPs
- Computer Networks
- Data Structures

**Media & Editing:**
- Canva
- CapCut
- Alight Motion`;
  }

  if (
    query.includes("project") ||
    query.includes("fake news")
  ) {
    return `🤖 *Fake News Detection System Using Social Media Data*

An end-to-end Machine Learning + NLP project completed during Niranjan's TCS iON Industry Project.

**Technologies:**
Python, Pandas, NLTK, Scikit-learn, TF-IDF, Naive Bayes, Logistic Regression and Streamlit.

The system performs text preprocessing and tokenization, extracts features using TF-IDF, and uses Machine Learning models to classify news as real or fake.

The final model was deployed as a real-time Streamlit web application.

**Accuracy:** Approximately 92%`;
  }

  if (
    query.includes("youtube") ||
    query.includes("trending video")
  ) {
    return `📊 **YouTube Trending Video Analytics**

A Data Analytics project using Python, Pandas and Power BI.

Niranjan analyzed YouTube trending video datasets, cleaned and preprocessed unstructured data using Pandas, and created an interactive Power BI dashboard to identify user engagement and category trends.`;
  }

  if (
    query.includes("gas") ||
    query.includes("iot") ||
    query.includes("leakage")
  ) {
    return `⚡ *IoT-Based Gas Leakage Detection System*

An IoT academic project built using Arduino Uno, MQ3 & MQ5 gas sensors, buzzer, LEDs and LCD display.

The system detects gas leakage in real time and activates automated sound and visual alerts.

🏆 The project secured **2nd Rank in class during the College IoT Festival / project exhibition**.`;
  }

  if (
    query.includes("education") ||
    query.includes("degree") ||
    query.includes("college") ||
    query.includes("study")
  ) {
    return `🎓 **Niranjan's Education**

**BCA – Data Science & Artificial Intelligence**
Yenepoya Institute of Arts, Science, Commerce and Management (YIASCM)
Yenepoya University
Bengaluru Campus
2023–2026
CGPA: 8.46

**Higher Secondary / +2 – Bio-Maths Science**
KMGVHSS, Tavanur
State Board, Government of Kerala
2021–2023

**SSLC / 10th Standard**
AVHSS, Ponnani
State Board, Government of Kerala
`;
  }

  if (
    query.includes("certification") ||
    query.includes("certificate")
  ) {
    return `📜 **Niranjan's Certifications**

- Google Advanced Data Analytics Professional Certificate – Coursera
- Microsoft Power BI Data Professional Certification – Coursera
- Introduction to Artificial Intelligence – Infosys SpringBoard
- Deep Learning Specialization – Illinois Institute of Technology
- Data Analysis with R – Duke University
- Certified AI Prompter – One Million AI Prompters Initiative, Dubai Future Foundation & Dubai Government`;
  }

  if (
    query.includes("contact") ||
    query.includes("hire") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("linkedin") ||
    query.includes("github")
  ) {
    return `📫 **Contact Niranjan**

📧 Email: ninjuniranjan007@gmail.com
📱 Phone: +91 7736203647
💼 LinkedIn: linkedin.com/in/niranjan-pp
💻 GitHub: github.com/niranjann007
📸 Instagram: @niranjann_._`;
  }

  return null;
};

  const handleChipClick = (question) => {
    sendMessage(question);
  };

  const sendMessage = async (userMessageText) => {
    const textToSend = (userMessageText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage = { sender: "user", text: textToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    // Step 1: Local-ൽ ഉത്തരമുണ്ടോ എന്ന് പരിശോധിക്കുന്നു
    const localMatch = getLocalResponse(textToSend);

    if (localMatch) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: localMatch }]);
        setIsLoading(false);
      }, 400);
      return;
    }

    // Step 2: Local-ൽ ഇല്ലെങ്കിൽ മാത്രം OpenRouter API വിളിക്കുന്നു
    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

      if (!apiKey) {
        throw new Error("API Key missing");
      }

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Niranjan Portfolio",
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            { role: "system", content: niranjanContext },
            ...updatedMessages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
          ],
        }),
      });

      const data = await response.json();
      const botReply = data?.choices?.[0]?.message?.content?.trim();

      if (botReply) {
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } else {
        throw new Error("No response from AI");
      }
    } catch (error) {
      console.error("AI Error:", error);
      // Fallback: എപിഐ എറർ വന്നാൽ തടസ്സമില്ലാതെ സാദാ മറുപടി നൽകും
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I am Niranjan's Portfolio Assistant. You can ask me directly about his **Skills**, **Projects**, **Education**, or **Contact details**!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-widget-container">
      {!isOpen && (
        <button className="ai-floating-btn" onClick={() => setIsOpen(true)}>
          <div className="ai-avatar-pulse"></div>
          <video className="ai-btn-video" 
          src={aiGlowVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          disablePictureInPicture
           />
          <span className="ai-btn-badge"><FaMagic /> Ask Me</span>
        </button>
      )}

      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="ai-header-info">
              <div className="ai-status-dot"></div>
              <div className="ai-header-video-wrapper">
                <video className="ai-header-video" 
                src={aiGlowVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                disablePictureInPicture
                 />
              </div>
              <div>
                <h4>Niranjan's Hybrid AI</h4>
                <span>Smart & Always Active</span>
              </div>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="ai-chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ai-message ${msg.sender}`}>
                <div className="ai-msg-bubble">
                  {msg.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="ai-message bot">
                <div className="ai-msg-bubble typing">Thinking...</div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <div className="ai-quick-chips">
            <button onClick={() => handleChipClick("What are Niranjan's core skills?")}>🛠️ Skills</button>
            <button onClick={() => handleChipClick("Tell me about the Fake News Detection project.")}>🤖 Fake News Project</button>
            <button onClick={() => handleChipClick("Tell me about Niranjan's education.")}>🎓 Education</button>
          </div>

          <div className="ai-chat-footer">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              disabled={isLoading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="ai-send-btn" onClick={() => sendMessage()} disabled={isLoading}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;