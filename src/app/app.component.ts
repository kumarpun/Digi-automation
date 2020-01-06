import { Component, OnInit } from '@angular/core';
import { DigiiService } from './services/protractor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: any;

constructor(
  private service: DigiiService
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
}
