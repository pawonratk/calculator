import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StyleSheet, Text,Button,TouchableOpacity,TextInput,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default class App extends React.Component 
{
constructor(props)
{
super(props);
this.state = 
{
num1 : 0,
num2 : 0,
output :0,
count : 1,
answer : 0,
symbo:"",
number1 :"",
number2:""
}
}
btnPress(nam)
{
if(nam=="+")
{
this.setState({symbo:"+"});
this.setState({count:2});
this.setState({output:"+"});
}
else if(nam=="-")
{
this.setState({symbo:"-"});
this.setState({count:2});
this.setState({output:"-"});
}
else if(nam=="/")
{
this.setState({symbo:"/"});
this.setState({count:2});
this.setState({output:"/"});
}
else if(nam=="*")
{
this.setState({symbo:"*"});
this.setState({count:2});
this.setState({output:"*"});
}
else if(nam=="%")
{
this.setState({symbo:"%"});
this.setState({count:2});
this.setState({output:"%"});
}
else if(nam=="=")
{
if(this.state.symbo=="+")
{
var plus = this.state.num1 + this.state.num2;
this.setState({output:plus});
this.setState({count:1});
this.setState({symbo:""});
this.setState({number1:""});
this.setState({number2:""});
}
else if(this.state.symbo =="-")
{
var minus = this.state.num1-this.state.num2;
this.setState({output:minus});
this.setState({count:1});
this.setState({symbo:""});
this.setState({number1:""});
this.setState({number2:""});
}
else if(this.state.symbo=="*")
{
var multiply = this.state.num1*this.state.num2;
this.setState({output:multiply});
this.setState({count:1});
this.setState({symbo:""});
this.setState({number1:""});
this.setState({number2:""});
}
else if(this.state.symbo=="/")
{
var divide = this.state.num1/this.state.num2;
this.setState({output:divide});
this.setState({count:1});
this.setState({symbo:""});
this.setState({number1:""});
this.setState({number2:""});
}
else if(this.state.symbo=="%")
{
var mod = this.state.num1%this.state.num2;
this.setState({output:mod});
this.setState({count:1});
this.setState({symbo:""});
this.setState({number1:""});
this.setState({number2:""});

}
}
else if(nam=="AC")
{
this.setState({output:" "});
this.setState({count:1});
this.setState({symbo:""});
this.setState({number1:""});
this.setState({number2:""});
}
}
numberPress(number)
{
if(number=="0")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"0"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"0"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});

}
}
else if(number=="1")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"1"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});

}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"1"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}
}
else if (number=="2")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"2"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"2"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}
}
else if (number == "3")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"3"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"3"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}
}
else if (number == "4")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"4"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"4"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}
}
else if (number=="5")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"5"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"5"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}

} 
else if (number == "6")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"6"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});

}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"6"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}

}
else if (number== "7")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"7"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"7"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}

}
else if(number == "8")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"8"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"8"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}

}
else if (number == "9")
{
if(this.state.count == 1)
{
this.setState({number1:this.state.number1+"9"});
this.setState({output:this.state.number1});
this.setState({num1:Number(this.state.number1)});
}
else if(this.state.count == 2)
{
this.setState({number2:this.state.number2+"9"});
this.setState({output:this.state.number2});
this.setState({num2:Number(this.state.number2)});
}
}
}
render() 
{
return (

<LinearGradient
//https://uigradients.com/#Reef
colors={['#000000', '#000000', '#000000']}
style={{flex: 1}}
>
<View style={{flex: 1}}>
<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}><Text style = {styles.txtIn2}></Text>
</View>
<View style={{flex: 1}}>
<Text style = {styles.txtIn2}>{this.state.output}</Text> 
</View>
<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn3}
onPress={()=>this.btnPress("AC")}><Text style = {styles.txtIn3}>AC</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn3}><Text style = {styles.txtIn3}>+/-</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn3}
onPress={()=>this.btnPress("%")}><Text style = {styles.txtIn3}>%</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn4} 
onPress={()=>this.btnPress("/")}><Text style = {styles.txtIn4}>÷</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("7")}><Text style = {styles.txtIn5}>7</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("8")}><Text style = {styles.txtIn5}>8</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("9")}><Text style = {styles.txtIn5}>9</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn4}
onPress={()=>this.btnPress("*")}><Text style = {styles.txtIn4}>x</Text></TouchableOpacity>
</View>
</View>
<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("4")}><Text style = {styles.txtIn5}>4</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("5")}><Text style = {styles.txtIn5}>5</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("6")}><Text style = {styles.txtIn5}>6</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn4}
onPress={()=>this.btnPress("-")}><Text style = {styles.txtIn4}>-</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("1")}><Text style = {styles.txtIn5}>1</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("2")}><Text style = {styles.txtIn5}>2</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress("3")}><Text style = {styles.txtIn5}>3</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn4} 
onPress={()=>this.btnPress("+")}><Text style = {styles.txtIn4}>+</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<View style={{flex: 2, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn6}
onPress={()=>this.numberPress("0")}><Text style = {styles.txtIn6}>0</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}} >
<TouchableOpacity style={styles.btn5}
onPress={()=>this.numberPress(",")}><Text style = {styles.txtIn5}>,</Text></TouchableOpacity>
</View>
<View style={{flex: 1, backgroundColor: 'black'}}>
<TouchableOpacity style={styles.btn4} 
onPress={()=>this.btnPress("=")}><Text style = {styles.txtIn4}>=</Text></TouchableOpacity>
</View>
</View>
</View>
</LinearGradient>
);
}
}
const styles = StyleSheet.create({
txtIn2:{
textAlign: 'right',
fontSize:50,
padding: 10,
margin:1,
color:'white'},
btn3:{
alignItems: 'center',
height:60,
backgroundColor: '#BEBEBE',
padding: 10,
margin:5,
borderRadius: 60},
txtIn3:{
textAlign: 'center',
fontSize:25,
color:'black'},
btn4:{
alignItems: 'center',
height:60,
backgroundColor: '#FF9900',
padding: 10,
margin:5,
borderRadius: 60},
txtIn4:{
textAlign: 'center',
fontSize:27,
color:'white'},
txtIn5:{
textAlign: 'center',
fontSize:27,
color:'white'},
btn5:{
alignItems: 'center',
height:60,
backgroundColor: '#696969',
padding: 10,
margin:5,
borderRadius: 60},
btn6:{
alignItems: 'left',
height:60,
width:145,
backgroundColor: '#696969',
padding: 10,
margin:5,
borderRadius: 60},
txtIn6:{
textAlign: 'left',
fontSize:30,
color:'white'},
}
)
