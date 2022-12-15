import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicatacao de amizadade');

    expect(content).toBeTruthy();
  });

  it('should be able to create a notification content with less the 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should be able to create a notification content with more the 250 characters', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  });
});
