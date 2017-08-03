import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'page1',
                component: Page1Component
            }
        ])
    ],
    exports: [RouterModule]
})
export class Page1RoutingModule { }
