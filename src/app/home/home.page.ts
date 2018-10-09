import { Component } from '@angular/core';

import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  yourImage: any;

  constructor() {

  }

  async captureImage() {
    const capturedImage = await Plugins.Camera.getPhoto(
      {
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.Base64,
      }
    );

    this.yourImage = capturedImage.base64Data.slice(23);
  }

}