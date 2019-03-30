import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { ErrorModule } from '../error/error.module';
import { ProfileComponent } from './containers/profile/profile.component';
import { FileUploadComponent } from './containers/file-upload/file-upload.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent, FileUploadComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  exports: [LoginComponent, RegisterComponent, ProfileComponent, FileUploadComponent]
})
export class AuthModule {}
