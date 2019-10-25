import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { environment } from "../../../environments/environment";
declare const cloudinary: any;
@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"]
})
export class ImageUploadComponent implements OnInit {
  @Output() uploadedImage = new EventEmitter<string>();

  constructor() {}

  public widget: any;
  public imageArray = [];
  ngOnInit() {
    this.widget = cloudinary.createUploadWidget(
      {
        sources: ["local", "url"],
        uploadPreset: "ywio304o",
        showCompletedButton: true,
        cloudName: environment.cloudName,
        api_key: environment.cloudKey,
        api_secret: environment.cloudSecretKey,
        multiple: false,
        cropping: true,
        singleUploadAutoClose: false
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.uploadedImage.emit(result.info.url);
        }
      }
    );
  }

  openFileUploader() {
    console.log("testing");
    this.widget.open();
  }
}
