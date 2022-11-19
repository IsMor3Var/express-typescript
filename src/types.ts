export type Weather = 'Sunny' | 'Rainy' | 'Cloudy' | 'Windy' | 'Stormy'
export type Visibility = 'Great' | 'Good' | 'ok' | 'Poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
