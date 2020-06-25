import { Component, OnInit } from '@angular/core';
import { places } from '../places';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
	
	places = places;

	constructor() { }

	ngOnInit(): void {
	}

}
