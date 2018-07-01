import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';
import { MydirectiveDirective } from './directives/mydirective.directive';
import { MypipePipe } from './pipes/mypipe.pipe';
import { PostspipePipe } from './pipes/postspipe.pipe';
import { DashbordComponent } from './home/container/dashbord/dashbord.component';
import { AjoutComponent } from './home/container/dashbord/ajout/ajout.component';
import { DetailComponent } from './home/container/dashbord/detail/detail.component';
import { PocComponent } from './home/container/dashbord/poc/poc.component';
import { LoginComponent } from './home/container/login/login.component';
import { InscriptionComponent } from './home/container/inscription/inscription.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
 //bech te5demli 3al application elkol
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

const AppRoute:Routes=[
{path:"",component:DashbordComponent},
{path:"ajout",component:AjoutComponent},
{path:"detail/:id",component:DetailComponent},
{path:"poc",component:PocComponent},
{path:"login",component:LoginComponent},
{path:"inscription",component:InscriptionComponent},
{path:"**",component:DashbordComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    MydirectiveDirective,
    MypipePipe,
    PostspipePipe,
    DashbordComponent,
    AjoutComponent,
    DetailComponent,
    PocComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
         TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })


  ],
  providers: [],
  bootstrap: [AppComponent]//anehi el component elli 9a3ed y3aytelha mellouwel
})
export class AppModule { }
