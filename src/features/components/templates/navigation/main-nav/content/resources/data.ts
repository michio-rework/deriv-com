import { TSmartNavContent } from '../../../types'

export const resourcesNavSectionContent: TSmartNavContent[] = [
    {
        id: 0,
        data: {
            title: '_t_Help centre_t_',
            url: { type: 'internal', to: '/help-centre/' },
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Community_t_',
            url: { type: 'company', url_name: 'community', target: '_blank' },
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Payment methods_t_',
            url: { type: 'internal', to: '/payment-methods/' },
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Deriv MT5 Signals_t_',
            url: { type: 'internal', to: '/dmt5-trading-signals/#signal-subscriber/' },
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Academy_t_',
            url: { type: 'company', url_name: 'academy', target: '_blank' },
        },
    },
]
