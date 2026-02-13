export interface GalleryItem {
  image?: string | null;
  title?: string | null;
}

export function renderGalleryItems(items: GalleryItem[]): string {
  return items
    .map((item) => {
      const img = `<img src="${item.image || ''}" alt="${item.title || ''}" />`;
      const title = item.title ? `<p>${item.title}</p>` : '';
      return `<div>${img}${title}</div>`;
    })
    .join('\n');
}
