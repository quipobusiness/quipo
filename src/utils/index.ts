/**
 * Resolves asset paths to work with the configured base URL
 * @param path - The asset path (e.g., '/img/hero.webp')
 * @returns The resolved path with base URL prepended if needed
 */
export function resolveAssetPath(path: string): string {
  // If path is already absolute (starts with http/https) or doesn't start with /, return as is
  if (path.startsWith('http') || !path.startsWith('/')) {
    return path
  }

  // Get the base URL from Vite's environment
  const baseUrl = import.meta.env.BASE_URL

  // Ensure base URL ends with / and path doesn't start with /
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path

  return `${normalizedBase}${normalizedPath}`
}
