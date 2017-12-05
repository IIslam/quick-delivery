import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
    selector: '[minlength]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }]

})

export class MinLengthDirective implements Validator {
    @Input() minlength: string;
    constructor() { }

    public validate(c: AbstractControl): { [key: string]: any; } {
        return !c.value || c.value.length >= this.minlength ? null : { "minlength": true };

    }


}

@Directive({
    selector: '[mobile]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IsMobileDirective, multi: true }]

})
export class IsMobileDirective implements Validator {
    constructor() { }

    validate(c: AbstractControl): { [key: string]: any; } {
        let mobRegEX = /^(01)[0-9]{8}/;
        let valid = mobRegEX.test(c.value);
        return c.value < 1 || valid ? null : { 'mobile': true };
    }

}