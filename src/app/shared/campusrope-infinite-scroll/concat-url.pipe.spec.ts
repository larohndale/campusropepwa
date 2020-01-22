import { ConcatUrlPipe } from './concat-url.pipe';

describe('ConcatUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
