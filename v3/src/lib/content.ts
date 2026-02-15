// @ts-ignore - gray-matter doesn't have proper ESM types
import matter from 'gray-matter';
import { marked } from 'marked';
import { readFileSync } from 'fs';
import { join } from 'path';

const CONTENT_DIR = join(process.cwd(), 'content');

export function getContent<T extends Record<string, any>>(path: string): { data: T; content: string } {
  const fullPath = join(CONTENT_DIR, path);
  const fileContent = readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { data: data as T, content: marked.parse(content) as string };
}
