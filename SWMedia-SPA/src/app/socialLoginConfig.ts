import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider
} from 'angularx-social-login';

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
        {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('290888765440-4eaegn5srne2h58f6ic6rmt8o0fsmeb6.apps.googleusercontent.com')
        }
    ]);

    return config;
}