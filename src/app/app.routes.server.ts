import { RenderMode, ServerRoute } from '@angular/ssr';
import { SmartFormComponent } from './pages/smart-form/smart-form.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
];
