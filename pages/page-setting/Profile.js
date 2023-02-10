import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Avatar } from 'react-native-paper';
export default function Profile({ route }) {
  const { data, profile } = route.params;

  const user = data.find((c) => c.username === profile);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <View>
      {user ? (
        <View style={{marginVertical:50}}>
          <View style={{alignItems:"center"}}>
            <View style={{marginBottom:10}}>
              {user.image ? 
                <Avatar.Image size={150} source={{uri: user.image}} />
                :
                <Avatar.Image size={150} source={{uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png"}} />
              }
            </View>
            <Text style={{fontSize:24}}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={user?.username}
              
            />
            <Text style={{fontSize:24}}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={user?.password}
            />
            <Text style={{fontSize:24}}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={user?.email}
            />
          </View>
        </View>
      ) : (
        <View style={{alignItems:"center",marginTop:50}}>
          <Text style={{fontSize:42}}>Not signed in yet</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 55,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cdcccc",
    borderRadius: 25,
    textAlign: "center",
  },
});
