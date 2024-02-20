import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {InscriptionService} from "../services/inscription.service";

export const CONNECTED_GUARD: CanActivateFn = (route, state) => {
  const inscriptionService = inject(InscriptionService);
  const router = inject(Router);

  if (inscriptionService.connectedUser?.prenom !== route.params['prenom']) {
    alert("Pas autorisé")
    router.navigate(['exercice/forms'])
  }

  return true;
};
