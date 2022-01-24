import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  spinner = false;

  constructor(
    private user: UserService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  addpost = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl(''),
  });

  ngOnInit() {
    console.log(this.data)
    if (this.data.type == 'edit') {
      this.addpost.patchValue({
        userId: this.data.value.userId,
        title: this.data.value.title,
        body: this.data.value.body,
      })
    }
  }

  Submit() {
    console.log(this.addpost.value)
    if (this.addpost.valid) {
      let obj = {
        ...this.addpost.value,
      }
      if (this.data.type == 'edit') {
        obj['id'] = this.data.value.id
      }
      console.log(obj)
      this.spinner = true
      this.user.addUpdatePost(obj, this.data.type).subscribe(res => {
        console.log(res);
        this.spinner = false
        this.onNoClick('submit');
      }, err => {
        this.spinner = false
        console.log(err['error'])
        this._snackBar.open(err['error'].message, 'close', {
          duration: 2000,
        });
      })
    }
  }

  onNoClick(value: any): void {
    this.dialogRef.close(value);
  }

}
