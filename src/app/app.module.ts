import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FornecedorService } from 'src/service/FornecedorService';
import { FuncionarioService } from 'src/service/FuncionarioService';
import { LoginService } from 'src/service/LoginService';
import { ProdutoService } from 'src/service/ProdutoService';
import { ErrosGlobais } from 'src/shared/ErrosGlobais';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from 'src/service/GlobalService';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FornecedorService,
    FuncionarioService,
    LoginService,
    GlobalService,
    ProdutoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ErrorHandler, useClass: ErrosGlobais}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
