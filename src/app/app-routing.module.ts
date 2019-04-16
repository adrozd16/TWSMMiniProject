import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { CharacterConfiguratorComponent } from './components/character-configurator/character-configurator.component';
import { UserCharactersComponent } from './components/user-characters/user-characters.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addcharacter', canActivate: [AuthGuard], component: CharacterConfiguratorComponent},
  { path: 'mycharacters', canActivate: [AuthGuard], component: UserCharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
