import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module"

platformBrowserDynamic().bootstrapModule(AppModule)

console.log("Main TS File Message");
// Explicit Type Declaration - Type Annotation
// let x : String;
// x = "30";
// Implicit Type Declaration- Type Inference
// let y = 40;

