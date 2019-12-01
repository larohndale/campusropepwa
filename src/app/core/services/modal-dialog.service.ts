import { Injectable, TemplateRef, ComponentRef } from "@angular/core";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig
} from "@angular/material";
import { Observable } from "rxjs";
import { ComponentType } from "@angular/cdk/portal";

export class ModalSize {
  public static FULLSCREEN: "100%" = "100%";
}

@Injectable({
  providedIn: "root"
})
export class ModalDialogService {
  private static CONFIRMATION_DIALOG_DEFAULT_OPTIONS = {};

  currentDialogRef: MatDialogRef<any>;

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
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    options?: MatDialogConfig
  ): MatDialogRef<T> {
    options = options || ModalDialogService.CONFIRMATION_DIALOG_DEFAULT_OPTIONS;
    this.currentDialogRef = this.matDialog.open(
      componentOrTemplateRef,
      options
    );
    return this.currentDialogRef;
  }

  close() {
    this.currentDialogRef.close();
  }
}
