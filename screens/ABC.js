import { View, Text, useWindowDimensions, StatusBar,StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import  colors  from '../assets/styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from '../assets/styles/Styles'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect,useRef }  from 'react'
import SignatureScreen from "react-native-signature-canvas";




const ABC = ({navigation}) => {
  const ref = useRef();

  const [bg, setBg] = useState('white');
  const [iconColor, setIconColor] = useState('black');
  const [box_value_change, setCol] = useState('');
// Called after ref.current.readSignature() reads a non-empty base64 string
const handleOK = (signature) => {
  console.log(signature);
  onOK(signature); // Callback from Component props
};

// Called after ref.current.readSignature() reads an empty string
const handleEmpty = () => {
  console.log("Empty");
};

// Called after ref.current.clearSignature()
const handleClear = () => {
  console.log("clear success!");
};

// Called after end of stroke
const handleEnd = () => {
  ref.current.readSignature();
};

// Called after ref.current.getData()
const handleData = (data) => {
  console.log(data);
};

  const imgWidth = 300;
const imgHeight = 300;


  const onPress = () =>{
  if(bg == 'white'){
      setBg('#EE2D7B');
      setIconColor('white');
      setCol({
        color: '#fff',
        textShadowColor: 'black', 
        textShadowRadius: 5, 
        textShadowOffset: {width: 1, height: 1},
        top: 0, left: 0, right: 0, bottom: 0
      });
    }else{
      setBg('white');
      setIconColor('black');
      setCol('');
    }
    
  }

  const [bg2, setBg2] = useState('white');
  const [iconColor2, setIconColor2] = useState('black');
  const onPress2 = () =>{
  if(bg2 == 'white'){
      setBg2('#EE2D7B');
      setIconColor2('white');

    }else{
      setBg2('white');
      setIconColor2('black');
    }
    
  }

  const [bg3, setBg3] = useState('white');
  const [iconColor3, setIconColor3] = useState('black');
  const onPress3 = () =>{
  if(bg3 == 'white'){
      setBg3('#EE2D7B');
      setIconColor3('white');
    }else{
      setBg3('white');
      setIconColor3('black');
    }
    
  }

  const [imgshow, setBoxContent] = useState('none');
  const [showletter, setShowLetter] =useState('flex');
  const [buttontext, setButtonText] =useState('Word Card');
  const [showtitle, setShowTitle] = useState(0);
  


  const Change = () =>{
    if(imgshow == 'none'){
      setBoxContent('flex');
      setShowLetter('none');
      setButtonText('Alphabet Card')
      setShowTitle(1);
    }else{
      setBoxContent('none');
      setShowLetter('flex');
      setButtonText('Word Card')
      setShowTitle(0);
    }
  }


  const {width}= useWindowDimensions();

  
  return (
    <View style={[styles.container,{width}]}>
      <StatusBar  backgroundColor={'transparent'} translucent={true}  />
        
       <View style={[styles.circles]}>
        <View style={[styles.circle,styles.circle1]}></View>
        <View style={[styles.circle,styles.circle2]}></View>
        <View style={[styles.circle,styles.circle3]}></View>
        <View style={[styles.circle,styles.circle4]}></View>
        <View style={[styles.circle,styles.circle5]}></View>
        <View style={[styles.circle,styles.circle6]}></View>
        <View style={[styles.circle,styles.circle7]}></View>
      </View> 

      <View style={[styles.main,{width}]}>
        <View style={styles.topnav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <AntDesign name='arrowleft' style={{
              fontSize: 28,
              color: 'white',
            }}/>
          </TouchableOpacity>
          <View style={styles.right_navbtns}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}  style={[styles.navbtn,{backgroundColor: bg}]} >
              <Image source={require('../assets/images/pen.png')} style={[styles.btnicon, { resizeMode: 'contain', tintColor:iconColor}]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress2} activeOpacity={0.7}  style={[styles.navbtn,{backgroundColor:bg2}]}>
              <Image source={require('../assets/images/edit.png')} style={[styles.btnicon, { resizeMode: 'contain', tintColor:iconColor2}]}/>
            </TouchableOpacity>
            <TouchableOpacity   onPress={onPress3} activeOpacity={0.7}  style={[styles.navbtn,{backgroundColor:bg3}]}>
              <Image source={require('../assets/images/sound.png')} style={[styles.btnicon, { resizeMode: 'contain', tintColor:iconColor3}]}/>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.center_box}>
            {/* <Text style={[styles.box_title,{opacity:showtitle}]}>Apple</Text>
            <View style={styles.box_content}>
              <Text style={[styles.box_value,{display:showletter},box_value_change ]}>Aa</Text>
              <Image source={require('../assets/images/abc/Apple.png')} style={[styles.box_value_img,{display:imgshow}]}/>
            </View> */}
       
     
        </View>
        <View style={{width: '100%', height: '100%'}}>
        <SignatureScreen
                ref={ref}
                bgSrc={require('../assets/images/abc/Abig.png')}
                overlaySrc={require('../assets/images/abc/Abig.png')}
                overlayWidth={imgWidth}
                overlayHeight={imgHeight}
                onOK={handleOK}
              />
        </View>
   
        <View style={styles.bottom_buttons}>
           <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
              <Entypo name='chevron-left' style={styles.bottom_arr_icon}/>
            </TouchableOpacity> 
            <TouchableOpacity onPress={Change} style={styles.bottom_btn} activeOpacity={0.7}>
              <Text style={styles.small_text}>A</Text>
              <Image source={require('../assets/images/abc/Apple.png')} style={styles.small_img}/>
              <Text style={styles.bottom_btn_text}>{buttontext}</Text>
            </TouchableOpacity> 
            <TouchableOpacity  activeOpacity={0.7}>
              <Entypo name='chevron-right' style={styles.bottom_arr_icon}/>
            </TouchableOpacity> 
        </View>
      </View>

    </View>
  )
}


export default ABC;