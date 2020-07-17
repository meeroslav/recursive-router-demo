export interface User {
  id: number;
  avatar_url: string;
  login: string;
}

export interface FullUser extends User {
  name: string;
  location: string;
  public_repos: number;
  followers: number;
}
