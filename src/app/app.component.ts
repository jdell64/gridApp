import {Component} from '@angular/core';
import {ProductsComponent} from './products/products.component';
import {CustomersComponent} from './customers/customers.component';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    // if the item was moved or resized
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    // if the main window was resized
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
      draggable: {
        enabled: true
        // draggable.dragHandleClass
        // draggable.ignoreContent
      },
      resizable: {
        enabled: true
      },
      displayGrid: 'none',
      minCols: 6,
      minRows: 6
    };

    this.dashboard = [
      // components = [ProductsComponent, CustomersComponent];
      {cols: 2, rows: 1, y: 0, x: 0, component: ProductsComponent},
      {cols: 2, rows: 2, y: 0, x: 2, component: CustomersComponent}
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }
}
