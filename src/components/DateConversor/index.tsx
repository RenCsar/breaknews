const DateGen = () => {
    function formatarData(data: Date): string {
        const diasSemana: string[] = [
            'Domingo', 'Segunda-feira', 'Terça-feira',
            'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
        ];

        const meses: string[] = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        const diaSemana = diasSemana[data.getDay()];
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();

        return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    }

    const dataAtual = new Date();
    const dataFormatada = formatarData(dataAtual);

    return dataFormatada;
};

export default DateGen;