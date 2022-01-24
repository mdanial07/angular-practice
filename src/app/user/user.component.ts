import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import Swal from 'sweetalert2'
import { UserService } from './user.service';
import { AdduserComponent } from './adduser/adduser.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title', 'action'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private user: UserService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.user.getPostList().subscribe(async (res: any) => {
      console.log(res)
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  AddPost() {
    const dialogRef = this.dialog.open(AdduserComponent, {
      data: { value: '', type: 'add' },
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      if (result == 'submit') {
        Swal.fire(
          'Added',
          'Post added successfully',
          'success'
        )
        this.ngOnInit()
      }
    });
  }

  Edit(data: any) {
    console.log(data)
    const dialogRef = this.dialog.open(AdduserComponent, {
      data: { value: data, type: 'edit' },
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      if (result == 'submit') {
        Swal.fire(
          'Updated',
          'Post has been updated successfully',
          'success'
        )
        this.ngOnInit()
      }
    });
  }

  Delete(element: any) {
    console.log(element)
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this Post",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!'
    }).then((result) => {
      if (result.value) {
        this.user.deletePost(element.id).subscribe((res: any) => {
          console.log(res)
          Swal.fire(
            'Deleted',
            'Post has been delete successfully',
            'success'
          )
          this.ngOnInit()
        }, (err: any) => {
          console.log(err)
          Swal.fire(
            'Error!',
            `${err['error']}`,
            'error'
          )
        })
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
