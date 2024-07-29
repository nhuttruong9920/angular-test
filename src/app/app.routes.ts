import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ngx-image-cropper',
    loadComponent: () =>
      import('./features/ngx-image-cropper/ngx-image-cropper.component').then(
        (m) => m.NgxImageCropperComponent
      ),
  },
];
