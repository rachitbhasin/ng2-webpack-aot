import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';


document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => console.error(error));
});
