/**
 * Sample React Native App By Rananjaya
 * https://github.com/Rananjaya
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Url = 'https://facebook.github.io/react-native/movies.json'
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLoding :true,
      dataSource:null,
    }
  }

  componentDidMount () {
    return fetch(Url)
    // console.log("Concat Values",Url.concat())
        .then((response) => response.json()) //take the response from API and convert it in to json object
        .then((responseJson) =>{
             //we Have data now
             console.log("We Have data",responseJson.movies);
             this.setState({
               isLoding:false,
               dataSource:responseJson.movies,
               
             })
        })
        .catch((error) =>{
            console.error(error);
        });

        console.log("State Data", this.state.dataSource)
  
  }

  render(){
    if(this.state.isLoding){
          return(
            <View style={{flex:1,padding:20}}>
              <ActivityIndicator />
            </View>
          )
    }
    return(
      <View style={styles.container}>
         <FlatList
             data={this.state.dataSource}
             renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
             keyExtractor={item => item.id}
         />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
  flex:1
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


