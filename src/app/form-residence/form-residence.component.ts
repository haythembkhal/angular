import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
  myForm:FormGroup;

  ngOnInit(){
    this.myForm=new FormGroup({ //FormGroup: le formulaire
      sousgroupe:new FormGroup({
      id:new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]*")]), //Form:champ du formulaire
      name:new FormControl('',[Validators.required,Validators.nullValidator]),
      adresse:new FormControl('', [Validators.required]),
      }),
    })  
  }

    get id(){
      return this.myForm.get('sousgroupe').get('id');
    }
    get name(){
      return this.myForm.get('sousgroupe').get('name');
    }
    get address(){
      return this.myForm.get('sousgroupe').get('adresse');
    }

   
}
