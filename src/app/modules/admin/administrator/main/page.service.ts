import {
    HttpClient,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
    HttpInterceptor,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    filter,
    map,
    Observable,
    of,
    switchMap,
    take,
    tap,
    throwError,
} from 'rxjs';
import {
    AssetItem,
    Store,
    AssetType,
    Chat,
    // PermissionProductDetailOSM,
    PositionPagination,
    PositionProduct,
    StoreType,
    AssetSize,
    Supplier,
    Division,
} from './page.types';
import { environment } from 'environments/environment';
import { AssetCategory } from 'app/shared/asset-category';
import { DataTablesResponse } from 'app/shared/datatable.types';
// import { UserDetail } from '../user/user.types';
const token = localStorage.getItem('accessToken') || null;
@Injectable({
    providedIn: 'root',
})
export class Service {
    // Private
    private _pagination: BehaviorSubject<PositionPagination | null> =
        new BehaviorSubject(null);
    private _product: BehaviorSubject<PositionProduct | null> =
        new BehaviorSubject(null);
    private _products: BehaviorSubject<PositionProduct[] | null> =
        new BehaviorSubject(null);
    private _product_osm: BehaviorSubject<PositionProduct | null> =
        new BehaviorSubject(null);
    private _products_osm: BehaviorSubject<PositionProduct[] | null> =
        new BehaviorSubject(null);
    private _chat: BehaviorSubject<Chat> = new BehaviorSubject(null);
    private _chats: BehaviorSubject<Chat[]> = new BehaviorSubject(null);
    private _asset_types: BehaviorSubject<AssetType[] | null> =
        new BehaviorSubject(null);
    // private _suppliers: BehaviorSubject<UserDetail[] | null> = new BehaviorSubject(null);
    // private _two_approvers: BehaviorSubject<UserDetail[] | null> = new BehaviorSubject(null);
    private _store_types: BehaviorSubject<StoreType[] | null> =
        new BehaviorSubject(null);
    private _stores: BehaviorSubject<Store[] | null> = new BehaviorSubject(
        null
    );
    private _seasons: BehaviorSubject<any[] | null> = new BehaviorSubject(null);
    private _asset_sizes: BehaviorSubject<any[] | null> = new BehaviorSubject(
        null
    );
    private _divisions: BehaviorSubject<any[] | null> = new BehaviorSubject(
        null
    );
    private _materials: BehaviorSubject<any[] | null> = new BehaviorSubject(
        null
    );
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    httpOptionsFormdata = {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
    };

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for pagination
     */
    get pagination$(): Observable<PositionPagination> {
        return this._pagination.asObservable();
    }

    /**
     * Getter for product
     */
    get product$(): Observable<PositionProduct> {
        return this._product.asObservable();
    }

    /**
     * Getter for products
     */
    get products$(): Observable<PositionProduct[]> {
        return this._products.asObservable();
    }

    /**
     * Getter for product
     */
    get product_osm$(): Observable<PositionProduct> {
        return this._product_osm.asObservable();
    }

    /**
     * Getter for products
     */
    get products_osm$(): Observable<any[]> {
        return this._products_osm.asObservable();
    }

    /**
     * Getter for chat
     */
    get chat$(): Observable<Chat> {
        return this._chat.asObservable();
    }

    /**
     * Getter for chats
     */
    get chats$(): Observable<Chat[]> {
        return this._chats.asObservable();
    }

    /**
     * Getter for tags
     */
    // get suppliers$(): Observable<UserDetail[]> {
    //     return this._suppliers.asObservable();
    // }

    // /**
    //     * Getter for tags
    //     */
    // get two_approvers$(): Observable<UserDetail[]> {
    //     return this._two_approvers.asObservable();
    // }

    /**
     * Getter for asset type
     */
    get asset_types$(): Observable<AssetType[]> {
        return this._asset_types.asObservable();
    }

    /**
     * Getter for store type
     */
    get store_types$(): Observable<StoreType[]> {
        return this._store_types.asObservable();
    }

    /**
     * Getter for store type
     */
    get stores$(): Observable<Store[]> {
        return this._stores.asObservable();
    }

    /**
     * Getter for season
     */
    get seasons$(): Observable<any[]> {
        return this._seasons.asObservable();
    }

    /**
     * Getter for division
     */
    get divisions$(): Observable<any[]> {
        return this._divisions.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get chats
     */
    getChat(id: string): Observable<any> {
        return this._httpClient
            .get<Chat>('api/apps/chat/chat', { params: { id } })
            .pipe(
                map((chat) => {
                    // Update the chat
                    this._chat.next(chat);

                    // Return the chat
                    return chat;
                }),
                switchMap((chat) => {
                    if (!chat) {
                        return throwError(
                            'Could not found chat with id of ' + id + '!'
                        );
                    }

                    return of(chat);
                })
            );
    }

    /**
     * Get chat
     *
     * @param id
     */
    getChatById(id: string): Observable<any> {
        return this._httpClient
            .get<Chat>('api/apps/chat/chat', { params: { id } })
            .pipe(
                map((chat) => {
                    // Update the chat
                    this._chat.next(chat);

                    // Return the chat
                    return chat;
                }),
                switchMap((chat) => {
                    if (!chat) {
                        return throwError(
                            'Could not found chat with id of ' + id + '!'
                        );
                    }

                    return of(chat);
                })
            );
    }

    /**
     * Get comment
     */

    getComments(assetId: any): Observable<any[]> {
        return this._httpClient
            .post<any[]>(
                environment.API_URL + 'api/assets/get_asset_by_brief',
                {
                    brief_id: assetId,
                },
                this.httpOptionsFormdata
            )
            .pipe(
                take(1),
                map((products) => {
                    return products;
                }),
                switchMap((product) => {
                    if (!product) {
                        return throwError(
                            'Could not found product with id of !'
                        );
                    }

                    return of(product);
                })
            );
    }

    handlerError(error): Observable<never> {
        let errorMessage = 'Error unknown';
        if (error) {
            errorMessage = `${error.error.message}`;
        }
        // window.alert(errorMessage);
        return throwError(errorMessage);
    }

    //* get position by id
    delete(id: any): Observable<any[]> {
        return this._httpClient
            .delete<any[]>(environment.API_URL + '/api/main_service/' + id)
            .pipe(
                tap((meterial) => {
                    this._materials.next(meterial);
                })
            );
    }

    // * create position
    create(data: any): Observable<any> {
        return this._httpClient
            .post(
                environment.API_URL + '/api/main_service',
                data,
                this.httpOptionsFormdata
            )
            .pipe(
                switchMap((response: any) => {
                    // Return a new observable with the response
                    return of(response);
                })
            );
    }

    // get position //
    getList(): Observable<any> {
        return this._httpClient
            .get<any>(environment.API_URL + '/api/get_main_service')
            .pipe(
                tap((meterial) => {
                    this._materials.next(meterial);
                })
            );
    }

    //* get position by id
    getById(id: any): Observable<any[]> {
        return this._httpClient
            .get<any[]>(environment.API_URL + '/api/main_service/' + id)
            .pipe(
                tap((meterial) => {
                    this._materials.next(meterial);
                })
            );
    }

    //   * update branch

    update(data: any): Observable<any> {
        return this._httpClient
            .post(
                environment.API_URL + '/api/update_main_service',
                data,
                this.httpOptionsFormdata
            )
            .pipe(
                switchMap((response: any) => {
                    // Return a new observable with the response
                    return of(response);
                })
            );
    }

    getPage(dataTablesParameters: any): Observable<DataTablesResponse> {
        return this._httpClient
            .get(
                environment.API_URL +
                    '/api/round/page?page=1&limit=10&filter.classs=$eq:1',
                dataTablesParameters
            )
            .pipe(
                switchMap((response: any) => {
                    return of(response);
                })
            );
    }
}
