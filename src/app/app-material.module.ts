import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
    ],
    exports: [
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
    ],

}) export class MaterialModule { }
