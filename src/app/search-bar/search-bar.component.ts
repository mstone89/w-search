import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    term: string = '';

    @Output() submitted = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onFormSubmit(event: any) {
        event.preventDefault();
        this.submitted.emit(this.term);
    }

}