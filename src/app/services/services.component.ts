import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private ngmodal: NgbModal, private fb: FormBuilder) { }

  app(appcontent: any) {
    let options: NgbModalOptions = {
      size: 'md',
      centered: true,
      animation: true,
    };
    this.ngmodal.open(appcontent, options);
  }
  appdialog = `As one of the world's largest ITService Providers, our deep pool of certified engineers and IT staff are ready to help you to keep your IT business safe & ensure high availability.`;
  ngOnInit(): void {

    let toggle = document.querySelector('.togglemybutton') as HTMLElement
    let menu  = document.querySelector('.menu')

    toggle.onclick = function(){
      menu?.classList.toggle('active')
    }


  }

}
