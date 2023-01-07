export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUSerLogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface IProviderValueContext {
  user: IUser | null;
  UserLogin: (formData: IUSerLogin) => Promise<void>;
  UserRegister: (formData: IUserRegister) => Promise<void>;
  UserLogout: () => Promise<void>;
}

export interface ILogin {
  id: number;
  name: string;
  email: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: ILogin;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsContext {
  products: IProduct[];
  filteredProductsSearch: IProduct[];
  search: string;
  setSearch: (event: any) => void;
  SearchInput: (event: any) => void;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
}
