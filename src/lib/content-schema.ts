export type BlogFrontmatter = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export type ProjectFrontmatter = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  tags: string;
  year: string;
  outcome: string;
  github?: string;
  status?: string;
};

function validateDateFormat(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && !isNaN(new Date(date).getTime());
}

function validateSlug(slug: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) && slug.length > 0;
}

export function validateBlogFrontmatter(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Frontmatter must be an object'] };
  }

  const fm = data as Record<string, unknown>;

  if (!fm.slug || typeof fm.slug !== 'string') {
    errors.push('Missing or invalid "slug" field');
  } else if (!validateSlug(fm.slug)) {
    errors.push('Invalid slug format (use lowercase, hyphens only)');
  }

  if (!fm.category || typeof fm.category !== 'string') {
    errors.push('Missing or invalid "category" field');
  }

  if (!fm.title || typeof fm.title !== 'string') {
    errors.push('Missing or invalid "title" field');
  }

  if (!fm.excerpt || typeof fm.excerpt !== 'string') {
    errors.push('Missing or invalid "excerpt" field');
  }

  if (!fm.date || typeof fm.date !== 'string') {
    errors.push('Missing or invalid "date" field');
  } else if (!validateDateFormat(fm.date)) {
    errors.push('Invalid date format. Use ISO format: YYYY-MM-DD');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

export function validateProjectFrontmatter(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Frontmatter must be an object'] };
  }

  const fm = data as Record<string, unknown>;

  if (!fm.slug || typeof fm.slug !== 'string') {
    errors.push('Missing or invalid "slug" field');
  } else if (!validateSlug(fm.slug)) {
    errors.push('Invalid slug format (use lowercase, hyphens only)');
  }

  if (!fm.number || typeof fm.number !== 'string') {
    errors.push('Missing or invalid "number" field');
  }

  if (!fm.title || typeof fm.title !== 'string') {
    errors.push('Missing or invalid "title" field');
  }

  if (!fm.summary || typeof fm.summary !== 'string') {
    errors.push('Missing or invalid "summary" field');
  }

  if (!fm.description || typeof fm.description !== 'string') {
    errors.push('Missing or invalid "description" field');
  }

  if (!fm.tags || typeof fm.tags !== 'string') {
    errors.push('Missing or invalid "tags" field');
  }

  if (!fm.year || typeof fm.year !== 'string') {
    errors.push('Missing or invalid "year" field');
  }

  if (!fm.outcome || typeof fm.outcome !== 'string') {
    errors.push('Missing or invalid "outcome" field');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
