import { IPerformanceService, PerformanceAuditSummary, MediaOptimizationOptions, VideoOptimizationOptions, CachingStrategy, LazyLoadConfig, BundleOptimizationRecommendation, SEOAuditRecommendation, DynamicImportPlan } from '../types/performance';

class PerformanceService implements IPerformanceService {
  optimizeImageAsset(url: string, options: Partial<MediaOptimizationOptions> = {}): string {
    const { width = 1600, height = 900, quality = 82, format = 'webp', loading = 'lazy', fetchPriority = 'auto', placeholder = 'blur' } = options;

    const params = new URLSearchParams({
      width: String(width),
      height: String(height),
      quality: String(quality),
      format,
      loading,
      fetchPriority,
      placeholder
    });

    if (!url.includes('?')) {
      return `${url}?${params.toString()}`;
    }

    return `${url}&${params.toString()}`;
  }

  optimizeVideoAsset(url: string, options: Partial<VideoOptimizationOptions> = {}): VideoOptimizationOptions {
    const { poster, preload = 'metadata', autoplay = false, muted = true, loop = true, playsInline = true } = options;

    return {
      poster,
      preload,
      autoplay,
      muted,
      loop,
      playsInline
    };
  }

  createCachingStrategy(key: string, ttlMinutes: number, scope: CachingStrategy['scope']): CachingStrategy {
    return {
      key,
      ttlMinutes,
      scope,
      enabled: ttlMinutes > 0
    };
  }

  buildLazyLoadConfig(enabled = true): LazyLoadConfig {
    return {
      strategy: enabled ? 'intersection-observer' : 'manual',
      rootMargin: '200px 0px',
      threshold: 0.15,
      enabled
    };
  }

  getDynamicImportPlan(module: string): DynamicImportPlan {
    const plans: Record<string, DynamicImportPlan> = {
      animations: {
        module: 'animations',
        importPath: '@/components/animations',
        reason: 'Animation modules are non-critical for initial page render and should load only when needed.',
        shouldUseDynamicImport: true
      },
      gallery: {
        module: 'gallery',
        importPath: '@/components/gallery',
        reason: 'Gallery and lightbox logic can be deferred until a user opens the gallery experience.',
        shouldUseDynamicImport: true
      },
      'project-detail': {
        module: 'project-detail',
        importPath: '@/app/projects/[slug]',
        reason: 'Project detail widgets can be split into a smaller route-level chunk.',
        shouldUseDynamicImport: true
      }
    };

    return plans[module] ?? {
      module,
      importPath: `@/${module}`,
      reason: 'Use a dynamic import when the module is not required for the first paint.',
      shouldUseDynamicImport: false
    };
  }

  getBundleOptimizationRecommendations(): BundleOptimizationRecommendation[] {
    return [
      {
        name: 'Defer non-critical animation modules',
        description: 'Load animation libraries only when they are required by the current route to reduce initial bundle size.',
        priority: 'high',
        module: 'animations',
        strategy: 'dynamic-import'
      },
      {
        name: 'Split gallery and carousel logic',
        description: 'Move gallery and carousel code into route-level chunks so the home page does not pay the full cost up front.',
        priority: 'high',
        module: 'gallery',
        strategy: 'split-chunk'
      },
      {
        name: 'Prefetch project and blog detail routes',
        description: 'Prefetch detail pages from list views to improve perceived navigation performance for high-intent visitors.',
        priority: 'medium',
        module: 'routes',
        strategy: 'prefetch'
      }
    ];
  }

  getSeoAuditRecommendations(): SEOAuditRecommendation[] {
    return [
      {
        category: 'metadata',
        message: 'Ensure every route exposes canonical URLs and unique titles for the project detail and blog pages.',
        severity: 'high'
      },
      {
        category: 'image',
        message: 'Use optimized image metadata and explicit alt text for project and gallery assets.',
        severity: 'medium'
      },
      {
        category: 'structure',
        message: 'Keep breadcrumb and structured data output present for projects and articles to support rich results.',
        severity: 'medium'
      }
    ];
  }

  getPerformanceAuditSummary(): PerformanceAuditSummary {
    return {
      imageOptimization: {
        width: 1600,
        height: 900,
        quality: 82,
        format: 'webp',
        loading: 'lazy',
        fetchPriority: 'auto',
        placeholder: 'blur'
      },
      videoOptimization: {
        preload: 'metadata',
        autoplay: false,
        muted: true,
        loop: true,
        playsInline: true
      },
      lazyLoad: this.buildLazyLoadConfig(true),
      cache: [
        this.createCachingStrategy('project-list', 15, 'runtime'),
        this.createCachingStrategy('gallery-list', 10, 'runtime'),
        this.createCachingStrategy('seo-metadata', 30, 'request')
      ],
      bundleRecommendations: this.getBundleOptimizationRecommendations(),
      seoRecommendations: this.getSeoAuditRecommendations()
    };
  }
}

export const performanceService = new PerformanceService();
export default performanceService;
