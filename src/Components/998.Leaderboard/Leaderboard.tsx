import React from 'react';
import { L1DynamicTable } from '../../Styled/Tables/L1DynamicTable';
import { ColumnConfig } from '../../Styled/Tables/TableProps';
import { useMemo } from 'react';

type LeaderboardEntry = {
    rank: number;
    name: string;
    score: number;
    country: string;
};

const columns: ColumnConfig<LeaderboardEntry>[] = [
    { id: 'rank', label: 'Rank', align: 'center' },
    { id: 'name', label: 'Name', align: 'left' },
    { id: 'score', label: 'Score', align: 'right' },
    { id: 'country', label: 'Country', align: 'left' },
];

const leaderboardData = [
    { rank: 1, name: 'Denise the concubine', score: 9500, country: 'USA' },
    { rank: 2, name: 'El Marco', score: 9200, country: 'Canada' },
    { rank: 3, name: 'Katarzyna Wojtysiak', score: 8900, country: 'UK' },
    { rank: 4, name: 'Mr Thicc', score: 8700, country: 'Australia' },
    { rank: 5, name: 'Alexandrus Maximus', score: 8500, country: 'Germany' },
    { rank: 6, name: 'Gino Pilotino', score: 12000, country: 'Germany' },
];

const keyExtractor = (row: LeaderboardEntry) => String(row.rank);

const handleRowClick = (row: LeaderboardEntry) => {
    console.log(`Clicked on row:`, row);
};

const useSortedLeaderboard = (data: LeaderboardEntry[]) => {
    const sortedData = useMemo(() => {
        return [...data]
            .sort((a, b) => b.score - a.score)
            .map((entry, index) => ({
                ...entry,
                rank: index + 1, // Dynamically assign rank based on sorted position
            }));
    }, [data]);

    return sortedData;
}

const Leaderboard = () => {
    const sortedData = useSortedLeaderboard(leaderboardData);

    return (
        <L1DynamicTable<LeaderboardEntry>
            columns={columns}
            data={sortedData}
            keyExtractor={keyExtractor}
            onRowClick={handleRowClick} // Optional
        />
    );
};

export default Leaderboard;
