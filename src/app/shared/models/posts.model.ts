export interface Posts {
    comments: [],
    createdAt: string,
    imageUrl: string,
    text: string,
    title: string,
    updateAt: string,
    user: User,
    viewsCount: 0,
    _id: string
}

export interface Comment {
  text: string;
}

export interface User {
  createdAt: string,
  email: string,
  fullName: string,
  posts: [],
  updatedAt: string,
  _id: string
}
