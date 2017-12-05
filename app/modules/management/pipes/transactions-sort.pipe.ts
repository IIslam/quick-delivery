import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'SortByDate'
})

export class transactionSortByDatePipe implements PipeTransform {
    transform(items: any[], sortAscending: boolean): any[] {
        return items.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            let aDate = new Date(a.createdOn);
            let bDate = new Date(b.createdOn);
            if (aDate > bDate)
                return -1;
            else if (aDate < bDate)
                return 1;
            else
                return 0;
        });

    }
}