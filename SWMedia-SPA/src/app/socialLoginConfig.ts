import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
} from 'angularx-social-login';

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
        {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('688610565883-5r0vs55u2q7gncdg062f4fv13jp0dcbb.apps.googleusercontent.com')
        }
    ]);

    return config;
}
