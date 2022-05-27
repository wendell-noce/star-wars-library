import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      CardPokemonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatRippleModule,
        MatButtonModule
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      CardPokemonComponent
    ],
})
export class SharedModule {}
