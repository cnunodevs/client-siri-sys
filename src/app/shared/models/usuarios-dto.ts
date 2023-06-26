export interface UsusarioDTO {
    id?: number | string;
    username: string;
    password: string;
    authority: 'ROLE_ADMINISTRADOR' | 'ROLE_SUPERVISOR' | 'ROLE_USUARIO';
    enabled?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
    accountNonExpired?: boolean;
    fechaCreacion?: string;
    ultimaActualizacion?: string;
}
