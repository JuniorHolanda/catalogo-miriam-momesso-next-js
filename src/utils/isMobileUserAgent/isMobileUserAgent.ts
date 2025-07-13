export function isMobileUserAgent(userAgent: string): boolean {
  if (!userAgent) return false;

  // Expressões comuns encontradas em user-agents de dispositivos móveis
  return /mobile|android|iphone|ipad|ipod|phone/i.test(userAgent);
}