import { CanActivateFn } from '@angular/router';
import {SecuriteService} from "../services/securite.service";
import {inject} from "@angular/core";

export const IS_LOGGED: CanActivateFn = (route, state) => {
  const securiteService = inject(SecuriteService)

  return securiteService.userConnected.value!== null;
};
