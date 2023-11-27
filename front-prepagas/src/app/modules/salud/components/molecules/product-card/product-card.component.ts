import { Component, Input, OnInit,  ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../../../../_modal';
import { productsDB } from '../../../../../data/constants/mock/products';
import { MasDetallesComponent } from '../../templates/mas-detalles/mas-detalles.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData2 {
  name: string;
  price: Number;
  id:any;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;
  folleto:any;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

  

export class ProductCardComponent implements OnInit{
  @Input() product: any;
  bodyText: string;
  name: string;
  price: Number;
  id:Number;
  category: string;
  rating:Number;
  clinicas: any;
  entidades: any;
  producto: any;
  folleto:any;
  searchKey:string ="";

  dialogRef: MatDialogRef<MasDetallesComponent>;
  public comparar:any;
  public productList : any ;
  public filterCategory : any
  public iconStyles = { '--fa-secondary-opacity': 0.6 };

  constructor(
    public dialog: MatDialog,
    ) { 

  }

  // @ViewChild("compararButon") compararButon: ElementRef;
   //https://bit.ly/Replacement_ElementRef
   toggleCompare() {
    this.product.compare = !this.product.compare;
}
  
// agregarcomparar(){
//   console.log(this.comparar)
//   this.ServicioComparar.servicioComparar.emit({data:this.comparar});
//   }

  ngOnInit(): void {
    
  }

  openDialog(
    // enterAnimationDuration: string, exitAnimationDuration: string,
    product?: { name: any; item_id: any; price: any; category: any; rating: any; clinicas: any; clinicasArrayObjets: any; clinicasmap: any; entidades: any; folleto: any; }) : void {
      const dialogRef = this.dialog.open(MasDetallesComponent, {
      // enterAnimationDuration,
      // exitAnimationDuration,
      data: { name: product ? product.name : '',
      id : product ? product.item_id : '', 
      price : product ? product.price : '',
      category : product ? product.category : '',
      rating : product ? product.rating : '',
      clinicas : product ? product.clinicas : '', 
      clinicasArrayObjets : product ? product.clinicasArrayObjets : '',
      clinicasmap: product ? product.clinicasmap : '', 
      entidades: product ? product.entidades : '',
      users: product ? product.clinicas : '',
      folleto: product ? product.folleto :'',
      producto: product
      },
      maxWidth: '100vw',
      maxHeight: '95vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
    disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  esNumero(valor: any): boolean {
    return typeof valor === 'number';
  } 
  isPrecioArray(product: any): boolean {
    return Array.isArray(product.precio);
  }

  getFormattedProductName(): string {
    // Dividir la cadena por espacios o guiones bajos y omitir el primer elemento
    const parts = this.product.name.split(/[ _]/).slice(1);
    // Volver a unir los elementos con un espacio en blanco
    return parts.join(' ');
  }



}