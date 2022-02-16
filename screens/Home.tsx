import React from 'react'
import { View, } from 'react-native'

import { Button, Heading, Text } from "native-base";
import { NativeRouter, Route, Link, Routes, useParams } from "react-router-native";

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <View>
            <Heading>
                Welcome to Home
            </Heading>
            <Text>
                Check out our categories page
            </Text>


        </View>
    )
}

export default Home
