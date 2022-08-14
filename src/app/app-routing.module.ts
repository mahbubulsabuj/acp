import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './components/answers/answers.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MapsComponent } from './components/maps/maps.component';
import { QuestionBuilderComponent } from './components/question-builder/question-builder.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
        children: [
          {
            path: 'question-builder',
            component: QuestionBuilderComponent,
            children: [{ path: 'create', component: CreateFormComponent }],
          },
          {
            path: 'users',
            component: UsersComponent,
            children: [{ path: 'create', component: CreateUserComponent }],
          },
          {path: 'answers', component: AnswersComponent},
          {path: 'maps', component: MapsComponent}
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
