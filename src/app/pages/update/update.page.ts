import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { CATEGORIES } from '../../defines/categories';
import { Expense } from '../../interfaces/expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
	selector: 'app-update',
	templateUrl: './update.page.html',
	styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

	categories = CATEGORIES;
	expense: Expense;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alertController: AlertController,
		private expenseService: ExpenseService
	){}

	ngOnInit(){
		this.activatedRoute.paramMap.subscribe(params => {
			if(!params.has('expenseId')){
				this.router.navigate(['/expenses']);
			}
			else{
				const id = +params.get('expenseId');
				this.expense = this.expenseService.getExpense(id);

				if(this.isEmptyObject(this.expense)){
					this.router.navigate(['/expenses']);
				}
			}
		});
	}

	// Return true if obj is empty
    private isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }

	async updateExpense(){
		const updateAlert = await this.alertController.create({
			header: 'Success',
			message: 'You just updated a the expense!',
			buttons: ['OK']
		});

		await updateAlert.present();
		this.expenseService.updateExpense(this.expense);
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

	async deleteExpense(){
		const deleteAlert = await this.alertController.create({
			header: 'Are you sure?',
			message: 'Do you really want to delete the expense?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Delete',
					handler: () => {
						this.expenseService.deleteExpense(this.expense.id);
						this.router.navigate(['/expenses']);
					}
				}
			]
		});

		await deleteAlert.present();
	}
}
