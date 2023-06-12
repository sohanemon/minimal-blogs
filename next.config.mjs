/** @type {import('next').NextConfig} */
import mdx from '@next/mdx';

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

const withMDX = mdx();
export default withMDX(nextConfig);
