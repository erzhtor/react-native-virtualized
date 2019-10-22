import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { VirtualizedFlatList } from 'react-native-virtualized';

import { isEven, range } from '../lib';

export default function FlatListExample() {
    const items = range(1, 100000)

    return (
        <VirtualizedFlatList
            style={styles.list}
            data={items}
            keyExtractor={item => `${item}`}
            renderItem={({ item }) => (
                <Text style={[styles.item, isEven(item) ? styles.isEven : styles.isOdd]}>
                    {`Item ${item}`}
                </Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
    },
    item: {
        flex: 1,
        padding: 20,
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    isEven: {
        backgroundColor: 'lightgray',
    },
    isOdd: {}
});
