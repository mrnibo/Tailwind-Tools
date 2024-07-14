export const generateTailwindBoxShadow = (
  hOffset: number,
  vOffset: number,
  blur: number,
  spread: number,
  color: string,
  inset: boolean
): string => {
  const colorWithOpacity = color + (Math.round(0.57 * 255)).toString(16).padStart(2, '0'); // Assuming 57% opacity
  return `shadow-[${inset ? 'inset-' : ''}${hOffset}px_${vOffset}px_${blur}px_${spread}px_${colorWithOpacity}]`;
};

export const generateVanillaBoxShadow = (
  hOffset: number,
  vOffset: number,
  blur: number,
  spread: number,
  color: string,
  inset: boolean
): string => {
  return `${inset ? 'inset ' : ''}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;
};