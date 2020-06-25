import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  	items;
	checkoutForm;
	total;
	constructor(private formBuilder: FormBuilder) {
		this.checkoutForm = this.formBuilder.group({
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		telnumber: '',
		textarea: ''
		});
	}

	ngOnInit(): void {
	}

	onSubmit(customerData) {
		if (customerData.firstName !=='' && 
			customerData.lastName !=='' &&
			customerData.email !=='' &&
			customerData.address !=='' &&
			customerData.telnumber !=='' &&
			customerData.textarea !==''
			) {
			// Process checkout data here
			Swal.fire('Dear '+customerData.firstName, 'You just did it...:) !', 'success')
			this.checkoutForm.reset();
		}
		else {
			Swal.fire('Oops...', 'Please insert all your the data!', 'error')
		}	
	}

}
