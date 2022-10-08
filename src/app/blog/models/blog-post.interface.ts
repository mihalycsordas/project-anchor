export interface BlogPost {
  id: string;
  title: string;
  url: string;
  summary: string;
  featuredImage: featuredImage;
  content: undefined;
  author: string;
  updateDate: string;
  visible: boolean;
}

export interface featuredImage {
  fields: {
    id: string;
    title: string;
    description: string;
    file: imageFile;
  };
}

export interface imageFile {
  contentType: string;
  fileName: string;
  url: string;
}
