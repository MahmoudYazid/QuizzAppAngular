import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizBodyComponent } from './quiz-body/quiz-body.component';
import { QuizBoxComponent } from './quiz-box/quiz-box.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizBodyComponent,
    QuizBoxComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
