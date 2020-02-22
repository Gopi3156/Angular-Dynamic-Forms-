import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.scss']
})
export class InitialFormComponent implements OnInit {

  public initVal: string;

  constructor() {
    this.initVal = 'Value from TS File';
  }

  ngOnInit(): void {
  }

  public onSubmit(event) {
    /* Here name is the input element id so we use name here. */
    this.initVal = event.target.name.value;
    // the value is set here but the form is getting refreshed immediately and updating the original value.
    // need to solve this
    event.preventDefault();
    // we need event.preventDefault to not refresh the page. this is mainly used to cancel any of the event
    // 2nd way is calling return false in the html
    //onsubmit="yourJsFunction();return false" this should be on the html. first we can call our function
    // i think 99% if the first function is asynchronous it wont wait it will trigger the return false immediately
    // but anyway this is the second way
  }

}
