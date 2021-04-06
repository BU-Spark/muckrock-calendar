
export const timelineData = [
    {
        text: 'Case1',
        date: 'April 2 2021',
        category: {
			tag: 'Completed',
			color: '#00FF00'
		},
        link: {
            url: "https://www.muckrock.com/",
            text: 'Check it out on MuckRock'
        }
    },
    {
        text: 'Case2',
        date: 'April 2 2021',
        category: {
			tag: 'Completed',
			color: '#00FF00'
		},
        link: {
            url: 'https://www.muckrock.com/',
            text: 'Check it out on MuckRock'
        }
    }
]

export interface timelineInterface {
    text: String;
    date: String;
    category: {tag: String, color: String};
    link: {url: String, text: String}
}

export type timeLineItems = {
    data: timelineInterface;
}