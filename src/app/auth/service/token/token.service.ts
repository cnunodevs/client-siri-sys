import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token!: string | null;

  constructor() { }

  /**
   *
   * @returns
      El método getToken() devuelve el valor de la propiedad token si existe, de lo contrario, se obtiene el token del almacenamiento de sesión.
   */
  getToken(): string | null {
    return this.token! || localStorage.getItem('token');
  }

  setToken(token: Token): void {
    this.token = token.token;
    localStorage.setItem('token', this.token);
  }

  clearToken(): void {
    this.token = null;
    localStorage.removeItem('token');
  }
  decodeToken(): Token | any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token)
    }else{
      //
    }
  }
}
