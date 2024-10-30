
import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FotosComponent } from './index/fotos/fotos.component';


export const routes: Routes = [
{
  path: '',
  component: IndexComponent
},

{
  path: 'fotos/:raca',
  component: FotosComponent

}

];
