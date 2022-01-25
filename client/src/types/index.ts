import { AxiosPromise } from "axios";
import { RefetchOptions } from "axios-hooks";

export type ProjectIdea = {
  id: string;
  title: string;
  description: string;
};

export type AxiosRefetch = (
  config?: any,
  options?: RefetchOptions | undefined
) => AxiosPromise<any>;
