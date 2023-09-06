import { CardModule } from 'primeng/card';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerLayoutModule } from '@congreso/ng-admin';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Page404Component } from './error-pages/page404/page404.component';
import { Page500Component } from './error-pages/page500/page500.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://keycloack-22-ebr-demo.apps.openshiftdesa.congreso.net/',
        realm: 'SpringBootKeycloak',
        clientId: 'login-sitva'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [AppComponent, Page404Component, Page500Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ManagerLayoutModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,
    CardModule,
    KeycloakAngularModule
  ],
  providers: [MessageService, ConfirmationService, {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
