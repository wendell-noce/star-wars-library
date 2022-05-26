import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root',
})
export class TeacherService {
    constructor(
        private apiService: ApiService,
    ) {}

    getEvaluations(): Observable<any> {
        return this.apiService.get(
            'ge',
            `body`
        );
    }
    // FIM APIS MÍDIA PROFESSOR
}
