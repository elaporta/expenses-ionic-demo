import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../interfaces/expense';

@Component({
	selector: 'app-list',
	templateUrl: './list.page.html',
	styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	expenses: Expense[] = [];
	totalAmount: number = 0;

	constructor(
		private expenseService: ExpenseService
	){}

	ngOnInit(){}

	ionViewWillEnter(){
		this.getExpenses();
	}

	private getExpenses(){
		this.totalAmount = 0;
		this.expenses = this.expenseService.getExpenses();

		for(let expense of this.expenses){
			this.totalAmount += expense.amount;
		}
	}
}
