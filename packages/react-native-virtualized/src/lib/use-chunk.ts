import { useState, useEffect } from 'react';

export function useChunk<ItemT>(items: ItemT[], batch: number): [ItemT[], Function] {
	const [chunk, setChunk] = useState<ItemT[]>([]);

	useEffect(() => {
		setChunk(items.slice(0, batch));
	}, [items]);

	const nextChunk = () => {
		setChunk([...chunk, ...items.slice(chunk.length, chunk.length + batch)]);
	};

	return [chunk, nextChunk];
}
