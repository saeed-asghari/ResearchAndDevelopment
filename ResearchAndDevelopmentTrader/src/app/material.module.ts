import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatButtonModule} from '@angular/material/button'; 
import { MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports:[MatToolbarModule, MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatMenuModule],
    exports:[MatToolbarModule, MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,MatMenuModule]
})
export class Material{}