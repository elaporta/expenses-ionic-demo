import { Component, OnInit } from '@angular/core';

import { Expense } from '../../interfaces/expense';
import { ExpenseService } from '../../services/expense.service';

import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	expense: Expense;
	darkMode: boolean;

	constructor(
		private expenseService: ExpenseService,
		private themeService: ThemeService
	){}

	ngOnInit(){
		this.expense = this.expenseService.getDefaultExpense();
		this.darkMode = this.themeService.darkMode;
	}

	setDefaultExpense(){
		this.expenseService.setDefaultExpense(this.expense);
	}

	setDarkMode(option: boolean){
		if(option){
			this.themeService.setDarkMode(true);
		}
		else{
			this.themeService.setDarkMode(false);
		}
	}
}
