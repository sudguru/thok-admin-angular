import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
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
        MatSidenavModule,
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
        MatSidenavModule,
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
