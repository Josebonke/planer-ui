import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
  ],
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule


  ],
  exports:[
    InputTextModule,
    PasswordModule,
    ButtonModule

  ],
  providers: [],

})
export class SharedModule { }
