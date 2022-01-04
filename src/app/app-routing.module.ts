import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { QuestsComponent } from './quests/quests.component';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainComponent } from './main/main.component';
import { RestorePasswordComponent } from './restore-password/restore-password.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'news', component: NewsComponent },
    { path: 'quests', component: QuestsComponent },
    { path: 'chats', component: ChatsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'restore-password', component: RestorePasswordComponent },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
