import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { R2d2AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(R2d2AppModule)
  .catch((err) => console.error(err));
