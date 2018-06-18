import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BecomeACleanerComponent } from './become-a-cleaner/become-a-cleaner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog-main/blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BecomeACleanerModule} from "./become-a-cleaner/become-a-cleaner.module";
import {HomepageModule} from "./homepage/homepage.module";
import {ContactModule} from "./contact/contact.module";
import {BlogMainModule} from "./blog-main/blog-main.module";
import {BlogModule} from "./blog-main/blog/blog.module";
import {AboutModule} from "./about/about.module";
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ProfileComponent } from './workspace/profile/profile.component';
import { ContractsComponent } from './workspace/contracts/contracts.component';
import { ScheduleComponent } from './workspace/schedule/schedule.component';
import { MessagesComponent } from './workspace/messages/messages.component';
import {WorkspaceModule} from "./workspace/workspace.module";
import {CustomerProfileModule} from "./workspace/customer-profile/customer-profile.module";
import { ListingComponent } from './listing/listing.component';
import {ListingModule} from "./listing/listing.module";
import {NotFoundModule} from "./not-found/not-found.module";
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { ProfileCleanerComponent } from './profile-cleaner/profile-cleaner.component';
import {ProfileCleanerModule} from "./profile-cleaner/profile-cleaner.module";
import { CheckoutComponent } from './checkout/checkout.component';
import {CheckoutModule} from "./checkout/checkout.module";
import { MessageComponent } from './message/message.component';
import {MessageModule} from "./message/message.module";
import {FormsModule} from "@angular/forms";
import {AlertComponent} from "./_directives/alert.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AlertService} from "./_services/index";
import { MockBackend, MockConnection } from '@angular/http/testing';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HttpService} from "./_services/http.service";
import {UserService} from "./_services/user.service";
import {AuthService} from "./_services/auth.service";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ModalService} from "./_services/modal.service";


@NgModule({

  declarations: [
    AppComponent,
    HomepageComponent,
    BecomeACleanerComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    BlogMainComponent,
    LoginComponent,
    CreateComponent,
    ScrollTopComponent,
    WorkspaceComponent,
    ProfileComponent,
    ContractsComponent,
    ScheduleComponent,
    MessagesComponent,
    MessageComponent,
    ListingComponent,
    SearchEngineComponent,
    ProfileCleanerComponent,
    AlertComponent,
    CheckoutComponent
  ],

  imports: [
      BrowserAnimationsModule,
      BrowserModule,
      BlogMainModule,
      BlogModule,
      AboutModule,
      RouterModule,
      WorkspaceModule,
      AppRoutingModule,
      BecomeACleanerModule,
      HomepageModule,
      ContactModule,
      CheckoutModule,
      MessageModule,
      CustomerProfileModule,
      ProfileCleanerModule,
      ListingModule,
      NotFoundModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],

  providers: [
    AuthGuard,
    AlertService,
    AuthService,
    UserService,
    HttpService,
    HttpClient,
    ModalService,
    // providers used to create fake backend
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}