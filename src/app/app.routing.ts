import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'landing' },

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'landing' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m) => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m) => m.AuthSignUpModule
                    ),
            },
        ],
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m) => m.AuthSignOutModule
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                    ).then((m) => m.AuthUnlockSessionModule),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'landing',
                loadChildren: () =>
                    import('./modules/landing/landing.module').then(
                        (m) => m.LandingModule
                    ),
            },

            {
                path: 'home',
                loadChildren: () =>
                    import('./modules/admin/administrator/banner/page.module').then(
                        (m) => m.Module
                    ),
            },

            {
                path: 'website',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/website/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'banner',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/banner/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'about',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/about/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'thailife',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/thailife/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'partner',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/partner/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'interest',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/interest/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'mobileapp',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/mobileapp/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'buy',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/buy/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'statistic',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/statistic/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },
            {
                path: 'where',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/where/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },
            {
                path: 'myfastcargo',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/myfastcargo/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },
  

            {
                path: 'faq',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/faq/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'review',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/review/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'location',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/location/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'main',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/main/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'branch',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/branch/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'step',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/step/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },


            {
                path: 'services',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/services/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'gallery',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/gallery/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'video',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/video/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

            {
                path: 'contact',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/contact/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },


            {
                path: 'announcement',
                canActivate: [],
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/administrator/announcement/page.module'
                            ).then((m) => m.Module),
                    },
                ],
            },

           
            // 404 & Catch all
            {
                path: '404-not-found',
                pathMatch: 'full',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/error/error-404/error-404.module'
                    ).then((m) => m.Error404Module),
            },
            { path: '**', redirectTo: '404-not-found' },
        ],
    },
];
