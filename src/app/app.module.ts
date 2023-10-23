import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SqlpathComponent } from './sqlpath/sqlpath.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SqloverviewComponent } from './sqloverview/sqloverview.component';
import { SqlcommandsComponent } from './sqlcommands/sqlcommands.component';
import { DqlComponent } from './dql/dql.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { NullComponent } from './null/null.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { JoinsComponent } from './joins/joins.component';
import { MathFunctionsComponent } from './math-functions/math-functions.component';
import { StringComponent } from './string/string.component';
import { DatesComponent } from './dates/dates.component';
import { RankingComponent } from './ranking/ranking.component';
import { TclComponent } from './tcl/tcl.component';
import { CaseStatementComponent } from './case-statement/case-statement.component';
import { IfWhileComponent } from './if-while/if-while.component';
import { UserDefinedFunctionsComponent } from './user-defined-functions/user-defined-functions.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { FormsModule } from '@angular/forms';
import { PythonComponent } from './python/python.component';
import { NumpyComponent } from './numpy/numpy.component';
import { PandasComponent } from './pandas/pandas.component';
import { ScipyComponent } from './scipy/scipy.component';
import { MatplotlibComponent } from './matplotlib/matplotlib.component';
import { CufflinksComponent } from './cufflinks/cufflinks.component';
import { KMeansComponent } from './k-means/k-means.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SqlpathComponent,
    SqloverviewComponent,
    SqlcommandsComponent,
    DqlComponent,
    DataTypesComponent,
    NullComponent,
    ConstraintsComponent,
    JoinsComponent,
    MathFunctionsComponent,
    StringComponent,
    DatesComponent,
    RankingComponent,
    TclComponent,
    CaseStatementComponent,
    IfWhileComponent,
    UserDefinedFunctionsComponent,
    ProceduresComponent,
    PythonComponent,
    NumpyComponent,
    PandasComponent,
    ScipyComponent,
    MatplotlibComponent,
    CufflinksComponent,
    KMeansComponent,
    GitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
