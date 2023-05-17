import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Breadcrumbs } from 'app/shared/models/breadcrumbs';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  dataUrlActual: Breadcrumbs = {
    
  };
  constructor(
    private router: Router
  ) {
    this.getDataUrl().subscribe(
      {
        next: (value: Breadcrumbs) => {
          this.dataUrlActual = value;
        },
        error: (err: any) => {
          console.log(err)
        },
        complete: () => {
          // 
        }
      }
    )
  }

  ngOnInit(): void {

  }

  getDataUrl(): Observable<any> {
    return this.router.events.pipe(
      filter(element => element instanceof ActivationEnd),
      filter((element: ActivationEnd) => element.snapshot.firstChild == null),
      map((element: ActivationEnd) => element.snapshot.data)
    )

  }
}
