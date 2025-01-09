import React from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const AddLeadsDetailScreen: React.FC = () => {
  return (
    <View style={styles.container_header}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sales Pipeline</Text>
      </View>

      <View style={styles.header_1}>
        <Image
          source={require('../assets/images/back.png')} // Replace with your image URI
          style={styles.image_back}
        />
        <Text style={styles.headerText_1}>Add Lead Details</Text>

      </View>

      <ScrollView contentContainerStyle={styles.container}>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Visit</Text>
          <TextInput style={styles.input} placeholder="Date of Visit" />

          <Text style={styles.label}>Lead Name</Text>
          <TextInput style={styles.input} placeholder="Lead Name" />

          <Text style={styles.label}>Contact No</Text>
          <TextInput style={styles.input} placeholder="Contact No" keyboardType="phone-pad" />

          <Text style={styles.label}>Email ID</Text>
          <TextInput style={styles.input} placeholder="Email ID" keyboardType="email-address" />

          <Text style={styles.label}>City</Text>
          <TextInput style={styles.input} placeholder="City" />

          <Text style={styles.label}>State</Text>
          <TextInput style={styles.input} placeholder="State" />

          <Text style={styles.label}>Firm Name</Text>
          <TextInput style={styles.input} placeholder="Firm Name" />

          <Text style={styles.label}>Sector</Text>
          <TextInput style={styles.input} placeholder="Sector" />

          <Text style={styles.label}>Deals in Brand</Text>
          <TextInput style={styles.input} placeholder="Deals in Brand" />

          <Text style={styles.label}>Monthly Sales Value</Text>
          <TextInput style={styles.input} placeholder="Monthly Sales Value" keyboardType="phone-pad" />

          <Text style={styles.label}>Present mode of funding </Text>
          <TextInput style={styles.input} placeholder="Present mode of funding" />

          <Text style={styles.label}>Bank Value </Text>
          <TextInput style={styles.input} placeholder="Bank Value" keyboardType="phone-pad" />

          <Text style={styles.label}>Estimated Funding Required </Text>
          <TextInput style={styles.input} placeholder="Estimated Funding Required" keyboardType="phone-pad" />


          <Text style={styles.label}>Estimated Funding Required </Text>
          <TextInput style={styles.input} placeholder="Estimated Funding Required" keyboardType="phone-pad" />

          <Text style={styles.label}>Visit 1 Remark </Text>
          <TextInput style={styles.input} placeholder="Visit 1 Remark" />

          <Text style={styles.label}>Visit 2 Remark </Text>
          <TextInput style={styles.input} placeholder="Visit 2 Remark" />

          <Text style={styles.label}>Visit 2 Remark </Text>
          <TextInput style={styles.input} placeholder="Visit 2 Remark" />

          <Text style={styles.label}>Final Remark</Text>
          <TextInput style={styles.input} placeholder="Final Remark" />

          <Text style={styles.label}>Other Feild</Text>
          <TextInput style={styles.input} placeholder="Other Feild" />

          <View style={styles.container_bottom}>
            <TouchableOpacity >
              <Text style={styles.buttonText_bottom_red}>Clear All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_bottom_cancel} >
              <Text style={styles.buttonText_cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_bottom_save}>
              <Text style={styles.buttonText_save}>Submit</Text>
            </TouchableOpacity>
          </View>










        </View>




      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({

  container_header: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  header_1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  headerText_1: {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#333',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d9534f",
  },


  back_image: {
    width: 50, // Width of the image
    height: 50, // Height of the image
    margin: 10, // Optional: Adds space around the image
  },
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: "#fff",
  },

  container_bottom: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribute buttons with space between
    alignItems: "center", // Center buttons vertically
    padding: 4,

  },

  button_bottom: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007bff",
  },

  button_bottom_cancel: {
    backgroundColor: '#fff', // White background
    borderWidth: 2, // Border thickness
    borderColor: '#95969C', // Gray border color
    borderRadius: 4, // Makes the border round (half the width/height for a circular button)
    paddingVertical: 3, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    marginLeft: 40,
    alignItems: 'center', // Center the text inside
    justifyContent: 'center'

  },

  button_bottom_save: {
    backgroundColor: '#e30613', // White background
    borderRadius: 4, // Makes the border round (half the width/height for a circular button)
    paddingVertical: 5, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    alignItems: 'center', // Center the text inside
    justifyContent: 'center'

  },


  buttonText_bottom: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonText_cancel: {
    color: '#95969C', // Text color
    fontSize: 16, // Font size
    fontWeight: 400,
    fontFamily: 'Gilroy-SemiBold',
    textAlign: 'center'

  },

  container_back: {
    flex: 1,
    justifyContent: 'flex-start', // Aligns content vertically at the top
    alignItems: 'flex-start', // Aligns content horizontally at the left
    backgroundColor: '#f5f5f5',
  },
  image_back: {
    width: 22, // Width of the image
    height: 22, // Height of the image
    margin: 1, // Optional: Adds space around the image
  },

  buttonText_save: {
    color: '#fff', // Text color
    fontSize: 15, // Font size
    fontWeight: 700

  },

  buttonText_bottom_red: {
    color: "#E30613",
    fontSize: 13,
    fontWeight: "700",
    textAlign: 'center',
    fontFamily: 'poppins',
    textDecorationLine: 'underline'
  },

  header: {
    backgroundColor: "#f8d7da",
    padding: 16,
    flexDirection: "row",
    paddingLeft: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  inputContainer: {
    marginTop: 1,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 14,
  },
});

export default AddLeadsDetailScreen;
