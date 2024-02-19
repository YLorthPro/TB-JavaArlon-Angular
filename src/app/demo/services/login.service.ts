import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class LoginService {
 	private users: User[] = [
		new User('Geoffrey', 'Euuuuuh', 'B')
	];

	connectedUser?: User;

  constructor() { }

	connect(login:string, password: string) {
		// On vérifie si le login reçu est présent en DB
		this.connectedUser = this.users.find((user) => user.login === login);

		if (this.connectedUser) {
			// Si on l'a trouvé, si le password n'est pas ok
			if (this.connectedUser.password !== password) {
				this.connectedUser = undefined;
			}
		}
	}

	disconnect() {
		this.connectedUser = undefined;
	}
}
