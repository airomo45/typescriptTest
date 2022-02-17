import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'

import axios from 'axios';
const baseUrl = 'https://reqres.in';


interface Props {
    
}

const Categories = (props: Props) => {

    const fetchUser = async () => {
        const url = `${baseUrl}/api/users/1`;
        const response = await axios.get(url);
        console.log(response.data);
      };

      useEffect(() => {
          fetchUser()
     
      }, [])
      


    return (
        <View>
            <Text>Categories Page</Text>
        </View>
    )
}

export default Categories
