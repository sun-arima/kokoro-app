const basePath = process.env.NODE_ENV === 'production' ? '/kokoro-app' : '';

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
