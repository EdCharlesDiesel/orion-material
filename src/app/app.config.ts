// ...
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import {JwtModule} from "@auth0/angular-jwt";
import { authInterceptor } from "./core/auth/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [ 
    provideHttpClient(withInterceptors([authInterceptor])),   
    importProvidersFrom([    
      JwtModule.forRoot({
        config: {
          tokenGetter: () => localStorage.getItem('token')
        }
      })
    ])
  ]
};

function importProvidersFrom(arg0: import("@angular/core").ModuleWithProviders<JwtModule>[]): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
    throw new Error("Function not implemented.");
}
