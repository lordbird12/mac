/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        title: 'ผู้ดูแลระบบ',
        subtitle: 'เมนูหลักการใช้งานสำหรับผู้ดูแลระบบ',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                title: 'จัดการ SalePage',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/website/list',
            },
            {
                title: 'จัดการหน้าเว็บเพจ',
                type: 'collapsable',
                icon: 'heroicons_outline:globe-alt',
                // link: '/website/list',
                children: [
                    {
                        title: 'เกี่ยวกับเรา',
                        type: 'basic',
                        icon: 'heroicons_outline:shield-check',
                        link: '/about/list',
                    },
                    {
                        title: 'ครองใจคนไทย',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                        link: '/thailife/list',
                    },

                    {
                        title: 'เราเชี่ยวชาญด้านการขนส่ง',
                        type: 'basic',
                        icon: 'heroicons_outline:truck',
                        link: '/myfastcargo/list',
                    },
                ],
            },
            {
                title: 'ภาพแบนเนอร์',
                type: 'basic',
                icon: 'heroicons_outline:fast-forward',
                link: '/banner/list',
            },
            {
                title: 'บริการหลัก',
                type: 'basic',
                icon: 'heroicons_outline:star',
                link: '/main/list',
            },
            {
                title: 'บริการรอง',
                type: 'basic',
                icon: 'heroicons_outline:sparkles',
                link: '/services/list',
            },
            {
                title: '6 ขั้นตอน',
                type: 'basic',
                icon: 'heroicons_outline:cube',
                link: '/step/list',
            },
            {
                title: 'แหล่งสั่งซื้อ',
                type: 'basic',
                icon: 'heroicons_outline:emoji-happy',
                link: '/partner/list',
            },
            {
                title: 'คำถามพบบ่อย',
                type: 'basic',
                icon: 'heroicons_outline:exclamation-circle',
                link: '/faq/list',
            },
            {
                title: 'ข่าวสารและกิจกรรม',
                type: 'basic',
                icon: 'heroicons_outline:bell',
                link: '/announcement/list',
            },
            {
                title: 'ช่องทางติดต่อ',
                type: 'basic',
                icon: 'heroicons_outline:location-marker',
                link: '/contact/list',
            },
            {
                title: 'วีดีโอแนะนำและสถิติ',
                type: 'basic',
                icon: 'heroicons_outline:video-camera',
                link: '/video/list',
            },
            {
                title: 'อัลบั้มรูปภาพ',
                type: 'basic',
                icon: 'heroicons_outline:camera',
                link: '/gallery/list',
            },
            {
                title: 'รีวิวลูกค้า',
                type: 'basic',
                icon: 'heroicons_outline:pencil',
                link: '/review/list',
            },
            {
                title: 'สาขา',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/branch/list',
            },
            {
                title: 'ผู้ที่สนใจ',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/interest/list',
            },
        ],
    },
    {
        title: 'จัดการส่วนตัว',
        subtitle: 'เมนูหลักการใช้งานสำหรับจัดการส่วนตัว',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                title: 'ออกจากระบบ',
                type: 'basic',
                icon: 'heroicons_solid:logout',
                link: '/sign-out',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        tooltip: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation Features',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'group',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Misc',
        type: 'group',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
