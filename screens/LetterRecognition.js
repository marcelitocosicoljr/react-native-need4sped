import { View, Text, useWindowDimensions, StatusBar,StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import  colors  from '../assets/styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from '../assets/styles/Styles'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect, useRef}  from 'react'
import {letter_recognition} from '../database/letter_recognition';
import SignatureScreen from "react-native-signature-canvas";

const LetterRecognition = ({navigation,text}) => {
  const ref = useRef();

  const [bg, setBg] = useState('white');
  const [iconColor, setIconColor] = useState('black');
  const [box_value_change, setCol] = useState('');


  
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
      setButtonText('Number Card')
      setShowTitle(1);
    }else{
      setBoxContent('none');
      setShowLetter('flex');
      setButtonText('Word Card')
      setShowTitle(0);
    }
  }


  const {width}= useWindowDimensions();

  const chooseButton = [styles.btnchoice,{overflow:'hidden'}];

  const [itemNo, setItemNo] = useState(0)

  const imgWidth = 256;
const imgHeight = 256;
const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;
  

  const [question, setQuestion] = useState(letter_recognition[itemNo].question_letter);
  const [choice1, setChoice1] = useState(letter_recognition[itemNo].choice1);
  const [choice2, setChoice2] = useState(letter_recognition[itemNo].choice2);
  const [choice3, setChoice3] = useState(letter_recognition[itemNo].choice3);
  const [choice4, setChoice4] = useState(letter_recognition[itemNo].choice4);
  const [choice5, setChoice5] = useState(letter_recognition[itemNo].choice5);
  const [choice6, setChoice6] = useState(letter_recognition[itemNo].choice6);

  const [answer, setAnswer] = useState(letter_recognition[itemNo].answer);

  const [chooseAnswer, setChooseAnswer] =  useState('');

  const [isCorrect,setIsCorrect] = useState(null);

 

  const nextItem = () => {
    console.log(letter_recognition)
    const num = itemNo + 1
    setItemNo(num)
    setChoice1(letter_recognition[num].choice1);
    setChoice2(letter_recognition[num].choice2);
    setChoice3(letter_recognition[num].choice3);
    setChoice4(letter_recognition[num].choice4);
    setChoice5(letter_recognition[num].choice5);
    setChoice6(letter_recognition[num].choice6);
    setAnswer(letter_recognition[num].answer);
  }

  



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

      <View style={[styles.main,{width, paddingBottom:30}]}>
        <View style={styles.topnav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <AntDesign name='arrowleft' style={{
              fontSize: 28,
              color: 'white',
            }}/>
          </TouchableOpacity>
          <Text style={{color: 'white', fontFamily: 'mon_bold'}}>{itemNo + 1}/26</Text>
          <View style={styles.right_navbtns}>
            <TouchableOpacity   activeOpacity={0.7}  style={[styles.navbtn,{backgroundColor:bg3}]}>
              <Image source={question} style={[styles.btnicon, { resizeMode: 'contain', tintColor:iconColor3}]}/>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.center_box}>
           {
             isCorrect &&
             <>
              <Text style={[styles.box_title,{color:'#F19336', fontSize:18 }]}>Awesome!</Text>
              <Text style={[styles.box_title,{color:'#000', fontFamily:'mon_semibold', fontSize:12, top:55}]}>Proceed to the next letter.</Text>
            </>
            }
              {
             isCorrect === false &&
             <>
              <Text style={[styles.box_title,{color:'#F19336', fontSize:18 }]}>Oops!</Text>
              <Text style={[styles.box_title,{color:'#000', fontFamily:'mon_semibold', fontSize:12, top:55}]}>Can you try that again?</Text>
            </>
            }
            <View style={styles.box_content}>
              {/* if correct */}
              {isCorrect &&  <Image source={require('../assets/images/abc/correct.png')} style={[styles.box_value_img,{width:'80%',marginTop:40}]}/> }
              {/* if wrong */}
             { isCorrect === false && <Image source={require('../assets/images/abc/wrong.png')} style={[styles.box_value_img,{width:'80%',marginTop:40}]}/> }

             { isCorrect === null && <Image source={require('../assets/images/abc/Abig.png')} style={[styles.box_value_img,{width:'95%', marginTop:0}]}/>}
            </View>
        </View>
        <View style={styles.choices}>
        <TouchableOpacity onPress={()=>setChooseAnswer('1')}   activeOpacity={0.7}  style={ chooseAnswer === '1' ? chooseButton : styles.btnchoice}>
          {
              chooseAnswer === '1' &&
              <LinearGradient
              style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.65},{rotate:'45deg'}]}}  
              colors={['#F06754', '#E0348A','#F06754']}
              /> 
          } 

          { chooseAnswer === '1' ? 
          <Image source={choice1} style={[styles.choice_img,{tintColor:'white'}] }/>
          :
          <Image source={choice1} style={styles.choice_img} key="1"/>
           } 
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setChooseAnswer('2')}   activeOpacity={0.7}  style={ chooseAnswer === '2' ? chooseButton : styles.btnchoice}>
          {
              chooseAnswer === '2' &&
              <LinearGradient
              style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.65},{rotate:'45deg'}]}}  
              colors={['#F06754', '#E0348A','#F06754']}
              /> 
          } 

          { chooseAnswer === '2' ? 
          <Image source={choice2} style={[styles.choice_img,{tintColor:'white'}] }/>
          :
          <Image source={choice2} style={styles.choice_img} key="2"/>
           } 
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setChooseAnswer('3')}   activeOpacity={0.7}  style={ chooseAnswer === '3' ? chooseButton : styles.btnchoice}>
          {
              chooseAnswer === '3' &&
              <LinearGradient
              style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.65},{rotate:'45deg'}]}}  
              colors={['#F06754', '#E0348A','#F06754']}
              /> 
          } 

          { chooseAnswer === '3' ? 
          <Image source={choice3} style={[styles.choice_img,{tintColor:'white'}] }/>
          :
          <Image source={choice3} style={styles.choice_img} key="3"/>
           } 
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setChooseAnswer('4')}   activeOpacity={0.7}  style={ chooseAnswer === '4' ? chooseButton : styles.btnchoice}>
          {
              chooseAnswer === '4' &&
              <LinearGradient
              style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.65},{rotate:'45deg'}]}}  
              colors={['#F06754', '#E0348A','#F06754']}
              /> 
          } 

          { chooseAnswer === '4' ? 
          <Image source={choice4} style={[styles.choice_img,{tintColor:'white'}] }/>
          :
          <Image source={choice4} style={styles.choice_img} key="4"/>
           } 
          </TouchableOpacity>


          <TouchableOpacity onPress={()=>setChooseAnswer('5')}   activeOpacity={0.7}  style={ chooseAnswer === '5' ? chooseButton : styles.btnchoice}>
          {
              chooseAnswer === '5' &&
              <LinearGradient
              style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.65},{rotate:'45deg'}]}}  
              colors={['#F06754', '#E0348A','#F06754']}
              /> 
          } 

          { chooseAnswer === '5' ? 
          <Image source={choice5} style={[styles.choice_img,{tintColor:'white'}] }/>
          :
          <Image source={choice5} style={styles.choice_img} key="5"/>
           } 
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setChooseAnswer('6')}   activeOpacity={0.7}  style={ chooseAnswer === '6' ? chooseButton : styles.btnchoice}>
          {
              chooseAnswer === '6' &&
              <LinearGradient
              style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.65},{rotate:'45deg'}]}}  
              colors={['#F06754', '#E0348A','#F06754']}
              /> 
          } 

          { chooseAnswer === '6' ? 
          <Image source={choice6} style={[styles.choice_img,{tintColor:'white'}] }/>
          :
          <Image source={choice6} style={styles.choice_img} key="6"/>
           } 
          </TouchableOpacity>


        </View>
        <View style={styles.bottom_buttons_full}>
           <TouchableOpacity onPress={() => console.log(6 == chooseAnswer)} style={[styles.bottom_btn,styles.bottom_btn_full]} activeOpacity={0.7}>
              <Text style={styles.bottom_btn_text}>Submit</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => nextItem()} style={[styles.bottom_btn,styles.bottom_btn_full]} activeOpacity={0.7}>
              <Text style={styles.bottom_btn_text}>Submit</Text>
            </TouchableOpacity> 
        </View>
      </View>

    </View>
  )
}


export default LetterRecognition;