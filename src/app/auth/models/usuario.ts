export interface Usuario {
    exp?: number;
    iat?: number;
    role?: 'ROLE_ADMINISTRADOR' | 'ROLE_SUPERVISOR' | 'ROLE_USUARIO';
    sub?: string;
  }