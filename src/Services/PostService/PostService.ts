import type { AxiosResponse } from "axios";
import { apiRequest } from "./AxiosInterceptor";
import type { IApiResponse, IPost } from "./PostModel";

export interface UpdatePayload {
  id: number;
  title: string;
  body: string;
  userId: number;
}

class PostService {
  getAll = (): Promise<AxiosResponse<IPost[]>> => {
    return apiRequest.get(`/posts`);
  };

  getById = (id: number): Promise<AxiosResponse<IApiResponse<IPost>>> => {
    return apiRequest.get(`/posts/${id}`);
  };

  update = (
    payload: UpdatePayload
  ): Promise<AxiosResponse<IApiResponse<IPost>>> => {
    return apiRequest.put(`/posts/${payload.id}`, payload);
  };

  add = (
    payload: UpdatePayload
  ): Promise<AxiosResponse<IApiResponse<IPost>>> => {
    return apiRequest.post(`/posts`, payload);
  };

  delete = (id: number): Promise<AxiosResponse<IApiResponse<IPost>>> => {
    return apiRequest.delete(`/posts/${id}`);
  };
}

const postService = new PostService();
export default postService;
