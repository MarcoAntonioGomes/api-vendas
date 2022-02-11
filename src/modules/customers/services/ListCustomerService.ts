import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customers';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

class ListCustomerService {
  public async execute(): Promise<Customer[]> {
    const customersRepository = getCustomRepository(CustomersRepository);
    const customers = customersRepository.find();
    return customers;
  }
}

export default ListCustomerService;
