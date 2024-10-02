import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number; // Expiration time (Unix timestamp format)
  user_id: string;
}

export function isTokenValid(token: string): boolean {
  try {
    // Decodificar o token para obter o payload
    const decodedToken = jwtDecode<JwtPayload>(token);

    // Obter o timestamp atual (em segundos)
    const currentTime = Math.floor(Date.now() / 1000);

    // Verificar se o token expirou
    if (decodedToken.exp < currentTime) {
      return false; // Token expirado
    }

    return true; // Token ainda é válido
  } catch (error) {
    console.error("Token inválido ou erro ao decodificar:", error);
    return false; // Token inválido
  }
}
