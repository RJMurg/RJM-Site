type showcaseItems = [
    categories: [categories]
]

type categories = [category]

type category = {
    title: string,
    items: [showcaseItem]
}

type showcaseItem = {
    title: string,
    image: string,
    link: string,
    shortDescription: string,
    description: [string]
}