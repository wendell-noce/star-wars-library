import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root',
})
export class ProjetcService {
    constructor(
        private apiService: ApiService,
    ) {}

    getPokemons(): Observable<any> {
        return this.apiService.get( `pokemon/` );
    }
    // FIM APIS MÍDIA PROFESSOR
}
