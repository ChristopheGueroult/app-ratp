import { RatpModule } from './ratp.module';

describe('RatpModule', () => {
  let ratpModule: RatpModule;

  beforeEach(() => {
    ratpModule = new RatpModule();
  });

  it('should create an instance', () => {
    expect(ratpModule).toBeTruthy();
  });
});
