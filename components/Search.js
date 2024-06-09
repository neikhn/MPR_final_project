import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        // Perform search logic here
        // You can use APIs, filter data, or any other search mechanism
        // For now, let's just set the search result to be similar to the input
        setSearchResult([searchTerm, searchTerm.toUpperCase(), searchTerm.toLowerCase()]);
    };

    return (
        <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', marginTop: 140, marginBottom: 20}}>
            <View style={{flexDirection: "row",}}>
                <TextInput
                    style={{ width: '75%', height: 40, borderColor: 'gray', borderWidth: 1, padding: 10,}}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                />
                <Button title="Search" onPress={handleSearch} />
            </View>
            
            <View>
                {searchResult.map((result, index) => (
                    <Text key={index}>{result}</Text>
                ))}
            </View>
        </View>
    );
};

export default Search;
