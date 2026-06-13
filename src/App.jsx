// Componente principal - App
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [input, setInput] = useState('');

  const generateIdea = () => {
    const newIdea = {
      id: Date.now(),
      title: input || 'Nueva idea',
      createdAt: new Date().toLocaleString()
    };
    setIdeas([...ideas, newIdea]);
    setInput('');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🐺 SOE - Hombres Lobo TikTok</h1>
        <p>Generador de Ideas para Videos</p>
      </header>

      <main className="container">
        <section className="input-section">
          <input
            type="text"
            placeholder="Tu idea de video..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && generateIdea()}
          />
          <button onClick={generateIdea}>Generar Idea</button>
        </section>

        <section className="ideas-list">
          <h2>Tus Ideas ({ideas.length})</h2>
          {ideas.length === 0 ? (
            <p className="empty">No hay ideas aún. ¡Crea una!</p>
          ) : (
            <ul>
              {ideas.map(idea => (
                <li key={idea.id}>
                  <div>
                    <h3>{idea.title}</h3>
                    <small>{idea.createdAt}</small>
                  </div>
                  <button 
                    onClick={() => setIdeas(ideas.filter(i => i.id !== idea.id))}
                    className="delete"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
