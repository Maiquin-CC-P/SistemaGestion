import { NavigationItem } from "src/app/theme/layout/admin/navigation/navigation";

export const CambioPrecioData: NavigationItem[] = [
    {
        id: '01',
        title: 'Catalogo',
        type: 'group',
        icon: 'feather icon-align-left',
        children: [
            {
                id: '0101',
                title: 'Cronograma',
                type: 'item',
                url: 'catalog/schedule',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            },
            {
                id: '0102',
                title: 'Partidas Principales',
                type: 'item',
                url: 'catalog/main-items',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            },
            {
                id: '0103',
                title: 'Costo Plazo Calidad',
                type: 'item',
                url: 'catalog/cpc',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            },
            {
                id: '0104',
                title: 'Hitos del Proyecto',
                type: 'item',
                url: 'catalog/project-milestones',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            }
        ]
    },
    {
        id: '02',
        title: 'Reporte',
        type: 'group',
        icon: 'feather icon-align-left',
        children: [
            {
                id: '0202',
                title: 'Reporte',
                type: 'item',
                url: 'report/dashboard',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            }
        ]
    },
    {
        id: '03',
        title: 'Seguridad',
        type: 'group',
        icon: 'ti ti-chart-infographic',
        children: [
            {
                id: '0301',
                title: 'Perfil',
                type: 'item',
                url: 'security/perfil',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            },
             {
                id: '0302',
                title: 'Usuario',
                type: 'item',
                url: 'security/user',
                classes: 'nav-item',
                icon: 'feather icon-sidebar',
            }
        ]
    }
];