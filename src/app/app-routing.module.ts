import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlpathComponent } from './sqlpath/sqlpath.component';
import { HomeComponent } from './home/home.component';
import { SqloverviewComponent } from './sqloverview/sqloverview.component';
import { SqlcommandsComponent } from './sqlcommands/sqlcommands.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'sqlpath', component: SqlpathComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'sqlpath',
        component: SqlpathComponent,
        children: [
          { path: '', redirectTo: 'sqloverview', pathMatch: 'full' },
          { path: 'sqloverview', component: SqloverviewComponent },
          { path: 'sqlcommands', component: SqlcommandsComponent },
          // Add routes for other sections as needed
        ],
      },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{ useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
