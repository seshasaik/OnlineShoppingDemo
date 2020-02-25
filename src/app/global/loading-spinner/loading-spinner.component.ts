import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from './loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  showSpinner: boolean = true;
  constructor(private loadingSpinnerService: LoadingSpinnerService) {
    console.log("app-loading-spinner initiated")
    this.loadingSpinnerService.isLoading.subscribe(isLoading =>
      this.showSpinner = isLoading
    );
  }

  ngOnInit() {

  }

}
