export interface Expense {
	id?: number;
	date?: string;
	description: string;
	category: string;
	responsable: 'john' | 'doe';
	payment_method: 'debit' | 'credit';
	amount: number;
}