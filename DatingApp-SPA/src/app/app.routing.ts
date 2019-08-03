import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { Routes, RouterModule } from '@angular/router';

//const routes: Routes = [
  //{  },
//];
const routesConfig: Routes = [
  { path: '//value.component.html',     component: ValueComponent}
  ]

//export const MyRouteRoutes = RouterModule.forChild(routes);
export const MyRouteRoutes = RouterModule.forChild(routesConfig);

