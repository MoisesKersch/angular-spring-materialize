import { AbstractControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

export class Validator {
    tempt: any;

    constructor(private userService: UserService) {

    }

    isUserName(control: string): any 
    {
        this.userService.isValidUsername('orthonn').subscribe( (param) => param );
    }

    isCpf(control: AbstractControl): { [key: string]: any } | null
    {
        const cpf = control.value;
        if (cpf) {
            let Soma;
            let Resto;
            Soma = 0;

            if (cpf === '00000000000') {
                return { cpfNotValid: true };
            }

            for (let i = 1; i <= 9; i++) {
                Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            Resto = (Soma * 10) % 11;

            if ((Resto === 10) || (Resto === 11)) {
                Resto = 0;
            }

            if (Resto !== parseInt(cpf.substring(9, 10))) {
                return { cpfNotValid: true };
            }

            Soma = 0;
            for (let i = 1; i <= 10; i++) {
                Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            Resto = (Soma * 10) % 11;

            if ((Resto === 10) || (Resto === 11)) {
                Resto = 0;
            }

            if (Resto !== parseInt(cpf.substring(10, 11))) { return { cpfNotValid: true }; }
            return null;
        }
        return null;
    }
}