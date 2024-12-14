export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  Ratings?: { Source: string; Value: string }[];
  isInWatchList?: boolean;
}
