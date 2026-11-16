import { announcements, newAnnouncement } from '../data/announcements';
import type { Announcement } from '../types/announcement';

export function formatGreeting(name: string): string {
  return `Welcome to Campus Connect, ${name}!`;
}

export function formatStudentName(
  firstName: string,
  lastName: string
): string {
  return `${firstName} ${lastName}`;
}

export function calculateSum(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}

export const countUnread = (items: Announcement[]): number => {
  return items.filter(item => !item.read).length;
};

export function getUnreadAnnouncements(
  items: Announcement[]
): Announcement[] {
  return items.filter(item => !item.read);
}

const { title, category } = announcements[0];

const updated = {
  ...announcements[0],
  read: true
};

const allItems = [...announcements, newAnnouncement];

const message = `New ${category.toLowerCase()}: ${title}`;
export const practiceUnread = announcements.filter(
  item => !item.read
);

// Practice Exercise 13 - Map
export const practiceTitles = announcements.map(
  item => item.title
);

export { title, category, updated, allItems, message };

// 8. Async/Await and Error Handling

type ApiAnnouncement = {
  id: string;
  title: string;
};

export async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();

    // Convert API data to ApiAnnouncement[]
    return data as ApiAnnouncement[];
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}
