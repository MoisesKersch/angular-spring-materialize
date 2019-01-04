import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Validator } from './../../shared/validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
    user: User = new User();
    userForm: any;

    validator: Validator = new Validator(this.userService);

    constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  
    ngOnInit() 
    { 
        const body = document.getElementsByTagName('body')[0];
        document.getElementById('page-center').setAttribute('href', '../../assets/materialize-assets/layouts-css/page-center.css');
        body.classList.add('cyan');

        this.userForm = this.formBuilder.group
        ({
            username: ['', [Validators.required, Validators.minLength(3)] ],
            email: [''],
            password: [''],
            passwordConfirm: [''],
            cpf: ['', [ Validators.maxLength(11), Validators.required, this.validator.isCpf ]],
            address: this.formBuilder.group
            ({
                city: [''],
                state: ['']
            })
        });
    } 

    markAllAsTouched(group: any) 
    {
        Object.keys( group.controls ).forEach(key => 
        {
            group.controls[key].touched = true;
        });
    }

    get cpf()
    {
        return this.userForm.get('cpf');
    }

    save(userForm)
    {
        console.log(userForm);

        this.markAllAsTouched(this.userForm);

        if (userForm.valid)
        {
            this.userService.save(this.userForm.value).subscribe(
            result => 
            {
                console.log(result);
                this.redirect();
            }, error => console.error(error) );

            userForm.reset();
        }
    }

    redirect() 
    {
        console.log('done');
        // this.router.navigate(['/home']);
    }
}
