import React from 'react'
import { SidebarMain } from '../../SideDrawer/SideContents/SideContentItem/SideContentItem'
import ServiceStructure from './ServiceStructure'

const HeaderServices = (props) => {
  return (
    <>
    {ServiceStructure.map((item, index) => (
      <SidebarMain
        key={item.title}
        // language={lan}
        // themeCode={theme}
        // toggleTheme={switchTheme}
        item={item}
      />
    ))}
  </>
  )
}

export default HeaderServices
