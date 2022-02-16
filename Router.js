import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { NativeRouter, Route, Link, Routes } from "react-router-native";

import Home from './screens/Home'
import About from './screens/About'

interface Props {
    
}

const Router = (props: Props) => {
    return (
<NativeRouter>
    <View style={styles.container}>
    <View style={{    
        // flex: 1,
      justifyContent: 'flex-end'
    }}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>About</Text>
        </Link>
      </View>
      </View>
    <Routes>
    <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>

      {/* <Route path="/topics" component={Topics} /> */}
    </View>
  </NativeRouter>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      padding: 10
    },
    header: {
      fontSize: 20
    },
    nav: {

      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: 'salmon',
  
      
    },
    navItem: {
      flex: 1,
      alignItems: "center",
      padding: 10
    },
    subNavItem: {
      padding: 5
    },
    topic: {
      textAlign: "center",
      fontSize: 15
    }
  });

export default Router
