import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    setLoading(true);
    const res = await fetch(import.meta.env.VITE_API_URL + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, { role: 'user', content: input }, { role: 'vicking', content: data.reply }]);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        ⚔️ VICKING AI
      </h1>
      <div className="w-full max-w-lg bg-white shadow-md rounded p-4">
        <div className="h-80 overflow-y-auto border p-2 mb-4">
          {messages.map((msg, i) => (
            <p key={i} className={msg.role === 'user' ? 'text-blue-600' : 'text-green-600'}>
              <b>{msg.role}:</b> {msg.content}
            </p>
          ))}
          {loading && <p className="text-gray-500">VICKING is thinking...</p>}
        </div>
        <div className="flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border p-2 rounded-l"
            placeholder="Ask VICKING..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;