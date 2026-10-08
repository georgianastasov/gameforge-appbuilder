import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxSnackbarComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-admin-login',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxBadgeComponent, IgxCheckboxComponent, IgxButtonDirective, IgxSnackbarComponent, FormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  public value?: string;
  public value1?: string;
  public checked = true;
}
