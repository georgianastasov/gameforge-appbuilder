import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { AdminBackofficeComponent } from './admin-backoffice.component';

describe('AdminBackofficeComponent', () => {
  let component: AdminBackofficeComponent;
  let fixture: ComponentFixture<AdminBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBackofficeComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxSnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
