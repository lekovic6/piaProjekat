import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Worker } from '../models/worker';


@Component({
  selector: 'app-add-worker-modal',
  templateUrl: './add-worker-modal.component.html',
  styleUrls: ['./add-worker-modal.component.css']
})
export class AddWorkerModalComponent {
  
  worker:Worker  = new Worker();;

  constructor(public modal: NgbActiveModal) {}

  saveWorker() {
    this.modal.close(this.worker);
  }
}
