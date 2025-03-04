import { ArticleRepository } from "../../modules/repository/services/article.repository";

export class TransformHelper {
  public static trim({ value }) {
    return value ? value.trim() : value;
  }
  public static trimArray({ value }) {
    return value ? value.map((i)=>i.trim()) : value;
  }
  public static uniqueItems({ value }) {
    return value ? Array.from(new Set(value)) : value;
  }
}
