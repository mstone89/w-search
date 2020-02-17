import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
    url: string = 'https://en.wikipedia.org/w/api.php';

  constructor() { }
}
