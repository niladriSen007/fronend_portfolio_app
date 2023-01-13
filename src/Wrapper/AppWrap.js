import React, { Component } from 'react'
import {NavigationDots,SocialMedia} from "../components"
function AppWrap(component,idName,classNames) {
  return (
   function HOC()
   {
    return(
      <>  
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">
                  @2022 Niladri
            </p>
          </div>
        </div>
      </div>
      </>
    )
   }
  )
}

export default AppWrap