export default class AuthenticationService {
  static isAuthenticated: boolean = false;

  static login(username: string, password: string): Promise<boolean> {
    // ici il faut faire un truc plus propre
    const isAuthenticated = username === "pikachu" && password === "pikachu";

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = isAuthenticated;
        resolve(this.isAuthenticated);
      }, 1000);
    });
  }
}
