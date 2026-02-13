export interface CvEntry {
  date?: string;
  content: string;
}

export interface CvSection {
  sectionTitle: string;
  entries: CvEntry[];
}

export function renderCvSections(sections: CvSection[]): string {
  return sections
    .map((section) => {
      const title = `<h2>${section.sectionTitle}</h2>`;
      const entries = section.entries
        .map((entry) => {
          const date = entry.date ? `<span>${entry.date}</span>` : '';
          return `<li>${date}<span>${entry.content}</span></li>`;
        })
        .join('');
      return `<section>${title}<ul>${entries}</ul></section>`;
    })
    .join('');
}
