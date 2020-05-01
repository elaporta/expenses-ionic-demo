import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense';

@Injectable({
	providedIn: 'root'
})
export class ExpenseService {

	private expenses: Expense[] = [
		{ id: 1, date: '2019-11-01', description: 'Almacen', category: 'Alimentos diarios', responsable: 'john', payment_method: 'debit', amount: 158 },
		{ id: 2, date: '2019-11-02', description: 'Baño negrito', category: 'Veterinaria', responsable: 'john', payment_method: 'debit', amount: 350 }
	];

	private defaultExpense: Expense = { description: null, category: null, responsable: null, payment_method: null, amount: null };

	constructor(){}

	getExpenses(){
		return [...this.expenses];
	}

	getExpense(id: number){
		return {
			...this.expenses.find(expense => {
				return expense.id == id;
			})
		};
	}

	createExpense(expense: Expense){
		expense.id = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100

		let date = new Date();
		let mm = date.getMonth() + 1;
		let dd = date.getDate();
		expense.date = date.getFullYear() + '-' + (mm > 9 ? '' : '0') + mm + '-' + (dd > 9 ? '' : '0') + dd;

		this.expenses.push(expense);
	}

	updateExpense(expense: Expense){
		for(let [index, value] of this.expenses.entries()){
			if(value.id == expense.id){
				this.expenses[index] = expense;
				break;
			}
		}
	}

	deleteExpense(id: number){
		this.expenses = this.expenses.filter(expense => {
			return expense.id !== id
		});
	}

	getDefaultExpense(){
		return {
			...this.defaultExpense
		};
	}

	setDefaultExpense(expense: Expense){
		this.defaultExpense = expense;
	}
}