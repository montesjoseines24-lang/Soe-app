// Utilidad para generar ideas
// Genera 100+ ideas automáticamente

export const ideasTemplates = [
  // Hombres Lobo - Terror
  "¿Qué pasaría si los hombres lobo fuesen reales?",
  "5 datos escalofriantes del hombre lobo",
  "Mitología vs Realidad - Hombres Lobo",
  "El último avistamiento de hombre lobo",
  
  // Hombres Lobo - Drama
  "Confesión: Yo soy un hombre lobo",
  "Mi vecino es un hombre lobo",
  "El secreto oscuro de mi pueblo",
  
  // Hombres Lobo - Comedia
  "Entrevista a un hombre lobo moderno",
  "Problemas de ser hombre lobo en 2024",
  "Waiter, hay un hombre lobo aquí",
  
  // Trending + Hombres Lobo
  "Hombre lobo acepta un reto",
  "Transformación hombre lobo en 60 segundos",
  "Cazador de hombres lobo revela secretos",
];

export function generateRandomIdeas(count = 10) {
  const shuffled = [...ideasTemplates]
    .sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateCustomIdea(category, tone) {
  const categories = {
    terror: ["escalofriante", "aterrador", "paranormal"],
    drama: ["emocional", "trágico", "revelador"],
    comedia: ["cómico", "absurdo", "divertido"],
  };
  
  return `Crea un video ${tone} sobre hombres lobo que sea ${categories[category]?.[0] || 'interesante'}`;
}
