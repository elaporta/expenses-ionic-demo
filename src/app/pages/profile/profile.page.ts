import { Component, OnInit } from '@angular/core';

import { Expense } from '../../interfaces/expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	expense: Expense;

	constructor(
		private expenseService: ExpenseService
	){}

	ngOnInit(){
		this.expense = this.expenseService.getDefaultExpense();
	}

	setDefaultExpense(){
		this.expenseService.setDefaultExpense(this.expense);
	}
}
