import { Directive, HostListener, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Planes } from './../data/interfaces/planes';

export type SortColumn = keyof Planes | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface ProductSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[productsortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdProductsSortableHeader {

  @Input() productsortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  private destroy$ = new Subject<void>();
  @Output() productsort = new Subject<ProductSortEvent>();

  constructor() {}

  rotate() {
    this.direction = rotate[this.direction];
    const event: ProductSortEvent = { column: this.productsortable, direction: this.direction };
    this.productsort.next(event);
    this.productsort.pipe(take(1)).subscribe({
      complete: () => this.destroy$.next()
    });
  }
}


// import {Directive, EventEmitter, Input, Output} from '@angular/core';
// import {Planes} from './../data/interfaces/planes';
// export type SortColumn = keyof Planes | '';
// export type SortDirection = 'asc' | 'desc' | '';
// const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

// export interface productSortEvent {
//   column: SortColumn;
//   direction: SortDirection;
// }

// @Directive({
//   selector: 'th[productsortable]',
//   host: {
//     '[class.asc]': 'direction === "asc"',
//     '[class.desc]': 'direction === "desc"',
//     '(click)': 'rotate()'
//   }
// })
// export class NgbdProductsSortableHeader {

//   @Input() productsortable: SortColumn = '';
//   @Input() direction: SortDirection = '';
//   @Output() productsort = new EventEmitter<productSortEvent>();
//   constructor() {
//     // Aumenta el límite de listeners para evitar la advertencia.
 
//     // Puedes ajustar este número según sea necesario.
//     }


  
//   rotate() {
//     this.direction = rotate[this.direction];
//     this.productsort.emit({column: this.productsortable, direction: this.direction});
//   }
// }
