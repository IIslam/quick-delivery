import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transactionType'
})

export class TransactionTypePipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 0:
                return 'Credit';
            case 1:
                return 'Debit';
            default:
                return 'None';
        }
    }
}