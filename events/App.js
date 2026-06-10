// // import { Button, Text, View } from "react-native";

import { Text } from "react-native";
import { View,FlatList, SectionList,TouchableOpacity  } from "react-native"

// // import { ScrollView, StyleSheet, Text, View } from "react-native";

// // const App = ()=>{
// //   const [show, setShow] = useState(false);
// //   const handleClick = ()=>{
// //     setShow(!show);
// //   }
// //   return (
// //     <View style={{marginTop: 50}}>
// //         <Button onPress={handleClick}></Button>
// //         {
// //           show && <Text>hello world</Text>
// //         }
// //     </View>
// //   )
// // }
// // export default App;

// // // list rendering & condtiona rendering
// // import { Button, Text, View } from "react-native";
// // import { useState } from "react";

// // const App = ()=>{
// //   const students = ["arun","bala","charan","dinesh"];
// //   const [show, setShow] = useState(false);
// //   const handleClick = ()=>{
// //     setShow(!show);
// //   }
// //   return (
// //     <View style={{marginTop: 50}}>
// //       <Button onPress={handleClick}></Button>
// // //         {
// //           show && students.map((student) => (
// //         <Text key={student}>{student}</Text>
// //       ))
// //         }
// //       {}
// //     </View>
// //   )
// // }

// // export default App;

// // scroll view
// import { ScrollView, StyleSheet, Text, View } from "react-native";

// const App = ()=>{
//   return (
//     <ScrollView>
//       <View style ={styles.table}>
//         <View style={styles.row}>
//           <Text style={styles.header}>Name</Text>
//           <Text style={styles.header}>Age</Text>
//           <Text style={styles.header}>City</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Arun</Text>
//           <Text style={styles.cell}>25</Text>
//           <Text style={styles.cell}>Chennai</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Bala</Text>
//           <Text style={styles.cell}>30</Text>
//           <Text style={styles.cell}>Madurai</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.cell}>Charan</Text>
//           <Text style={styles.cell}>28</Text>
//           <Text style={styles.cell}>Coimbatore</Text>
//         </View>
//       </View>
//     </ScrollView>
//   )
// }
// const styles = StyleSheet.create({
//   table:{
//     margin: 20,
//   },
//   row:{
//     flexDirection: "row"},
//   cell:{
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     textAlign: "center"
//   },
//   header:{
//     flex: 1,
//     borderWidth: 1,
//     padding: 10,
//     fontWeight: "bold",
//     backgroundColor: "#f0f0f0"
//   }

// })
// export default App;


// Flastlist
// const App =()=>{
//   const persons = [
//     {id: "1", name: "Arun", age: 25, city: "Chennai"},
//     {id: "2", name: "Bala", age: 30, city: "Madurai"},
//     {id: "3", name: "Charan", age: 28, city: "Coimbatore"},
//     {id: "4", name: "Dinesh", age: 27, city: "Trichy"},
//     {id: "5", name: "Ezhil", age: 29, city: "Salem"},
//     {id: "6", name: "Fazil", age: 26, city: "Erode"},
//     {id: "7", name: "Gokul", age: 31, city: "Vellore"},
//   ]
//   return (
//     <FlatList data={persons}
//     keyExtractor={(item) => item.id}
//     renderItem={({item})=>(
//       <View style={{flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ccc"}}>
//         <Text style={{flex: 1}}>{item.name}</Text>
//         <Text style={{flex: 1}}>{item.age}</Text>
//         <Text style={{flex: 1}}>{item.city}</Text>
//       </View>
//     )}>
//     </FlatList>
//   )
// }


// const App = ()=>{
//   const Data = [
//     {title:"Students", data: ["Arun","Bala","Charan"]},
//     {title:"Teachers", data: ["Dinesh","Ezhil","Fazil"]},
//     {title:"Principals", data: ["Gokul","Hari","Irfan"]},
//   ]
//   return (
//     <SectionList
//       sections={Data}
//       keyExtractor={(item) => item}
//       renderItem={({item}) => (
//         <View style={{padding: 10, borderBottomWidth: 1, borderColor: "#ccc"}}>
//           <Text>{item}</Text>
//         </View>
//       )}
//       renderSectionHeader={({section}) => (
//         <View style={{backgroundColor: "#f0f0f0", padding: 10}}>
//           <Text style={{fontWeight: "bold"}}>{section.title}</Text>
//         </View>
//       )}
//     />
//   )
// }
// export default App;

const App = ()=>{
  return (
    <View>
      <Text>hello world</Text>
      <TouchableOpacity onPress={()=> alert("Button Pressed")}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;