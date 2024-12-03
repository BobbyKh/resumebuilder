export interface Skill {
    value: string;
    label: string;
    color: string;
    isFixed?: boolean;
    isDisabled?: boolean;
}

export const skills: readonly Skill[] = [
    { value: 'SEO', label: 'SEO', color: '#FFA500' },
    { value: 'c', label: 'C', color: '#555555' },
    { value: 'html', label: 'HTML', color: '#E34C26', isFixed: true },
    { value: 'css', label: 'CSS', color: '#1572B6', isFixed: true },
    { value: 'javascript', label: 'JavaScript', color: '#F7DF1E' },
    { value: 'typescript', label: 'TypeScript', color: '#007ACC' },
    { value: 'python', label: 'Python', color: '#306998', isFixed: true },
    { value: 'java', label: 'Java', color: '#B07219' },
    { value: 'csharp', label: 'C#', color: '#178600' },
    { value: 'cpp', label: 'C++', color: '#00599C' },
    { value: 'php', label: 'PHP', color: '#777BB4', isDisabled: true },
    { value: 'ruby', label: 'Ruby', color: '#CC342D' },
    { value: 'sql', label: 'SQL', color: '#003B57' },
    { value: 'nodejs', label: 'Node.js', color: '#339933' },
    { value: 'react', label: 'React', color: '#61DAFB' },
    { value: 'angular', label: 'Angular', color: '#DD0031' },
    { value: 'vue', label: 'Vue.js', color: '#42B883' },
    { value: 'django', label: 'Django', color: '#092E20' },
    { value: 'flask', label: 'Flask', color: '#000000' },
    { value: 'docker', label: 'Docker', color: '#2496ED' },
    { value: 'kubernetes', label: 'Kubernetes', color: '#326CE5' },
    { value: 'aws', label: 'AWS', color: '#FF9900', isFixed: true },
    { value: 'azure', label: 'Azure', color: '#0078D4' },
    { value: 'git', label: 'Git', color: '#F05032' },
    { value: 'linux', label: 'Linux', color: '#FCC624' },
    { value: 'bash', label: 'Bash', color: '#4EAA25' },
    { value: 'cybersecurity', label: 'Cybersecurity', color: '#0E76A8' },
];

