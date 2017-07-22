import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {UserComponent} from "./user/user.component";
import {RegisterComponent} from "./register/register.component";
import {EditComponent} from "./user/edit/edit.component";
import {StatsFullComponent} from "./user/stats-full/stats-full.component";
import {TipsFullComponent} from "./user/tips-full/tips-full.component";
import {AddTipComponent} from "./user/add-tip/add-tip.component";
import {TipDetailedComponent} from "./user/tip-detailed/tip-detailed.component";

const Routing: Routes = [
  { path: '', component: MainComponent},
  { path: 'user', component: UserComponent},
  { path: 'edit', component: EditComponent},
  { path: 'tips', component: TipsFullComponent},
  { path: 'stats', component: StatsFullComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'add', component: AddTipComponent },
  { path: 'detailed', component: TipDetailedComponent }
];

export const RoutingModule = RouterModule.forRoot(Routing);


