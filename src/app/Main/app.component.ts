import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { setInjectorToastr } from '../Utils/create-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { BtnDarkThemeComponent } from '../shared/buttons/btn-dark-theme/btn-dark-theme.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    MatDialogModule,
    BtnDarkThemeComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular';

  // Se inyecta el servicio ToastrService en el constructor para poder usarlo en toda la aplicación
  constructor(private injector: Injector) {
    setInjectorToastr(this.injector);
  }
}
