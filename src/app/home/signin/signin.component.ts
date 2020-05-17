import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) {

    }
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ["", Validators.required], // são obrigatórios 
            password: ["", Validators.required]    
        });
        this.platformDetectorService.isPlatformBrowser() &&
                    this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password).subscribe(() =>
            this.router.navigate(['user', userName]), //rota de navegação
            err => {
                console.log(err);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() &&
                    this.userNameInput.nativeElement.focus();
                alert("Invalid user name or password")
            });
    }
}

// Sign in logar, sign up registrar


//Focus() precisa injetar uma variável de template referente ao campo desejado. Esta variável ao ser injetada será do tipo 'ElementRef'