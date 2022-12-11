import { Article, ArticleDto } from './article';

export class Fournisseur {
  id: number;
  reference: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  rue: string;
  town: string;
  city: string;

  article: Article;

}

export class FournisseurDto {
  id: number;
  reference: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  rue: string;
  town: string;
  city: string;

  articleDto: ArticleDto;

}
