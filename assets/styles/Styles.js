import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export const colors = {
    white: '#ffffff',
    black: '#263238',
    green: '#329F60',
    red: '#C04345',
    blue: '#0043F9',
    pink: '#F749A4',
    darkblue: '#383660',
    yellow: '##FFD426',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    mainbg: '#7B5FED',
}

export const styles = StyleSheet.create({


    //===============================================
    // HOME SCREEN DESIGN                          //
    //==============================================
    container: {
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: colors.mainbg,
      position: 'relative',
    },
    top_circle: {
      backgroundColor: '#604FB5',
      padding: '50%',
      borderRadius: 360,
      maxWidth: '100%',
      marginTop: '-45%',
      transform: [{scale: 1.2}],
      position: 'absolute',
      top: 0,
    },
    top_circle2: {
      backgroundColor: '#6E57D1',
      padding: '50%',
      borderRadius: 360,
      maxWidth: '100%',
      marginTop: '-50%',
      transform: [{scale: 1.3}],
      zIndex: -1,
      position: 'absolute',
      top: 40,
    },
    home_header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 40,
      paddingTop: 50,
      alignItems: 'center',
    },
    
    body:{
      paddingHorizontal: 30,
    },
    reg_text: {
      color: colors.white,
      fontFamily: 'mulish_regular',
      fontSize: 20,
      letterSpacing:1,
    },
    primary_text: {
      color: colors.white,
      fontFamily: 'opensans_xbold',
      fontSize: 30,
      letterSpacing:1,
    },
    user_con: {
      padding: 4,
      backgroundColor: '#FFD353',
      borderRadius: 50,
    },
    user: {
      width: 45,
      height: 45,
      resizeMode: 'contain',
      
    },
    heading_con: {
      paddingVertical: 20,
      flexDirection: 'row',
      width: '100%',
      paddingLeft: 5,
    
    },
    heading_reg: {
      color: colors.white,
      fontFamily: 'mon_bold',
      fontSize: 24,
      width: '100%',
      letterSpacing: 1,
      textAlign: 'left'
    },
    dashboard_halfs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      display: 'flex',
      padding: 0,
      
    },
    btn_dashboard: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 25,
      shadowColor: '#000',
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity:  1,
        shadowRadius: 3,
        elevation: 5,
      backgroundColor:'#5D3DE5',
    },
    dashboard: {
      width: 148,
      height: 200,
      padding: 18,
    },
    dashboard_full: {
      marginBottom: 18,
    },
    dashboard_full_width: {
      width: '100%',
      height: 110,
      paddingVertical: 15,
      paddingHorizontal: 5,
      
    },
    dashboard_title: {
      color: colors.white,
      fontFamily: 'mon_bold',
      fontSize: 20,
      width: '100%',
      letterSpacing: 1,
      textAlign: 'left'
    },
    dashboard_title_sm: {
      fontSize: 19,
    },
    label_con:{
      paddingHorizontal: 3,
      paddingVertical: 1,
      backgroundColor: 'rgba(255,255,255, .3 )',
      borderRadius:30,
      width: 50,
      alignItems:'center',
      marginBottom: 5,
    },
    top_label:{
      color: colors.white,
      fontFamily: 'mon_semibold',
      letterSpacing:1,
      textAlign: 'center',
      opacity: 1,
      fontSize: 12,
      
    },
   
    dashboard_img: {
      position: 'absolute',
      width:'100%',
      height: 125,
      resizeMode: 'contain',
      zIndex:1,
      bottom: -10,
      right:10,
      transform: [{scale: 1.20}],
  
    },
    dashboard_img_left: {
      width: 140,
      position: 'absolute',
      height: 125,
      resizeMode: 'contain',
      zIndex:1,
      left:4,
      top:-8,
      transform: [{scale: 1.08}],
  
    },
    right_texts: {
      paddingLeft: '50%',
      paddingRight:18,
    },
    right_title: {
      color: colors.white,
      fontFamily: 'mon_bold',
      fontSize: 12,
    },
    right_description: {
      color: colors.white,
      fontFamily: 'mon_reg',
      fontSize: 10,
      lineHeight: 12,
    },
    status: {
      color: colors.white,
      fontFamily: 'mon_semibold',
      marginTop:5,
      fontSize: 10,
    },
    bar: {
      padding: 1.5,
      backgroundColor: 'transparent',
      width: '100%',
      marginTop:3,
      borderRadius:30,
      position: 'relative',
      borderWidth: 1,
      borderColor: colors.white,
      overflow: 'hidden',
    },
    barstat: {
      height: 4,
      position: 'absolute',
      backgroundColor: colors.white,
      borderRadius:30,
      left:0,
    },
    barstat100:{
      width: '103%',
    },
    barstat75: {
      width: '75%',
    },
    barstat50: {
      width: '55%',
    },
    barstat25: {
        width: '35%',
    },
    barstat0: {
        width: '1%',
    },

    //===============================================
    // ABC SCREEN DESIGN                          //
    //==============================================
    circles:{
        position:'absolute',
        height: '100%',
        width: '100%',
        zIndex:-1,

    },
    circle: {
        overflow: 'hidden',
        backgroundColor: '#8B72EA',
        position: 'absolute',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity:  1,
        shadowRadius: 3,
        elevation: 15,
        
    },
    circle1: {
        width: 70,
        height:70,
        top: -30,
        left:180,
        transform: [{scale:1.5}],
    },
    circle2: {
        width: 70,
        height:70,
        top: 160,
        left:-20,
        transform: [{scale:1.8}],
    },
    circle3: {
        width: 70,
        height:70,
        top: 190,
        left:300,
        transform: [{scale:1.3}],
    },
    circle4: {
        width: 70,
        height:70,
        top: 500,
        left:100,
        transform: [{scale:1}],
    },
    circle5: {
        width: 70,
        height:70,
        top: 570,
        left:320,
        transform: [{scale:1.4}],
    },
    circle6: {
        width: 70,
        height:70,
        bottom: 0,
        left:0,
        transform: [{scale:1.4}],
    },
    circle7: {
        width: 70,
        height:70,
        bottom: 0,
        left:250,
        transform: [{scale:2}],
    },
    main: {
        paddingHorizontal:20,
    },

    topnav: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        zIndex:9,
        alignItems: 'center',
        justifyContent:'space-between',
        display: 'flex',
    },
    right_navbtns: {
        flexDirection: 'row',
    },
    navbtn: {
        width: 35,
        height: 35,
        borderRadius:50,
        marginLeft:7,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1,
        
        
    },
    btnicon:{
        width: 20,
        resizeMode: 'contain',
        
    },
    main: {
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems:'center',
      height: '100%',
      paddingHorizontal: 20,
      paddingTop:50,
      paddingBottom:90,
    },
    center_box: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      width: '90%',
      alignContent:'center',
      height: 320,
      padding: 20,
      borderRadius: 20,
      position:'relative',
      shadowColor: '#000',
        shadowOffset: { width: -5, height: 2 },
        shadowOpacity:  10,
        textShadowRadius: 10,
        elevation: 6,
    },
    box_title:{
      position: 'absolute',
      top: 20,
      fontSize:22,
      fontFamily: 'mon_black',
      color: '#383660',
    },
    box_content: {
      // backgroundColor: 'grey',
      width:'100%',
      justifyContent:'center',
      alignItems: 'center',
      height: 200,
      padding: 0,
    },
    box_value: {
      fontSize: 144,
      fontFamily: 'mon_black',
      letterSpacing:10,
      marginTop: -20,

      //default 
      color: '#383660',
      textShadowColor: 'rgba(0, 0, 0, 0.35)',
      textShadowOffset: {width: -1, height: 2},
      textShadowRadius: 3,
      
      
    },
    box_value_change:{
      //if clicked no btn1
      color: '#fff',
      textShadowColor: 'black', 
      textShadowRadius: 5, 
      textShadowOffset: {width: 1, height: 1},
      top: 0, left: 0, right: 0, bottom: 0
    },

    box_value_img: {
      resizeMode: 'contain',
      width: '95%',
      marginTop: 15,
    },
    bottom_buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    bottom_buttons_full:{
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    bottom_btn:{
      backgroundColor:'#383660',
      shadowColor: '#000',
        shadowOffset: { width: -5, height: 2 },
        shadowOpacity:  10,
        textShadowRadius: 10,
        elevation: 6,
      width: '65%',
      paddingLeft: 5,
      justifyContent: 'center',
      alignItems:'center',
      paddingVertical: 15,
      borderRadius:15,
      position: 'relative',
    },
    bottom_btn_full:{
      width: '100%',
      backgroundColor: '#E8545C',
      paddingVertical: 18,
    },
    bottom_btn_text:{
      color: '#fff',
      fontFamily: 'mulish_semibold',
      fontSize: 18,
      letterSpacing:1,
    },
    bottom_arr_icon:{
      fontSize: 60,
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowRadius: 10, 
      textShadowOffset: {width: 1, height: 1},
      
    },
    small_text: {
      position: 'absolute',
      justifyContent: 'center',
      left: 15,
      color: '#fff',
      fontFamily: 'mon_bold',
      fontSize: 20,
    },
    small_img: {
      position: 'absolute',
      left: 30,
      resizeMode: 'contain',
      width: 18,
      transform: [{translateY: 9},{translateX: -4}]
    },
    //LETTER RECOGNITION DESIGNS

    choices:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap:'wrap',
      width: '90%',
    },
    btnchoice: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding:10,
      width: '30%',
      height: 95,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:15,
    },
    choice_img:{
      width:47,
      resizeMode: 'contain',
      
    },
    //Object Recognition Design

    object_title: {
      backgroundColor: '#383660',
      width: '70%',
      paddingVertical:20,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
    },
    object_text:{
      color:'white',
      fontFamily: 'mulish_semibold',
      letterSpacing: 1,
      fontSize:20,
    },

    //Account Design

    top_design: {
      position:'absolute',
      width:'100%',
      height: '50%',
      backgroundColor:'#604EB5',
      borderBottomRightRadius: 60,
      borderBottomLeftRadius: 60,
      overflow: 'hidden',
    },
    curveimg:{
      width:'50%',
      resizeMode: 'contain',
      position: 'absolute',

    },
    curveimg1:{
      right: '-22%',
      transform: [{scale:.6}],
      top: '-15%',

    },
    curveimg2:{
      right: '-16%',
      transform: [{scale:.8}],
      top: '-8%',
    },
    curveimg3:{
      right: '-5%',
      transform: [{scale:1.1}],
      top: '0%',
    },
    curveimg4:{
      left: '-2%',
      transform: [{scale:1.15},{rotate:'165deg'}],
      bottom: 0,

    },
    curveimg5:{
      left: '-12%',
      transform: [{scale:1},{rotate:'165deg'}],
      bottom: '-5%',

    },
    
    curveimg6:{
      left: '-18%',
      transform: [{scale:.7},{rotate:'160deg'}],
      bottom: '-13%',
    },
    progress_box:{  
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative',
      zIndex: -1,
    },
    report_stat: {
      width:140,
      height: 140, 
      borderRadius: 360, 
      justifyContent: 'center', 
      alignItems:'center',
      position: 'relative',
      overflow: 'hidden',
      marginVertical:20,
    },
    
    gradient_stat:{
      width:140,
      height:140,
      position: 'absolute',
      left: 0,
      borderRadius:360,
      overflow:'hidden',
    },
    greylayer:{
      width:'100%',
      height:70,
      backgroundColor: '#CBCBCB',
      position: 'absolute',
      left: '50%',
      bottom: 0,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      overflow:'hidden',

    },
    topics_bar:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    topic:{
      alignItems:'center',
      justifyContent: 'center',
      paddingHorizontal:10,
    },
    topic_text:{
      paddingTop:5,
      fontFamily:'mon_reg',
      fontSize:12,
      textAlign:'center'
    },

    // Account Form
    account_form:{
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '90%',
      paddingTop:20,
      paddingBottom:10,
    },
    account_field:{
      flexDirection: 'row',
      width:'100%',
      paddingVertical: 20,
    },
    acc_field_label:{
      color: 'white',
      fontFamily: 'mulish_regular',
      fontSize: 14,
      width:'38%',
    },
    accoung_img_con:{
      backgroundColor: '#383660',
      width: 70,
      height:70,
      borderRadius:360,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    account_img:{
      width: 40,
      height: 40,
      resizeMode: 'contain',
      borderRadius:360,

    },
    account_img_pick:{
      width: 65,
      height: 65,
      position:'absolute',
      zIndex:1,
    },
    upload_btn:{
      color: '#41C2FF',
      fontFamily: 'mulish_semibold',
      marginTop:17,
      fontSize: 14,
    },
    field_value: {
      fontFamily: 'mulish_semibold',
      fontSize: 14,
      color: 'white',
      width: '62%'
    },
    gender:{
      width: 35, 
      height:35, 
      borderRadius:360,
      justifyContent:'center',
      alignItems:'center',
    },
    //
    complete_con:{
      paddingTop: '30%',
      
    },
    complete_img:{
      width:'100%',
      marginLeft: -50,
      transform: [{scale:1.3}],
      resizeMode: 'contain',

    },
    complete_circle1:{
      width: 150,
      height: 150,
      borderRadius:360,
      position: 'absolute',
      top: -60,
      right: 0,
    },
    complete_circle2:{
      width: 90,
      height: 90,
      borderRadius:360,
      position: 'absolute',
      top: '46%',
      right: -10,
    },
    complete_circle3:{
      width: 340,
      height: 340,
      borderRadius:360,
      position: 'absolute',
      top: '10%',
      left: -15,
    },
    //Lessons
    lesson_img1:{
      width:'100%',
      opacity: .9,
      top: -50,
      position: 'absolute',
    },
    lesson_img2:{
      width:'100%',
      top: -50,
      position: 'absolute',
    },
    lesson_img:{
      width:'82%',
      resizeMode:'contain',
      marginTop:'-50%',
    }





  });