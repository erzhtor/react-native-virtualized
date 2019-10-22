import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { VirtualizedSectionList } from 'react-native-virtualized';

import { isEven, range } from '../lib';

export default function SectionListExample() {
    const sections = range(1, 100000).map(section => ({
        title: 'Section ' + section,
        data: range(1, 100)
    }))

    return (
        <VirtualizedSectionList
            style={styles.list}
            sections={sections}
            keyExtractor={item => `${item}`}
            renderItem={({ item }) => (
                <Text style={[styles.item, isEven(item) ? styles.isEven : styles.isOdd]}>
                    {`Item ${item}`}
                </Text>
            )}
            renderSectionHeader={({ section }) => (
                <Text style={styles.header}>
                    {section.title}
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
    header: {
        flex: 1,
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'grey',
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
