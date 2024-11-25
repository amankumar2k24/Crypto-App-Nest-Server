import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});


// Purpose:
// Tests the UsersService to ensure it is defined and can be instantiated properly.

// Test.createTestingModule:
// Sets up a test module with the UsersService as a provider.

// Basic Test:
// The test simply checks if the UsersService is defined.