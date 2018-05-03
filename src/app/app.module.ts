import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { MatDatepickerModule,MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatRippleModule, MatTableModule, MatNativeDateModule, MatPaginator} from '@angular/material';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { AddChangeEmployeersComponent } from './add-change-employeers/add-change-employeers.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { PagentionComponent } from './pagention/pagention.component';
import {DataService} from './services/data.service';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AddChangeEmployeersComponent,
    EmployeeTableComponent,
    PagentionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatDatepickerModule,MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,NgbModule.forRoot(),
    NgbModule.forRoot()


  ],
  entryComponents: [
    AddChangeEmployeersComponent,
  ],
  providers: [  DataService,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
