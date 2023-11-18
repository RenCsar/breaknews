const useCategoryTitle = (category: string) => {
    const titles: Record<string, string> = {
        News: "News",
        Opiniao: "Opinião",
        Cultura: "Cultura",
        Esporte: "Esporte",
        Financas: "Finanças",
        Clima: "Clima",
    }

    return titles[category] ? titles[category] : category;
}

export default useCategoryTitle;