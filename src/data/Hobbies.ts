export interface Hobbies {
    value: string;
    label: string;
    color: string;
    isFixed?: boolean;
    isDisabled?: boolean;
}

export const hobbies: readonly Hobbies[] = [
    { value: 'travelling', label: 'Travelling', color: '#FFA500' },
    { value: 'photography', label: 'Photography', color: '#FFA500' },
    { value: 'writing', label: 'Writing', color: '#FFA500' },
    { value: 'painting', label: 'Painting', color: '#FFA500' },
    { value: 'reading', label: 'Reading', color: '#FFA500' },
    { value: 'cooking', label: 'Cooking', color: '#FFA500' },
    { value: 'singing', label: 'Singing', color: '#FFA500' },
    { value: 'dancing', label: 'Dancing', color: '#FFA500' },
    { value: 'painting', label: 'Painting', color: '#FFA500' },
    { value: 'music', label: 'Music', color: '#FFA500' },
    {value : 'other',label : 'Other',color : '#FFA500'}
];

