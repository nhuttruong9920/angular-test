import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ImageCroppedEvent,
  ImageCropperComponent,
  LoadedImage,
} from 'ngx-image-cropper';
import { ImageUploaderComponent } from '../../shared/components/image-uploader/image-uploader.component';

@Component({
  selector: 'app-ngx-image-cropper',
  standalone: true,
  imports: [ImageCropperComponent, FormsModule, ImageUploaderComponent],
  templateUrl: './ngx-image-cropper.component.html',
  styleUrl: './ngx-image-cropper.component.scss',
})
export class NgxImageCropperComponent {
  imageChangedEvent: Event | null = null;
  croppedImage: string = '';
  imgUrl: string = '';
  imageFile!: File;
  constructor() {}

  fileChangeEvent(event: File): void {
    this.imageFile = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event);

    this.croppedImage = event.objectUrl ?? '';
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
