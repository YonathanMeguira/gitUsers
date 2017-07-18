/**
 * Created by if_found_call_0586288454 on 12/07/2017 ap. J.-C..
 */
/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
