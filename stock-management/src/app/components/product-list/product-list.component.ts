import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'quantity', 'actions'];

  constructor(private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products.data = data;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '250px',
      data: { name: '', quantity: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.addProduct(result).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }

  openEditDialog(product: any) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '250px',
      data: { name: product.name, quantity: product.quantity }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.updateProduct(product.id, result).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }
}
