
export interface IApiResult {
  data: NewsItem[]
}

interface NewsItem {
  id: string,
  href: string
}
/**
 * @description Api-Service abstractions
 */
export interface IApiService {
  index(): Promise<IApiResult>
}
