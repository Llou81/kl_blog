import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { RoutingModule } from "./routing.module";
import { RegisterComponent } from './register/register.component';
import { InfoComponent } from './user/info/info.component';
import { StatsComponent } from './user/stats/stats.component';
import { TipsComponent } from './user/tips/tips.component';
import { EditComponent } from './user/edit/edit.component';
import { StatsFullComponent } from './user/stats-full/stats-full.component';
import { TipsFullComponent } from './user/tips-full/tips-full.component';
import { AddTipComponent } from './user/add-tip/add-tip.component';
import { TipDetailedComponent } from './user/tip-detailed/tip-detailed.component';
import {TipService} from "./services/tip.service";
import {RequestsService} from "./services/requests.service";
import {UserService} from "./services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    UserComponent,
    RegisterComponent,
    InfoComponent,
    StatsComponent,
    TipsComponent,
    EditComponent,
    StatsFullComponent,
    TipsFullComponent,
    AddTipComponent,
    TipDetailedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [TipService, RequestsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
