export interface IApiResponse<T> {
  code: number;
  message: string;
  item: T;
  isValid: boolean;
  isSuccessStatusCode: boolean;
  paginationDetails?: any;
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

