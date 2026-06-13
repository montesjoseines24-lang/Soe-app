// Almacenamiento en localStorage
// Guarda y recupera datos persistentemente

export const storage = {
  // Guardar datos
  save: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error('Error saving:', err);
      return false;
    }
  },

  // Obtener datos
  get: (key, defaultValue = null) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (err) {
      console.error('Error getting:', err);
      return defaultValue;
    }
  },

  // Eliminar datos
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.error('Error removing:', err);
      return false;
    }
  },

  // Limpiar todo
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (err) {
      console.error('Error clearing:', err);
      return false;
    }
  },

  // Obtener todas las claves
  keys: () => {
    return Object.keys(localStorage);
  },
};

// Guardar idea
export const saveIdea = (idea) => {
  const ideas = storage.get('ideas', []);
  ideas.push({ ...idea, id: Date.now() });
  storage.save('ideas', ideas);
};

// Obtener todas las ideas
export const getIdeas = () => {
  return storage.get('ideas', []);
};

// Eliminar idea
export const deleteIdea = (id) => {
  const ideas = storage.get('ideas', []);
  const filtered = ideas.filter(i => i.id !== id);
  storage.save('ideas', filtered);
};
