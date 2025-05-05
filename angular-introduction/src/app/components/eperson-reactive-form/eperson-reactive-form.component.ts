import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {

  form = new FormGroup({
    givenName: new FormControl('', [Validators.required]),
    surName: new FormControl('', [Validators.required]),
    age: new FormControl('18', [
      Validators.required, 
      Validators.pattern('^[0-9]*$'), 
      Validators.min(18), 
      Validators.max(100)
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    education: new FormControl('', [Validators.required]),
  });

  onSubmit(data: any) {
    console.log('Form submitted:', data);
    console.log(this.form);
    console.log('givenName>>', this.form.controls['givenName'].value)
    this.form.controls['surName'].setValue('Jones');
  }

  onSetValue() {
    this.form.setValue({
      givenName: 'John',
      surName: 'Doe',
      age: '25',
      email: 'j.doe@email.com',
      education: 'PhD'
    })
  }
}