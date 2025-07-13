import slugify from 'slugify';

export const slugifyText = (text: string) =>
  slugify(text, { lower: true, strict: true, trim: true });