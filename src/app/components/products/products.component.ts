import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wsb-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  id: string = '';
  lang: string = '';

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.activeRoute.snapshot.paramMap.get('id');
    const id = this.activeRoute.snapshot.params['id'];
    const lang = this.activeRoute.snapshot.queryParams['lang'];

    this.id = id;
    this.lang = lang;
  }

}
