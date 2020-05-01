import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { CATEGORIES } from '../../defines/categories';
import { Expense } from '../../interfaces/expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.page.html',
	styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

	categories = CATEGORIES;
	expense: Expense;

	constructor(
		private router: Router,
		private alertController: AlertController,
		private expenseService: ExpenseService
	){}

	ngOnInit(){
		this.expense = this.expenseService.getDefaultExpense();
	}

	async addExpense(){
		const alert = await this.alertController.create({
			header: 'Success',
			message: 'You just registered a new entry!',
			buttons: ['OK']
		});

		await alert.present();

		this.expenseService.createExpense(this.expense);
		this.router.navigate(['/expenses']);
	}

	clearExpense(){
		this.expense = {
			description: null,
			category: null,
			responsable: null,
			payment_method: null,
			amount: null
		};
	}

}
