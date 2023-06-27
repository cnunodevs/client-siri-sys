import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token/token.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ModuloGuard implements CanActivateChild {

  constructor(
    private _tokenService: TokenService,
    private router: Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token: Usuario = this._tokenService.decodeToken();
    if (token.role == "ROLE_ADMINISTRADOR") {
      return true;
    }
    this.router.navigate(['/admin/dashboards'])
    return false;
  }

}