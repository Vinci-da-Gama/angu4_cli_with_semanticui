import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page2Component } from './page2.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'page2',
                component: Page2Component
            }
        ])
    ],
    exports: [RouterModule]
})
export class Page2RoutingModule { }
