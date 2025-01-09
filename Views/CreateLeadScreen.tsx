import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

const CreateLeadScreen = () => {
  return (

    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Recording Of Lead</Text>
      </View>

      <View style={styles.header_1}>
              <Image
                source={require('../assets/images/back.png')} // Replace with your image URI
                style={styles.image_back}
              />
              <Text style={styles.headerText_1}>Add Lead Details</Text>
      
      </View>


      {/* Text */}
      <Text style={styles.infoText}>
          You Haven’t Recorded Any Lead Yet{'\n'}Click On The Button Below To Record A Lead
      </Text>

      {/* Image */}
      <Image
          source={require('../assets/images/cuate.png')} // Replace with your actual image URI or require() path
          style={styles.image}
        />

     <View style={styles.container_button}>
        <Button title="Record of Lead"
        color="#E30613"  />
      </View>

        

      
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container_button: {
    marginTop:'10%',
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',  // Centers content horizontally
    backgroundColor: '#fff', // Optional background color
  },

  image_back: {
    width: 22, // Width of the image
    height: 22, // Height of the image
    margin: 1, // Optional: Adds space around the image
  },
  
  

  image: {
    width: 200,
    height: 200,
    marginTop:30,
    padding:10,
    marginLeft:70,
    alignItems:'center'
  },

  infoText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight:'600',
    color: '#E30613',
    marginTop:50,
    lineHeight: 28,
  },

  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft:25,
    backgroundColor: '#ffe9e9',
  },
  header_1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  headerText_1: {
    fontSize: 15,
    paddingLeft:3,
    fontWeight: 'bold',
    color: '#333',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#ff0000',
  },
  tabText: {
    fontSize: 16,
    color: '#555555',
  },
  activeTabText: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
 
  arrow: {
    fontSize: 16,
    color: '#aaa',
  },

  backArrow: {
    fontSize: 24,
    color: '#333',
    marginRight: 10,
  },



});

export default CreateLeadScreen;
