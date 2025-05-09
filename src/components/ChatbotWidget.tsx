import React, { useState, useRef, useEffect } from 'react';

const initialMessages = [
  { from: 'bot', text: 'Hi! 👋 How can I help you with your rental needs today?' },
  { from: 'bot', text: 'Looking to rent a car or equipment? Ask me anything!' },
];

const exampleReplies = [
  'What vehicles are available?',
  'How do I make a reservation?',
  'What are your rental rates?',
  'Can I get support with my booking?',
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: 'bot', text: "Thank you for your message! We'll get back to you soon." },
      ]);
    }, 800);
    setInput('');
  };

  return (
    <>
      {/* Floating Chatbot Icon */}
      <div
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          width: 64,
          height: 64,
          background: 'linear-gradient(135deg, #d32f2f 60%, #ff5252 100%)',
          borderRadius: '50%',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          display: open ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        title="Chat with us!"
      >
        {/* Simple SVG Bot Icon */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <rect x="7" y="10" width="10" height="6" rx="3" fill="#d32f2f" />
          <circle cx="9" cy="13" r="1" fill="#fff" />
          <circle cx="15" cy="13" r="1" fill="#fff" />
          <rect x="11" y="7" width="2" height="3" rx="1" fill="#d32f2f" />
        </svg>
      </div>

      {/* Chatbot Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 110,
            right: 32,
            width: 350,
            maxWidth: '90vw',
            height: 500,
            background: '#fff',
            borderRadius: 18,
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #d32f2f 60%, #ff5252 100%)',
            color: '#fff',
            padding: '18px 20px',
            fontWeight: 700,
            fontSize: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span>Chatbot Assistant</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: 28,
                cursor: 'pointer',
                lineHeight: 1,
              }}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 16,
              background: '#f9f9f9',
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: 16,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  margin: '10px 0',
                  textAlign: msg.from === 'user' ? 'right' : 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    background: msg.from === 'user' ? '#d32f2f' : '#fff',
                    color: msg.from === 'user' ? '#fff' : '#d32f2f',
                    borderRadius: 16,
                    padding: '10px 18px',
                    maxWidth: '80%',
                    boxShadow: msg.from === 'user' ? '0 2px 8px rgba(211,47,47,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div style={{
            display: 'flex',
            borderTop: '1px solid #eee',
            padding: 10,
            background: '#fff',
          }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              placeholder="Enter your message"
              style={{
                flex: 1,
                border: 'none',
                padding: 10,
                fontSize: 16,
                outline: 'none',
                borderRadius: 8,
                background: '#f5f5f5',
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: 'linear-gradient(135deg, #d32f2f 60%, #ff5252 100%)',
                color: '#fff',
                border: 'none',
                padding: '0 18px',
                marginLeft: 8,
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
              }}
            >
              ▶
            </button>
          </div>
          {/* Example quick replies */}
          <div style={{
            background: '#f5f5f5',
            padding: '8px 12px',
            borderTop: '1px solid #eee',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
          }}>
            {exampleReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => setInput(reply)}
                style={{
                  background: '#fff',
                  color: '#d32f2f',
                  border: '1px solid #d32f2f',
                  borderRadius: 16,
                  padding: '6px 14px',
                  fontSize: 14,
                  cursor: 'pointer',
                  marginBottom: 4,
                }}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
} 