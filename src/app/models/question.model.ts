export interface Question {
  id: string;
  question: string;
  type: 'radio' | 'text' | 'select' | 'result';
  options?: string[];
  next?: {
    [key: string]: string;
  };
  result?: string;
}
