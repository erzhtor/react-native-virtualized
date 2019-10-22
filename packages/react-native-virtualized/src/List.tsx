import React from 'react';
import { FlatList } from 'react-native';
import { useChunk } from './lib/use-chunk';

type Props<ItemT> = FlatList<ItemT>['props'] & {
    data: ItemT[];
    batch?: number;
}

export function VirtualizedFlatList<ItemT>({ data, onEndReached, batch = 30, ...props }: Props<ItemT>) {
    const [chunk, nextChunk] = useChunk(data, batch);
    return (
        <FlatList
            data={chunk}
            onEndReached={nextChunk as any}
            onEndReachedThreshold={0.1}
            {...props}
        />
    );
};
