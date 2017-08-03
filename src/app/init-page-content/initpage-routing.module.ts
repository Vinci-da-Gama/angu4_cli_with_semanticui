import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InitPageContentComponent } from './init-page-content.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: InitPageContentComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class InitPageRoutingModule { }
