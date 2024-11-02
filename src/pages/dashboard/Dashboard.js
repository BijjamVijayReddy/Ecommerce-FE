import React from 'react'
import AppFooter from '../../components/appFooter/AppFooter'
import AppHeader from '../../components/appHeader/AppHeader'
import Slider from '../../components/slider/Slider'
import AppInfo from '../../components/AppInfo/AppInfo'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Helmet from '../../components/helmet/Helmet'
import Product from '../../components/all_products/Product'


const Dashboard = () => {
    return (
        <Helmet title="Dashboard">
            <AppHeader />
            <Slider />
            <AppInfo />
            <Product />
            <NewsLetter />
            <AppFooter />
          
        </Helmet>
    )
}

export default Dashboard
