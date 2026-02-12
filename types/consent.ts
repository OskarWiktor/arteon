export type ConsentState = {
  v: number;
  analytics: boolean;
  ads: boolean;
  updatedAt: string;
};

export interface ConsentUpdate {
  analytics: boolean;
  ads: boolean;
}
