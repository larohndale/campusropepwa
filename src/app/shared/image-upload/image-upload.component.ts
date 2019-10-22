import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
declare const cloudinary: any;
@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.scss"]
})
export class ImageUploadComponent implements OnInit {
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
        api_secret: environment.cloudSecretKey
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.imageArray.push(result.info.url);
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
  }

  openFileUploader() {
    console.log("testing");
    this.widget.open();
  }
}
