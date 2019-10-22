import { useState, useEffect } from 'react';

export interface ISection<T> {
	data: T[]
}

export function useSectionChunk<ItemT>(sections: ISection<ItemT>[], batch: number): [ISection<ItemT>[], Function] {
	const [chunk, setChunk] = useState<ISection<ItemT>[]>([]);
	const [count, setCount] = useState(0);

	const nextChunk = () => {
		const newCount = count + batch;
		setCount(newCount);
		let counter = newCount;
		const newChunk: ISection<ItemT>[] = [];
		for (const { data, ...rest } of sections) {
			const section = rest as ISection<ItemT>;
			section.data = data.slice(0, counter);
			newChunk.push(section);
			counter -= section.data.length + 1;
			if (counter <= 0){
				break;
			}
		}
		setChunk(newChunk);
	};

	useEffect(() => nextChunk(), [sections]);

	return [ chunk, nextChunk ];
}
