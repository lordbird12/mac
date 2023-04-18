import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
    Input,
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
    debounceTime,
    map,
    merge,
    Observable,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { AuthService } from 'app/core/auth/auth.service';
import { sortBy, startCase } from 'lodash-es';
import { AssetType, DataPosition, PositionPagination } from '../page.types';
import { Service } from '../page.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    // encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations,
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    formData: FormGroup;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    flashMessage: 'success' | 'error' | null = null;
    isLoading: boolean = false;

    files_1: File[] = [];
    files_2: File[] = [];
    files_3: File[] = [];
    files_4: File[] = [];
    files_5: File[] = [];
    files_6: File[] = [];
    files_7: File[] = [];
    files_8: File[] = [];
    files_9: File[] = [];

    itemData: any = [];
    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService,
        private _formBuilder: FormBuilder,
        // private _Service: PermissionService,
        private _Service: Service,
        private _matDialog: MatDialog,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService
    ) {
        this.formData = this._formBuilder.group({
            image_1: ['', Validators.required],
            image_2: ['', Validators.required],
            image_3: ['', Validators.required],
            image_4: ['', Validators.required],
            image_5: ['', Validators.required],
            image_6: ['', Validators.required],
            image_7: ['', Validators.required],
            image_8: ['', Validators.required],
            image_9: ['', Validators.required],
            facebook: ['', Validators.required],
            line: ['', Validators.required],
            youtube_1: ['', Validators.required],
            youtube_2: ['', Validators.required],
            youtube_3: ['', Validators.required],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._Service.getById(1).subscribe((resp: any) => {
            this.itemData = resp.data;
            this.formData.patchValue({
                id: 1,
                facebook: this.itemData.facebook,
                line: this.itemData.line,
                youtube_1: this.itemData.youtube_1,
                youtube_2: this.itemData.youtube_2,
                youtube_3: this.itemData.youtube_3,
            });
        });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {}

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    resetForm(): void {
        this.formData.reset();
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Show flash message
     */
    showFlashMessage(type: 'success' | 'error'): void {
        // Show the message
        this.flashMessage = type;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Hide it after 3 seconds
        setTimeout(() => {
            this.flashMessage = null;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }, 3000);
    }

    textStatus(status: string): string {
        return startCase(status);
    }

    update(): void {
        this.flashMessage = null;
        // Return if the form is invalid
        // if (this.formData.invalid) {
        //     return;
        // }
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            title: 'แก้ไขรายการ',
            message: 'คุณต้องการแก้ไขรายการใช่หรือไม่ ',
            icon: {
                show: false,
                name: 'heroicons_outline:exclamation',
                color: 'warning',
            },
            actions: {
                confirm: {
                    show: true,
                    label: 'ยืนยัน',
                    color: 'primary',
                },
                cancel: {
                    show: true,
                    label: 'ยกเลิก',
                },
            },
            dismissible: true,
        });

        // Subscribe to the confirmation dialog closed action
        confirmation.afterClosed().subscribe((result) => {
            // If the confirm button pressed...
            if (result === 'confirmed') {
                const formData = new FormData();
                Object.entries(this.formData.value).forEach(
                    ([key, value]: any[]) => {
                        formData.append(key, value);
                    }
                );
                // Disable the form
                this._Service.update(formData).subscribe({
                    next: (resp: any) => {
                        this._Service.getById(1).subscribe((resp: any) => {
                            this.itemData = resp.data;
                            this.formData.patchValue({
                                id: 1,
                                facebook: this.itemData.facebook,
                                line: this.itemData.line,
                                youtube_1: this.itemData.youtube_1,
                                youtube_2: this.itemData.youtube_2,
                                youtube_3: this.itemData.youtube_3,
                            });
                        });
                    },
                    error: (err: any) => {
                        this._fuseConfirmationService.open({
                            title: 'กรุณาระบุข้อมูล',
                            message: err.error.message,
                            icon: {
                                show: true,
                                name: 'heroicons_outline:exclamation',
                                color: 'warning',
                            },
                            actions: {
                                confirm: {
                                    show: false,
                                    label: 'ยืนยัน',
                                    color: 'primary',
                                },
                                cancel: {
                                    show: false,
                                    label: 'ยกเลิก',
                                },
                            },
                            dismissible: true,
                        });
                        console.log(err.error.message);
                    },
                });
            }
        });
    }

    onSelect_1(event) {
        this.files_1.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_1: this.files_1[0],
        });
    }

    onRemove_1(event) {
        this.files_1.splice(this.files_1.indexOf(event), 1);
        this.formData.patchValue({
            image_1: [],
        });
    }

    onSelect_2(event) {
        this.files_2.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_2: this.files_2[0],
        });
    }

    onRemove_2(event) {
        this.files_2.splice(this.files_2.indexOf(event), 1);
        this.formData.patchValue({
            image_2: [],
        });
    }

    onSelect_3(event) {
        this.files_3.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_3: this.files_3[0],
        });
    }

    onRemove_3(event) {
        this.files_3.splice(this.files_3.indexOf(event), 1);
        this.formData.patchValue({
            image_3: [],
        });
    }

    onSelect_4(event) {
        this.files_4.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_4: this.files_4[0],
        });
    }

    onRemove_4(event) {
        this.files_4.splice(this.files_4.indexOf(event), 1);
        this.formData.patchValue({
            image_4: [],
        });
    }

    onSelect_5(event) {
        this.files_5.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_5: this.files_5[0],
        });
    }

    onRemove_5(event) {
        this.files_5.splice(this.files_5.indexOf(event), 1);
        this.formData.patchValue({
            image_5: [],
        });
    }

    onSelect_6(event) {
        this.files_6.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_6: this.files_6[0],
        });
    }

    onRemove_6(event) {
        this.files_6.splice(this.files_6.indexOf(event), 1);
        this.formData.patchValue({
            image_6: [],
        });
    }

    onSelect_7(event) {
        this.files_7.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_7: this.files_7[0],
        });
    }

    onRemove_7(event) {
        this.files_7.splice(this.files_7.indexOf(event), 1);
        this.formData.patchValue({
            image_7: [],
        });
    }

    onSelect_8(event) {
        this.files_8.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_8: this.files_8[0],
        });
    }

    onRemove_8(event) {
        this.files_8.splice(this.files_8.indexOf(event), 1);
        this.formData.patchValue({
            image_8: [],
        });
    }

    onSelect_9(event) {
        this.files_9.push(...event.addedFiles);
        // Trigger Image Preview
        setTimeout(() => {
            this._changeDetectorRef.detectChanges();
        }, 150);
        this.formData.patchValue({
            image_9: this.files_9[0],
        });
    }

    onRemove_9(event) {
        this.files_9.splice(this.files_9.indexOf(event), 1);
        this.formData.patchValue({
            image_9: [],
        });
    }
}
