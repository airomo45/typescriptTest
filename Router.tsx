import React from 'react'
import { View, StyleSheet } from 'react-native'

import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Button, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { NativeRouter, Route, Link, Routes, useParams } from "react-router-native";

import Home from './screens/Home'
import Categories from './screens/Categories'


interface Props {

}



const Router = (props: Props) => {

  const [selected, setSelected] = React.useState(0);

  console.log(selected);


  return (
    <NativeRouter>

      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">

        <Center flex={1}>
          <Routes>
            <Route exact path="/" element={<Home setSelected={setSelected} />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Center>

        <HStack bg="primary.700" alignItems="center" safeAreaBottom shadow={6}>
          <Link to="/" style={styles.navItem} onPress={() => setSelected(0)}>


                <View >
                <Center>

                  <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? "home" : "home-outline"} />} color={selected === 0 ? 'white' : 'darkText'} size="sm" />
                  <Text color={selected === 0 ? 'white' : 'darkText'} fontSize="12">
                    Home
                  </Text>
                  </Center>
                </View>


              </Link>
     
            <Link to="/categories"  style={styles.navItem} onPress={() => setSelected(1)}  >



                <View >
                  <Center>
                  <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? "clipboard-list" : "clipboard-list-outline"} />} color={selected === 1 ? 'white' : 'darkText'} size="sm" />
                  <Text color={selected === 1 ? 'white' : 'darkText'} fontSize="12">
                    Catagories
                  </Text>
                  </Center>
              
                </View>


            </Link>

        </HStack>
      </Box>



    </NativeRouter>
  )
}

const styles = StyleSheet.create({

    navItem: {
      flex: 1,
      alignItems: 'center',
      padding: 10
    }

  });

export default Router
