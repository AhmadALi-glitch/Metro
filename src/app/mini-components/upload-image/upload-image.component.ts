import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  progress:any="";
  photoPath:any=localStorage.getItem("photoPath");

  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:2000/update-profile-image/' + localStorage.getItem('email'),
    itemAlias: 'image',
    method:"put"
  });
  constructor(private toastr: ToastrService) {}
  
  @Output('onUpload') upload = new EventEmitter();

  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onProgressItem = (item:FileItem, progress :any) => {
      console.log(progress);
      this.progress = "uploading...";
    }
    this.uploader.onCompleteItem = (item: any, status:any) => {

      let result = JSON.parse(status);
      const path = result[0]._fields[0];
      console.log(path);

      this.upload.emit("http://localhost:2000/" + path);

      this.photoPath =  "http://localhost:2000/" + path;
      localStorage.setItem("photoPath", "http://localhost:2000/" + path);

      this.toastr.success("Image Uploaded");

    };
    this.uploader.onErrorItem = (item: any, status:any) => {
      this.toastr.error("Image Upload Failde");
    }
  }

}
