import React from 'react';
import { SectionList, SectionListProps } from 'react-native';

import { useSectionChunk, ISection } from './lib/use-section-chunk';

type Props<ItemT> = SectionListProps<ItemT> & {
    sections: ISection<ItemT>[];
    batch?: number
}

export function VirtualizedSectionList<ItemT>({ sections, onEndReached, batch = 10, ...props }: Props<ItemT>) {
    const [chunk, nextChunk] = useSectionChunk<ItemT>(sections, batch);
    return (
        <SectionList
            sections={chunk}
            onEndReachedThreshold={0.1}
            onEndReached={nextChunk as any}
            {...props}
        />
    );
};
