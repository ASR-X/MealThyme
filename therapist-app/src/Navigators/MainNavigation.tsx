import React, { useState } from 'react'
import HomeNavigator from '../Pages/HomeNavigator'


const MainNavigator = (): React.ReactElement => {
  // if (!reduxUser.Home) return <SurveyNavigator />
  // else return <HomeNavigator />
  return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator />
}

export default MainNavigation
