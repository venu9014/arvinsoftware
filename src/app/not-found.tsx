import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <GlassCard className="p-10 md:p-14 space-y-6" glow>
        <Badge variant="amber" dot>
          Error 404
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          The requested page could not be located in our Phase 1 frontend directory. Please return to the homepage or explore our services.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
