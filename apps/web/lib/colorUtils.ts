export const CATEGORY_COLORS = [
  '#ff5c5c', // Bright Red
  '#ffbd44', // Bright Orange
  '#ffdb3b', // Bright Yellow
  '#89ff00', // Lime Green
  '#3498db', // Pure Blue
  '#ff00ff', // Hot Pink
  '#9d50bb', // Electric Purple
  '#00d2ff', // Cyan/Aqua
  '#f39c12', // Deep Orange
  '#2ecc71', // Emerald
  '#ff7f50', // Coral
  '#9b59b6', // Amethyst
  '#1abc9c', // Turqoise
  '#34495e', // Wet Asphalt (Dark)
  '#f1c40f', // Sunflower
  '#e74c3c', // Alizarin
];

export function getCategoryColor(name: string): string {
  if (!name) return '#ffffff';
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % CATEGORY_COLORS.length;
  return CATEGORY_COLORS[index];
}
