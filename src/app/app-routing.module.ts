import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlpathComponent } from './sqlpath/sqlpath.component';
import { HomeComponent } from './home/home.component';
import { SqloverviewComponent } from './sqloverview/sqloverview.component';
import { SqlcommandsComponent } from './sqlcommands/sqlcommands.component';
import { PythonComponent } from './python/python.component';
import { NumpyComponent } from './numpy/numpy.component';
import { PandasComponent } from './pandas/pandas.component';
import { ScipyComponent } from './scipy/scipy.component';
import { MatplotlibComponent } from './matplotlib/matplotlib.component';
import { CufflinksComponent } from './cufflinks/cufflinks.component';
import { KMeansComponent } from './k-means/k-means.component';
import { GitComponent } from './git/git.component';

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

      { path: 'python', component: PythonComponent },
      { path: 'numpy', component: NumpyComponent },
      { path: 'pandas', component: PandasComponent },
      { path: 'scipy', component: ScipyComponent },
      { path: 'matplotlib', component: MatplotlibComponent },
      { path: 'cufflinks', component: CufflinksComponent },
      { path: 'kmeans', component: KMeansComponent },
      { path: 'git', component: GitComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{ useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
