
import React from "react";
import { Ionicons } from "@expo/vector-icons"
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image }
 from "react-native";

interface Lead {
  id: string;
  status: "Warm" | "Cold" | "Hot";
  companyName: string;
  contactNumber: string;
  email: string;
  city: string;
  dateOfVisit: string;
}

const DATA: Lead[] = [
  {
    id: "1",
    status: "Warm",
    companyName: "XYZ Company PVT. LTD.",
    contactNumber: "+91 98889 23222",
    email: "xyz@example.com",
    city: "Gandhinagar",
    dateOfVisit: "10-02-2023",
  },
  {
    id: "2",
    status: "Cold",
    companyName: "XYZ Company PVT. LTD.",
    contactNumber: "+91 98889 23222",
    email: "xyz@example.com",
    city: "Gandhinagar",
    dateOfVisit: "10-02-2023",
  },
  {
    id: "3",
    status: "Hot",
    companyName: "XYZ Company PVT. LTD.",
    contactNumber: "+91 98889 23222",
    email: "xyz@example.com",
    city: "Gandhinagar",
    dateOfVisit: "10-02-2023",
  },
];

const SalesPipelineView: React.FC = () => {
  const renderItem = ({ item }: { item: Lead }) => {
    const statusStyles =
      item.status === "Warm"
        ? styles.warm
        : item.status === "Cold"
        ? styles.cold
        : styles.hot;

    return (
      <View style={styles.card}>
        <View style={[styles.statusBadge, statusStyles]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>
            <Text style={styles.label}>Company Name: </Text>
            {item.companyName}
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.label}>Contact No: </Text>
            {item.contactNumber}
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.label}>Email ID: </Text>
            {item.email}
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.label}>City: </Text>
            {item.city}
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.label}>Date of Visit: </Text>
            {item.dateOfVisit}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sales Pipeline</Text>
      </View>

         <View style={styles.header_1}>
               <Image
                 source={require('../assets/images/back.png')} // Replace with your image URI
                 style={styles.image_back}
               />
               <Text style={styles.headerText_1}>Sales Pipeline Status</Text>
       
             </View>

        <View style={styles.container_1}>
          <View style={styles.pipelineContainer}>
            <Text style={styles.pipelineText}>Pipeline</Text>
            <View style={styles.badge}>
            <Text style={styles.badgeText}>1025</Text>
            </View>
        </View>
      
        <View style={styles.searchBox}>
            
            {/*<Ionicons name="search-outline" size={20} color="#999" style={styles.icon} />*/}
        
            <TextInput
            style={styles.input}
            placeholder="Search Leads"
            placeholderTextColor="#999"
            />
        </View>

        <View style={styles.container_img}>
        <View style={styles.angledView}>
          <Image
            source={require('../assets/images/funal.png')} // Replace with your image URL
            style={styles.image}
          />
        </View>
    </View>
        




        
    </View>


      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  container_img: {
    width: 30, // Adjust as needed for your design
    height: 30,
    marginLeft:8,
    padding:10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E30613',
  },

  angledView: {
    width: 10, // Adjust as needed for your design
    height: 10,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }], // Rotates the view
     
  },
  image: {
    width: 15,
    height: 15,
    padding:8,
    resizeMode: 'contain', // Ensures the image fits within the specified size
    transform: [{ rotate: '-45deg' }], // Counter-rotates the image
  },

  image_back: {
    width: 22, // Width of the image
    height: 22, // Height of the image
    margin: 1, // Optional: Adds space around the image
  },


  searchBox: {
    flex: 1,
    width: '80%',
    height:38,
    marginLeft:5,
    marginTop:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    
    
   
  },
  icon: {
    marginRight: 8,
  },
  input: {
    width: '100%', // Adjust width as needed
    height: 40,
    fontSize:15,
    },
  filterButton: {
    marginLeft: 8,
    backgroundColor: "#ff0000",
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  container_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical:3,
    backgroundColor: "#fafafa", // Light gray background
  },
  pipelineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pipelineText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily:'Inter'
  },
  badge: {
    backgroundColor: '#FFE9E9', // Light gray background
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 5,
  },
  badgeText: {
    color: '#888', // Gray text color
  },
 
  searchText: {
    marginLeft: 5,
    color: 'gray',
  },

  circleContainer: {
    width: 26,
    height: 26,
    borderRadius: 15, 
    paddingBottom:5,
    backgroundColor: '#eaecf0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    fontSize: 18, 
    fontWeight: 'bold', 
  },

  arrowImage: {
    width: 22,
    height: 22,
  },

   backArrow: {
    fontSize: 24,
    color: '#333',
    marginRight: 10,
  },

  headerText_1: {
    fontSize: 15,
    paddingLeft:10,
    fontWeight: 'bold',
    color: '#333',
  },

  header_1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    },

  header: {
    backgroundColor: "#f8d7da",
    padding: 16,
    flexDirection: "row",
    paddingLeft:25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d9534f",
  },
  
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
    elevation: 5,
  },
  statusBadge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  warm: {
    backgroundColor: "#FDC730",
  },
  cold: {
    backgroundColor: "#0681E3",
  },
  hot: {
    backgroundColor: "#FF5656",
  },
  statusText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  cardContent: {
    marginTop: 8,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#007bff",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SalesPipelineView;
