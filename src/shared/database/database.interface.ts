export interface IDatabaseInterface<T> {
  findByEmail(email: string): Promise<T | null>;
  createUser(data: Partial<T>): Promise<T>;
  create(data: Partial<T>): Promise<T>;
}
