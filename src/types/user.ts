export interface User {
  id: string;

  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    city: string;
    street: string;
  };
  username: string
}
