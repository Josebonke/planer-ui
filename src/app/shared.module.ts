import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';

@NgModule({
  declarations: [
  ],
  imports: [
    InputTextModule,
    ButtonModule

  ],
  exports:[
    InputTextModule,
    ButtonModule],
  providers: [],

})
export class SharedModule { }
