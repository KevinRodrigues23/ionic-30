import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../tab2/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { CollectComponent } from './collect/collect.component';
import { CollectComponentModule } from './collect/collect.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Tab3Page],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    CollectComponentModule,
  ],
})
export class Tab3PageModule {}
