export type TForecastData = {
    date: string;
    weekday: string;
    max: number;
    min: number;
    cloudiness: number;
    rain: number;
    rain_probability: number;
    wind_speedy: string;
    description: string;
    condition: string;
}

export type TWeatherData = {
    by: string;
    valid_key: boolean;
    results: {
        temp: number;
        date: string;
        time: string;
        condition_code: string;
        description: string;
        currently: string;
        cid: string;
        city: string;
        img_id: string;
        humidity: number;
        cloudiness: number;
        rain: number;
        wind_speedy: string;
        wind_direction: number;
        sunrise: string;
        sunset: string;
        condition_slug: string;
        city_name: string;
        forecast: TForecastData[];
        cref: string;
    };
    execution_time: number;
    from_cache: boolean;
}

type Currency = {
    name: string;
    buy: number;
    sell: number | null;
    variation: number;
}

type Currencies = {
    [currencyCode: string]: Currency;
}

type CurrencySource = {
    source: string;
    currencies: Currencies;
}

// Tipos das ações
type Stock = {
    name: string;
    location: string;
    points: number;
    variation: number;
}

type Stocks = {
    [stockCode: string]: Stock;
}

// Tipo das informações de Bitcoin
type BitcoinInfo = {
    name: string;
    format: [string, string];
    last: number;
    buy?: number;
    sell?: number;
    variation: number;
}

type Bitcoin = {
    [exchange: string]: BitcoinInfo;
}

// Tipo das taxas
type Tax = {
    date: string;
    cdi: number;
    selic: number;
    daily_factor: number;
    selic_daily: number;
    cdi_daily: number;
}

// Tipo do objeto principal
export type CurrencyData = {
    currencies: CurrencySource;
    stocks: Stocks;
    available_sources: string[];
    bitcoin: Bitcoin;
    taxes: Tax[];
}


export type TopNewsData = {
    id: string;
    title: string;
    text: string;
    banner: string;
    likes: TUserLike[] | null;
    comments: any;
    name: string;
    userName: string;
    img: string;
}

export type TUserLike = {
    created: string;
    userId: string;
    userName: string;
}

export type TlikeProps = {
    likes: TUserLike[] | null;
}