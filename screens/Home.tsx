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
            <Button  variant="link" colorScheme="secondary">
            <Link  to="/categories" onPress={() => props.setSelected(1)} >
                <Text style={{color: 'blue'}}>Show More</Text>
                </Link>

                
                </Button>

        </View>
    )
}

export default Home
