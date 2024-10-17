export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

const storedItems = localStorage.getItem('navigationItems');
export const NavigationItems: NavigationItem[] = storedItems ? JSON.parse(storedItems) : [];

export function addNavigationItem(item: NavigationItem[]) {
  if (!item.length) {
    NavigationItems.length = 0;
  }
  else {
    NavigationItems.push(...item)
  }
  
  localStorage.setItem('navigationItems', JSON.stringify(item));
}
