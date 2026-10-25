import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBasePath(value) {
  if (!value?.trim()) {
    return undefined;
  }

  const path = value.trim();
  return path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
}

const [repositoryOwner = '', repositoryName = ''] = (
  process.env.GITHUB_REPOSITORY ?? ''
).split('/');
const userSiteRepository = `${repositoryOwner}.github.io`;
const isUserSite =
  repositoryOwner &&
  repositoryName.toLowerCase() === userSiteRepository.toLowerCase();
const repositoryBase =
  !repositoryName || isUserSite ? '/' : `/${repositoryName}/`;

export default defineConfig({
  base: normalizeBasePath(process.env.VITE_BASE_PATH) ?? repositoryBase,
  plugins: [react()],
});
