import { Component, OnInit, Inject } from '@angular/core';
import { DigiiService } from './services/protractor.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: any;

constructor(
  private service: DigiiService,
  public router: Router,
  @Inject(DOCUMENT) private document: Document
) { }
ngOnInit() {
}

onSubmit() {
  return this.service.RunTest()
  .subscribe(res => {
    console.log(res);
    alert('SUCCESS !!');
  })
}

testReport(){
  this.document.location.href = 'http://52.62.45.84/ProtractorTestReport.html';
}
}
