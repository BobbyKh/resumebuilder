export interface Language {
    value: string;
    label: string;
    color: string;
    isFixed?: boolean;
    isDisabled?: boolean;
}
export const languages: Language[] = [
    { value: 'english', label: 'English', color: '#3C3B6E', isFixed: true },
    { value: 'spanish', label: 'Spanish', color: '#C60B1E', isFixed: true },
    { value: 'french', label: 'French', color: '#0055A4' },
    { value: 'german', label: 'German', color: '#FFCE00' },
    { value: 'chinese', label: 'Chinese', color: '#DE2910' },
    { value: 'japanese', label: 'Japanese', color: '#BC002D' },
    { value: 'korean', label: 'Korean', color: '#003478' },
    { value: 'hindi', label: 'Hindi', color: '#FF9933', isFixed: true },
    { value: 'arabic', label: 'Arabic', color: '#006233' },
    { value: 'russian', label: 'Russian', color: '#0039A6' },
    { value: 'portuguese', label: 'Portuguese', color: '#FFCC29' },
    { value: 'italian', label: 'Italian', color: '#007FFF' },
    { value: 'dutch', label: 'Dutch', color: '#21468B' },
    { value: 'swedish', label: 'Swedish', color: '#006AA7' },
    { value: 'norwegian', label: 'Norwegian', color: '#BA0C2F' },
    { value: 'danish', label: 'Danish', color: '#C60C30' },
    { value: 'finnish', label: 'Finnish', color: '#002F6C' },
    { value: 'greek', label: 'Greek', color: '#0D5EAF' },
    { value: 'turkish', label: 'Turkish', color: '#E30A17' },
    { value: 'thai', label: 'Thai', color: '#A51931' },
    { value: 'vietnamese', label: 'Vietnamese', color: '#DA251D', isFixed: true },
    {value:'Nepali',label:'Nepali',color:'#FFCC00',isFixed:true},
];

