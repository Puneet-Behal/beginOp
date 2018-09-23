import { GenericModule } from './generic.module';

describe('GenericModule', () => {
  let commonModule: GenericModule;

  beforeEach(() => {
    commonModule = new GenericModule();
  });

  it('should create an instance', () => {
    expect(GenericModule).toBeTruthy();
  });
});
