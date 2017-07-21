import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const SeshPic = ({source}) => {
  let windowWidth = Dimensions.get('window').width
  let newBannerWidth = (windowWidth)/3
  let newBannerHeight = (windowWidth)/3
  return(
    <Image source = {source} style={{width: newBannerWidth, height: newBannerHeight, borderWidth:5, borderRadius:(windowWidth)/3, borderColor:'lightgreen'}}/>
  )
}
export default SeshPic
