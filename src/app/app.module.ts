import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { ThemeModule } from './services/theme/theme.module';

import { lightThemeACAS } from './services/theme/light-theme_ACAS';
import { darkThemeACAS } from './services/theme/dark-theme_ACAS';
import { lightThemeDAZ } from './services/theme/light_theme_DAZ';
import { darkThemeDAZ } from './services/theme/dark-theme_DAZ';

import { GLOBAL } from './services/global';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot({
      themes: [lightThemeACAS, darkThemeACAS, lightThemeDAZ, darkThemeDAZ],
      active: GLOBAL.skin + '_' + GLOBAL.cPropietario, // 'light_ACAS'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
