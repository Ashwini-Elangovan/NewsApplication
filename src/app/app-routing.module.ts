import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"news/business", component:BusinessComponent},
  {path:"news/entertainment", component:EntertainmentComponent},
  {path:"news/general", component:GeneralComponent},
  {path:"news/health", component:HealthComponent},
  {path:"news/science", component:ScienceComponent},
  {path:"news/sports", component:SportsComponent},
  {path:"news/technology", component:TechnologyComponent},
  {path:"news/article", component: ArticleComponent},
  {path:"news/home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
