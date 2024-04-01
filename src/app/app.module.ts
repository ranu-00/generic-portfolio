import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CompetencesComponent } from './competences/competences.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferncesComponent } from './refernces/refernces.component';
import { ContactmeComponent } from './contactme/contactme.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutMeComponent,
    CompetencesComponent,
    QualificationsComponent,
    PortfolioComponent,
    ReferncesComponent,
    ContactmeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
