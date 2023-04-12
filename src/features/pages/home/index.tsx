import React from 'react'
import HomeHero from './hero'
import HomeMarkets from './markets'
import OurPlatforms from './our-platforms'
import TradeTypes from './trade-types'
import DerivGOBanner from './go-banner'
import P2PBanner from './p2p-banner'
import ClientTestimonial from './client-testimonial'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import MainNav from 'features/components/templates/navigation/main-nav'
import SignupPublic from 'features/components/templates/signup/with-banner'

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    return (
        <Layout>
            <SEO
                title={localize(
                    '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
                )}
                description={localize(
                    '_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_',
                )}
                has_organization_schema
            />
            <MainNav />
            <HomeHero />
            <HomeMarkets />
            <TradeTypes />
            <OurPlatforms />
            <ClientTestimonial />
            {is_p2p_allowed_country && <P2PBanner />}
            <SignupPublic />
        </Layout>
    )
}

export default HomePage
