import type { Announcement } from '../types/announcement';

export const announcements: Announcement[] = [
  {
    id: 'announcement-1',
    title: 'Welcome to Campus Connect',
    category: 'Notice',
    read: false
  }
];

export const newAnnouncement: Announcement = {
  id: 'announcement-2',
  title: 'Upcoming campus event',
  category: 'Events',
  read: false
};
