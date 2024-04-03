import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component {
  fileToUpload: File | null = null;
  uploadProgress: number | null = null;
  fileUploadSuccess = false;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0] as File;
  }

  uploadFile() {
    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload);

      const uploadReq = new HttpRequest('POST', 'your-upload-url', formData, {
        reportProgress: true,
      });

      this.http.request(uploadReq).subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / (event.total ?? 1));
        } else if (event.type === HttpEventType.Response) {
          this.uploadProgress = null;
          this.fileUploadSuccess = true;
        }
      });
    }
  }
}
