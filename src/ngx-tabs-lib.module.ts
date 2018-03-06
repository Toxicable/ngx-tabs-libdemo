import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

import { Observable } from 'rxjs/Observable';
import {filter} from 'rxjs/operators';

const t = new Observable();
t.pipe(filter(a => true))

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent]
})
export class NgxTabsLibModule {}
