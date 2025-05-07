'use client';

import { useState, useEffect, useRef } from 'react';
import chatbotConfig from './config';
import './ChatBot.css';

const ChatBot = () => {
  const [state, setState] = useState({
    chatHistory: [],
    userInput: '',
    chatOpen: false,
    hasGreeted: false,
    isTyping: false,
    currentStep: null,
  });

  const chatScrollRef = useRef(null);

  const { responses, greetMessage, options, keywordMap } = chatbotConfig;

  // Add message to chat history
  const addMessage = (sender, text) => {
    setState((prev) => ({
      ...prev,
      chatHistory: [...prev.chatHistory, { sender, text }],
    }));
  };

  // Handle user input and chatbot response
  const handleResponse = (input) => {
    const trimmedInput = input.toLowerCase().trim();
    let response;

    // 🔍 Function to find keyword in sentence
    const findKeywordMatch = () => {
      return Object.entries(keywordMap).find(([key, value]) => {
        const allKeywords = [key, ...(value.synonyms || [])];
        return allKeywords.some((word) => trimmedInput.includes(word));
      });
    };

    if (trimmedInput === 'menu') {
      setState((prev) => ({ ...prev, currentStep: null }));
      response = options; // Show the guide questions
    } else if (!state.currentStep) {
      // 🧠 Root-level keyword/response match
      const keywordMatch = findKeywordMatch();

      if (keywordMatch) {
        response = keywordMap[keywordMatch[0]].response;
        setState((prev) => ({ ...prev, currentStep: null }));
      } else {
        const foundResponse = responses.find((res) => res.key === trimmedInput);
        if (foundResponse) {
          setState((prev) => ({ ...prev, currentStep: foundResponse.key }));
          response = foundResponse.prompt;
        } else {
          response =
            keywordMap.default?.response ||
            'I didn’t understand that. Please try again.';
        }
      }
    } else {
      // 👣 Within a conversation step
      const currentResponse = responses.find(
        (res) => res.key === state.currentStep
      );
      if (currentResponse?.options?.[trimmedInput]) {
        const option = currentResponse.options[trimmedInput];
        if (typeof option === 'object' && option.prompt) {
          setState((prev) => ({ ...prev, currentStep: trimmedInput }));
          response = option.prompt;
        } else {
          response = option;
          setState((prev) => ({ ...prev, currentStep: null }));
        }
      } else {
        // 🧠 Fallback to keyword matching inside step
        const keywordMatch = findKeywordMatch();
        if (keywordMatch) {
          response = keywordMap[keywordMatch[0]].response;
          setState((prev) => ({ ...prev, currentStep: null }));
        } else {
          response = 'I didn’t understand that. Please try again.';
        }
      }
    }

    addMessage('Liora', response);
  };

  // Send user message
  const sendMessage = () => {
    const input = state.userInput.trim();
    if (!input) return;

    addMessage('User', input);
    setState((prev) => ({ ...prev, userInput: '', isTyping: true }));

    setTimeout(() => {
      handleResponse(input);
      setState((prev) => ({ ...prev, isTyping: false }));
    }, 800);
  };

  // Greet user when chat opens
  useEffect(() => {
    if (state.chatOpen && !state.hasGreeted) {
      setTimeout(() => {
        addMessage('Liora', greetMessage);

        addMessage('Liora', options); // Show guide questions
        setState((prev) => ({ ...prev, hasGreeted: true }));
      }, 500);
    }
  }, [state.chatOpen, state.hasGreeted]);

  // Auto-scroll to bottom when chat updates
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [state.chatHistory]);

  return (
    <>
      {!state.chatOpen && (
        <div
          className="chat-popup"
          onClick={() => setState((prev) => ({ ...prev, chatOpen: true }))}
        >
          Need help? Click me!
        </div>
      )}

      <button
        className="chat-toggle"
        onClick={() =>
          setState((prev) => ({ ...prev, chatOpen: !prev.chatOpen }))
        }
      >
        💬
      </button>

      <div className={`chat-container ${state.chatOpen ? 'open' : 'closed'}`}>
        <div className="chat-header">
          <h4>Liora 🟢</h4>
          <button
            className="close-btn"
            onClick={() => setState((prev) => ({ ...prev, chatOpen: false }))}
          >
            ×
          </button>
        </div>

        <div className="chat-box" ref={chatScrollRef}>
          {state.chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`message-row ${msg.sender === 'User' ? 'message-user' : 'message-bot'}`}
            >
              {msg.sender === 'Liora' && (
                <img
                  src="/images/logo/HD_logo.png"
                  className="avatar"
                  alt="Bot"
                />
              )}
              <p
                className="msg-text"
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
          ))}
          {state.isTyping && <p className="typing">Liora is typing...</p>}
        </div>

        <div className="chat-input">
          <input
            type="text"
            className="input-field"
            value={state.userInput}
            onChange={(e) =>
              setState((prev) => ({ ...prev, userInput: e.target.value }))
            }
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type here."
            aria-label="Chat input"
          />
          <button className="send-btn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
