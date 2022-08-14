export type QuestionType =
  | 'Multiple Choice'
  | 'Linear Scale'
  | 'Checkbox'
  | 'Short Text'
  | 'File Upload';
export type AllowedFileType = 'DOCUMENT' | 'SPREADSHEET' | 'PDF' | 'IMAGE';
export type MaximumFileSize = '1MB' | '5MB' | '10MB' | '25MB';
export interface QuestionRoot {
  title?: string;
  desc?: string;
  questions?: Question[];
  created_on: string;
}

export interface Question {
  question_type?: QuestionType;
  question_title?: string;
  question_answers?: string[];
  question_desc?: string;
  label_left?: number;
  label_right?: number;
  range_from?: number;
  range_to?: number;
  allowed_file_types?: AllowedFileType[];
  maximum_file_size?: MaximumFileSize;
}
