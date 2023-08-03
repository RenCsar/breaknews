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
};

export type TWeatherData = {
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

export type ClimaState = {
  data: TWeatherData | null;
  loading: boolean;
  error: string | undefined;
};

export type TIconWeatherProps = {
  data: TWeatherData | null;
};

//--------------------------------------

export type Currency = {
  name: string;
  buy: number;
  sell: number | null;
  variation: number;
};

export type Currencies = {
  [currencyCode: string]: Currency;
};

type CurrencySource = {
  source: string;
  currencies: Currencies;
};

// Tipos das ações
type Stock = {
  name: string;
  location: string;
  points: number;
  variation: number;
};

type Stocks = {
  [stockCode: string]: Stock;
};

// Tipo das informações de Bitcoin
type BitcoinInfo = {
  name: string;
  format: [string, string];
  last: number;
  buy?: number;
  sell?: number;
  variation: number;
};

type Bitcoin = {
  [exchange: string]: BitcoinInfo;
};

// Tipo das taxas
type Tax = {
  date: string;
  cdi: number;
  selic: number;
  daily_factor: number;
  selic_daily: number;
  cdi_daily: number;
};

// Tipo do objeto principal
export type CurrencyData = {
  currencies: CurrencySource;
  stocks: Stocks;
  available_sources: string[];
  bitcoin: Bitcoin;
  taxes: Tax[];
};

export type financeState = {
  data: CurrencyData | null;
  loading: boolean;
  error: string | undefined;
};

export type CurrencyFormatProps = {
  data: CurrencyData | null;
};

//--------------------------------------

export type TComment = {
  idComment: string;
  userId: string;
  userName: string;
  comment: string;
  createdAt: string;
};

export type TopNewsData = {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  category: string[] | null;
  banner: string;
  likes: TUserLike[] | null;
  comments: TComment[] | null;
  name: string;
  userName: string;
  img: string;
};

export type topNewsState = {
  data: TopNewsData | null;
  loading: boolean;
  error: string | undefined;
};

export type AllNewsData = TopNewsData[];

export type AllNewsState = {
  data: AllNewsData | null;
  loading: boolean;
  error: string | undefined;
};

//--------------------------------------

export type TCoinsProps = {
  valor: number;
};

export type TCoinStyledProps = {
  valor: number;
};

export type TUserLike = {
  created: string;
  userId: string;
  userName: string;
};

export type TlikeProps = {
  likes: TUserLike[] | null | undefined;
  small?: boolean | undefined;
};

export type TPostProps = {
  post: TopNewsData | null;
};

export type TAllPostProps = {
  post: AllNewsData | null;
};

interface SharedCardProps {
  direction?: string;
  width?: string;
  height?: string;
  justifycard?: string;
  imgheight?: string;
  imgwidth?: string;
};

export type TCardProps = TPostProps & SharedCardProps;

export type TCardStyledProps = SharedCardProps;