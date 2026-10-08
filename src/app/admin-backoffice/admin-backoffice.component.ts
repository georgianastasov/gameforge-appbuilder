import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerOrderType } from '../models/customer-order/customer-order-type';
import { HardwareComponentType } from '../models/hardware-component/hardware-component-type';
import { StoreInventoryType } from '../models/store-inventory/store-inventory-type';
import { CustomerOrderService } from '../services/customer-order.service';
import { HardwareComponentService } from '../services/hardware-component.service';
import { StoreInventoryService } from '../services/store-inventory.service';

@Component({
  selector: 'app-admin-backoffice',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxSnackbarComponent, FormsModule],
  templateUrl: './admin-backoffice.component.html',
  styleUrls: ['./admin-backoffice.component.scss']
})
export class AdminBackofficeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public value4 = 0;
  public value5 = 0;
  public value6?: string;
  public value7 = 0;
  public value8 = 0;
  public value9 = 0;
  public customerOrderCustomerOrder: CustomerOrderType[] = [];
  public hardwareComponentHardwareComponent: HardwareComponentType[] = [];
  public storeInventoryStoreInventory: StoreInventoryType[] = [];

  constructor(
    public customerOrderService: CustomerOrderService,
    public hardwareComponentService: HardwareComponentService,
    public storeInventoryService: StoreInventoryService,
  ) {}


  ngOnInit() {
    this.customerOrderService.getCustomerOrder().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.customerOrderCustomerOrder = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.hardwareComponentService.getHardwareComponent().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.hardwareComponentHardwareComponent = data;
        this.changeDetectorRef.markForCheck();
      }
    );
    this.storeInventoryService.getStoreInventory().pipe(takeUntil(this.destroy$)).subscribe(
      data => {
        this.storeInventoryStoreInventory = data;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
