import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CharacterConfiguratorComponent } from './components/character-configurator/character-configurator.component';
import { UserCharactersComponent } from './components/user-characters/user-characters.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'addcharacter', canActivate: [AuthGuard], component: CharacterConfiguratorComponent},
  { path: 'mycharacters', canActivate: [AuthGuard], component: UserCharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
