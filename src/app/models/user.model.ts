export class User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;

  constructor(name, surname, username, email, pass) {
    this.first_name = name;
    this.last_name = surname;
    this.username = username;
    this.email = email;
    this.password = pass;
  }
}
