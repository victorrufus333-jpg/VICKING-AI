import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are VICKING, a helpful AI assistant.' }, { role: 'user', content: message }]
      })
    });
    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Error processing request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚔️ VICKING API running on port ${PORT}`));