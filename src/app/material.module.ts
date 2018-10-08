import { NgModule } from '@angular/core';

import {
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatDividerModule,
        MatChipsModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatSelectModule
    ],
    exports: [
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        MatListModule,
        MatDividerModule,
        MatChipsModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatSelectModule
    ]
})

export class MaterialModule {}
