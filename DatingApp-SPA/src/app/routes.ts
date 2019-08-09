import { AuthGuard } from './_guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';


export const appRoutes:Routes =[
    {path:'home',component: HomeComponent},
    {path:'members',component: MemberListComponent, canActivate:[AuthGuard]},
    {path:'message',component: MessagesComponent},
    {path:'lists',component: ListsComponent},
    {path:'**', redirectTo:'home', pathMatch:'full' },
];