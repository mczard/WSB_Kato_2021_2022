import { Rate } from "./rate";

export type CurrencyRate = {
  table: string;
  currency: string;
  code: string;
  rates: Rate[];
}
