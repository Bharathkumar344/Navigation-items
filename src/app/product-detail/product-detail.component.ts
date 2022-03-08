import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{
  public get actRoute(): ActivatedRoute {
    return this._actRoute;
  }
  public set actRoute(value: ActivatedRoute) {
    this._actRoute = value;
  }
 product_id: string;

constructor(private _actRoute: ActivatedRoute) {
  this.product_id = this.actRoute.snapshot.params['id'];
}
}
