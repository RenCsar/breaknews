const Capitalize = (name: string | null, num: number) => {
    if (!name || typeof name !== 'string') {
        return "";
    }

    const trimmedName = name.trim();
    const words = trimmedName.toLowerCase().split(" ");

    const nomeFormatado = words
        .slice(0, num)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return nomeFormatado;
}

export default Capitalize;