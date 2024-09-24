import React from 'react'
import AppFooter from '../../components/appFooter/AppFooter'
import AppHeader from '../../components/appHeader/AppHeader'
import Slider from '../../components/slider/Slider'
import AppInfo from '../../components/AppInfo/AppInfo'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Dashboard = () => {
    return (
        <div>
            <AppHeader />
            <Slider />
            <AppInfo />
            <NewsLetter />
            <AppFooter />
        </div>
    )
}

export default Dashboard
