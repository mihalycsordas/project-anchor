export interface BlogPost {
  id: string;
  title: string;
  url: string;
  summary: string;
  featuredImage: featuredImage;
  content: undefined;
  author: string;
  updateDate: Date;
  visible: boolean;
}

export class featuredImage {
  fields?: {
    id?: string;
    title?: string;
    description?: string;
    file?: imageFile;
  };
}

export class imageFile {
  contentType?: string;
  fileName?: string;
  url?: string;
}
