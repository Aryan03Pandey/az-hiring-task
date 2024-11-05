export interface resource{
    type: string;
    link: string;
    title: string;
    duration: {
        hours: number;
        minutes: number;
    };
}

export interface part {
    duration: {
        hours: number;
        minutes: number;
    };
    title: string;
    difficulty: string;
    videoUrl: string;
    percentageCompleted: number;
    numberOfResources: number;
    resources: resource[];
}

export interface chapter {
    index: number;
    id: string;
    duration: {
        hours: number;
        minutes: number;
    };
    parts: part[];
    title: string;
}

const chapters: chapter[] = [
    {   
        index: 1,
        id: "chapter1",
        title: "Chapter 1",
        duration: {
            hours: 5,
            minutes: 0
        },
        parts: [
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 45,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 20,
                numberOfResources: 12,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 0,
                numberOfResources: 12,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
        ]
    },
    {
        index: 2,
        id: "chapter2",
        title: "Chapter 2",
        duration: {
            hours: 3,
            minutes: 30
        },
        parts: [
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 45,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 10,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 60,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
        ]
    },
    {   
        index: 3,
        id: "chapter3",
        title: "Chapter 3",
        duration: {
            hours: 3,
            minutes: 0
        },
        parts: [
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 80,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 20,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 40,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
        ]
    },
    {
        index: 4,
        id: "chapter4",
        title: "Chapter 4",
        duration: {
            hours: 2,
            minutes: 0
        },
        parts: [
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 30,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 50,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 10,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
        ]
    },
    {
        index: 5,
        id: "chapter5",
        title: "Chapter 5",
        duration: {
            hours: 4,
            minutes: 0
        },
        parts: [
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 30,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 45,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
            {
                duration: {
                    hours: 2,
                    minutes: 0
                },
                title: "Introduction to Algorithms",
                difficulty: "Easy",
                videoUrl: "#",
                percentageCompleted: 70,
                numberOfResources: 5,
                resources: [
                    {
                        type: "video",
                        link: "#",
                        title: "Video 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "article",
                        link: "#",
                        title: "Article 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "quiz",
                        link: "#",
                        title: "Quiz 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "exercise",
                        link: "#",
                        title: "Coding Exercise 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                    {
                        type: "combined",
                        link: "#",
                        title: "Combined Resource 1",
                        duration: {
                            hours: 0,
                            minutes: 10
                        }
                    },
                ]
            },
        ]
    },
    
]

export default chapters;