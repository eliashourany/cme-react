import { makeSelectLocation } from 'containers/App/selectors';

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const router = {
      location: { pathname: '/counter' },
    };
    const mockedState = {
      router,
    };
    expect(makeSelectLocation()(mockedState)).toEqual(router.location);
  });
});
