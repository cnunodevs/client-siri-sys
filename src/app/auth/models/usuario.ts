export interface Usuario {
    exp?: number;
    iat?: number;
    role?: 'ROLE_ADMINISTRADOR' | 'ROLE_APRENDIZ';
    sub?: string;
  }