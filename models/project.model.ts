export interface Project {
    name: string;
    description: string
    technologies: string[];
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        name: 'Hiri',
        description: 'A next-generation dev team',
        technologies: [],
        image: 'url("https://media.discordapp.net/attachments/958822452711014400/984111980434575450/12.png?width=1440&height=480") 50% 50%',
        link: 'https://hiri.dev/'
    },
    {
        name: 'NISD bot',
        description: 'A Discord bot, born with the need for greater security.',
        technologies: [],
        image: 'url("https://media.discordapp.net/attachments/597087157068234783/983072683560423434/nisd-logo.png?width=887&height=499") 20% 50%',
        link: 'https://nisdbot.xyz/'
    },
    {
        name: 'MixTape',
        description: 'An account manager for a videogame production studio',
        technologies: [],
        image: 'url("https://media.discordapp.net/attachments/597087157068234783/983085694400475226/logo-mixtape.png?width=885&height=498") 45% 50%',
        link: 'https://account.imnotmine.it'
    }
]
