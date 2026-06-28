export interface MediaOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'auto' | 'high' | 'low';
  placeholder?: 'blur' | 'none';
}

export interface VideoOptimizationOptions {
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export interface CachingStrategy {
  key: string;
  ttlMinutes: number;
  scope: 'request' | 'session' | 'runtime';
  enabled: boolean;
}

export interface LazyLoadConfig {
  strategy: 'intersection-observer' | 'native' | 'manual';
  rootMargin: string;
  threshold: number;
  enabled: boolean;
}

export interface BundleOptimizationRecommendation {
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  module: string;
  strategy: 'dynamic-import' | 'split-chunk' | 'defer' | 'prefetch';
}

export interface DynamicImportPlan {
  module: string;
  importPath: string;
  reason: string;
  shouldUseDynamicImport: boolean;
}

export interface SEOAuditRecommendation {
  category: 'metadata' | 'image' | 'content' | 'structure';
  message: string;
  severity: 'high' | 'medium' | 'low';
}

export interface PerformanceAuditSummary {
  imageOptimization: MediaOptimizationOptions;
  videoOptimization: VideoOptimizationOptions;
  lazyLoad: LazyLoadConfig;
  cache: CachingStrategy[];
  bundleRecommendations: BundleOptimizationRecommendation[];
  seoRecommendations: SEOAuditRecommendation[];
}

export interface IPerformanceService {
  optimizeImageAsset(url: string, options?: Partial<MediaOptimizationOptions>): string;
  optimizeVideoAsset(url: string, options?: Partial<VideoOptimizationOptions>): VideoOptimizationOptions;
  createCachingStrategy(key: string, ttlMinutes: number, scope: CachingStrategy['scope']): CachingStrategy;
  buildLazyLoadConfig(enabled?: boolean): LazyLoadConfig;
  getDynamicImportPlan(module: string): DynamicImportPlan;
  getBundleOptimizationRecommendations(): BundleOptimizationRecommendation[];
  getSeoAuditRecommendations(): SEOAuditRecommendation[];
  getPerformanceAuditSummary(): PerformanceAuditSummary;
}
