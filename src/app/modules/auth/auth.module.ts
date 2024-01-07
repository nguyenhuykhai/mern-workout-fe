import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from 'src/app/core/services';

@NgModule({
  imports: [AuthRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [AuthService]
})
export class AuthModule {}
