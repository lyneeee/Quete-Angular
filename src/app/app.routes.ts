import { Routes } from '@angular/router';
import{SignUpComponent} from './sign-up/sign-up.component';
import{UserProfileComponent} from './user-profile/user-profile.component';


const ROUTES: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: '', component: UserProfileComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

export { ROUTES };