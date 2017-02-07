import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../build/src/app/index.ngfactory';


document.addEventListener('DOMContentLoaded', () => {
  platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .catch(error => console.error(error));
});
