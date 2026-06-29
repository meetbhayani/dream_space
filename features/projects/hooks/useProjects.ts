'use client';

import { useState, useEffect } from 'react';
import type { Project, ProjectFilterOptions } from '@/types/project';

export function useProjects(filters?: ProjectFilterOptions) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/projects?' + new URLSearchParams(
      Object.entries(filters ?? {}).filter(([_, v]) => v !== undefined).map(([k, v]) => [k, String(v)])
    ))
      .then((res) => res.json())
      .then((data) => setProjects(data.items ?? data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}
