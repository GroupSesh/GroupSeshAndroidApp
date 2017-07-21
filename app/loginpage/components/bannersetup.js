import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const Banner = ({source, origonalBannerWidth, origonalBannerHeight}) => {
  let windowWidth = Dimensions.get('window').width
  let newBannerWidth = windowWidth
  let newBannerHeight = origonalBannerHeight 

  return(
    <Image source = {source} style={{width: newBannerWidth, height: newBannerHeight}}/>
  )
}
export default Banner
