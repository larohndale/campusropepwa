import { Injectable, TemplateRef, ComponentRef } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig
} from '@angular/material';
import { Observable } from 'rxjs';

export class ModalSize {
  public static FULLSCREEN: '100%' = '100%';
}

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  private static CONFIRMATION_DIALOG_DEFAULT_OPTIONS = {
    width: '500px',
    height: '300px'
  };

  constructor(private matDialog: MatDialog) {}

  /**
   * Opens a modal dialog containing the given component.
   *
   * @param componentOrTemplateRef Type of the component to load into the dialog,
   *     or a TemplateRef to instantiate as the dialog content.
   * @param options Extra configuration options.
   * @returns Reference to the newly-opened dialog.
   */
  open<T>(
    componentOrTemplateRef: TemplateRef<T>,
    options?: MatDialogConfig
  ): MatDialogRef<T> {
    options = options || {};
    options.disableClose = true;
    return this.matDialog.open(componentOrTemplateRef, options);
  }
}
