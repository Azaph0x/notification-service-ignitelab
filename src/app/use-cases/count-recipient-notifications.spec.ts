import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNofications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipientId-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipientId-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipientId-2' }),
    );

    const { count } = await countRecipientNofications.execute({
      recipientId: 'recipientId-1',
    });

    expect(count).toEqual(2);
  });
});
