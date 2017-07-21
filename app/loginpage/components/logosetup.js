import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const Logo = ({source, origonalLogoWidth, origonalLogoHeight}) => {
//  let windowWidth = Dimensions.get('window').width
//  let windowHeight = Dimensions.get('window').height
  //let widthLogoChange = windowWidth/origonalLogoWidth
  let newLogoWidth = origonalLogoWidth/2 // * widthLogoChange
  let newLogoHeight = origonalLogoHeight/2 //change this later

  return(
      <Image source = {source} style={{width: newLogoWidth, height: newLogoHeight}}/>
    )
}

export default Logo
