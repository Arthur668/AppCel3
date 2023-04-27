import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import sol1 from './assets/sol.png'
import lua1 from './assets/lua.png'
import circulo1 from './assets/circulo.png'
import home1 from './assets/home.png'
import conf from './assets/conf.png'

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <Text style={styles.headtxt}> Settings </Text>
     </View>
     <Text style={styles.the}> Theme </Text>
    <TouchableOpacity style={styles.maincont1}>
    <Image source={circulo1} style={styles.circuloimg}/>
    <Text style={styles.aut}> Automatic </Text>
    <View style={styles.presbtn}>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.maincont2}>
    <Image source={sol1} style={styles.solimg}/>
    <Text style={styles.light}>Light</Text>
    <View style={styles.pressbtn2}>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.maincont3}>
    <Image source={lua1} style={styles.luaimg}/>
    <Text style={styles.dark}> Dark </Text>
     <View style={styles.pressbtn3}>
    </View>
    </TouchableOpacity>
    <Text style={styles.automati}>Automatic is only supported on operating systems that{'\n'}allow you to control the system-wide color scheme.</Text>
    <Text style={styles.midtxt}>App info</Text>
    <TouchableOpacity style={styles.subcont}>
    <Text style={styles.submaintxt}> Device ID                                   c167-of7c</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subcont2}>
    <Text style={styles.submaintxt2}> Client version                                   2.28.6</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subcont3}>
    <Text style={styles.submaintxt3}> Supported SDKs             SDKs: 46, 47, 48</Text>
    </TouchableOpacity>
    <View style={styles.footer}>
        <TouchableOpacity style={styles.to}>
        <Image source={home1} style={styles.homeimg}/>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.tou}>
        <Image source={conf} style={styles.comfimg}/>
        </TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#010101',
  },
  header:{
    backgroundColor:'#161B21',
    width:'100%',
    height:'7%',
    borderWidth:1,
    borderColor:'#25282E',
  
  },
headtxt:{
  position:'relative',
  left:15,
  top:15,
  fontWeight:'bolder',
  color:'#C9D2D9',
  fontSize:20,
  
},
the:{
  position:'relative',
  top:20,
  left:20,
  fontWeight:'bolder',
  color:'#8B939D',
},
aut:{
  position:'relative',
  left:40,
  bottom:4,
  fontWeight:'bolder',
  color:'#BCC5CC'
},
maincont1:{
  position:'relative',
  left:20,
  top:40,
  width:'90%',
  height:'6%',
  backgroundColor:'#161B21',
  borderWidth:1,
  borderColor:'#484F58',
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
},
circuloimg:{
  postion:'relative',
  left:15,
  top:13,
  width:17,
  height:17,
},
presbtn:{
position:'relative',
left:265,
bottom:20,
width:20,
height:20,
borderWidth:1,
borderRadius:50,
borderColor:'#6D767F'
},
maincont2:{
  position:'relative',
  left:20,
  top:40,
  width:'90%',
  height:'6%',
  backgroundColor:'#161B21',
  borderWidth:1,
  borderTop:'none',
  borderColor:'#484F58',
},
solimg:{
  position:'relative',
  left:12,
  top:10,
  width:23,
  height:23,
},
light:{
  position:'relative',
  left:46,
  bottom:9,
  fontWeight:'bolder',
  color:'#C9D2D9'
},
pressbtn2:{
position:'relative',
left:265,
bottom:25,
width:20,
height:20,
borderWidth:1,
borderRadius:50,
borderColor:'#6D767F'
},
maincont3:{
  position:'relative',
  left:20,
  top:40,
  width:'90%',
  height:'6%',
  backgroundColor:'#161B21',
  borderWidth:1,
  borderTop:'none',
  borderColor:'#484F58',
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10,
},
luaimg:{
  position:'relative',
  left:15,
  top:10,
  width:20,
  height:20,
},
dark:{
  position:'relative',
  left:43,
  bottom:9,
  fontWeight:'bolder',
  color:'#C9D2D9'
},
pressbtn3:{
  position:'relative',
left:265,
bottom:24,
width:20,
height:20,
borderWidth:1,
borderRadius:50,
borderColor:'#6D767F'
},
automati:{
  position:'relative',
  top:50,
  left:34,
  width:'100%',
  fontSize:11,
  color:'#8B949B'
},
midtxt:{
  position:'relative',
  top:100,
  left:35,
  fontWeight:'600',
  color:'#8B939D',
},
subcont:{
  position:'relative',
  left:20,
  top:117,
  width:'90%',
  height:'6%',
  backgroundColor:'#161B21',
  borderWidth:1,
  borderColor:'#484F58',
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
},
submaintxt:{
  position:'relative',
  left:10,
  top:15,
  fontWeight:'400',
  color:'#C8D1D8'
},
subcont2:{
  position:'relative',
  left:20,
  top:117,
  width:'90%',
  height:'6%',
  backgroundColor:'#161B21',
  borderTop:'none',
  borderWidth:1,
  borderColor:'#484F58',
},
submaintxt2:{
  position:'relative',
  left:10,
  top:15,
  fontWeight:'400',
  color:'#C8D1D8'
},
subcont3:{
  position:'relative',
  left:20,
  top:117,
  width:'90%',
  height:'6%',
  backgroundColor:'#161B21',
  borderTop:'none',
  borderWidth:1,
  borderColor:'#484F58',
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10,
},
submaintxt3:{
  position:'relative',
  left:10,
  top:15,
  fontWeight:'400',
  color:'#C8D1D8'
},
footer:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'9%',
    backgroundColor:'#161B21'
  },
  homeimg:{
    position:'relative',
    left:70,
    top:10,
    width:50,
    height:50,
  },
  comfimg:{
    position:'relative',
    bottom:40,
    left:220,
  },
  to:{
    width:'fit-content',
  }
});
