import { Component, OnInit, Inject } from '@angular/core';
import { DigiiService } from '../services/protractor.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data: any;

constructor(
  private service: DigiiService,
  public router: Router,
  @Inject(DOCUMENT) private document: Document,
  public snackbar: MatSnackBar,

) {

 
 }
ngOnInit() {
}

onSubmit() {
  return this.service.RunTest()
  .subscribe(res => {
    console.log(res);
    this.snackbar.open('Test pass successfully', 'Close', {
      duration: 3000
    })
  }, error => {
    this.snackbar.open('Test failed', 'Close', {
      duration: 3000
    })
  })
}

testReport(){
  this.document.location.href = 'http://52.62.45.84/ProtractorTestReport.html';
}
}
