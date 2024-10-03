type portfolioItems = [
    projects: [portfolioItem]
]

type portfolioItem = {
    title: string,
    image: string,
    link: string,
    shortDescription: string,
    description: [string, string, string]
}