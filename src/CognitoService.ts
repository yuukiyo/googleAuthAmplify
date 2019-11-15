import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { FederatedSignInOptions, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib-esm/types/Auth';
// import { CognitoUser } from '@aws-amplify/auth';
// import { CognitoUserAttribute, CognitoUserSession } from 'amazon-cognito-identity-js';
// import AWS from 'aws-sdk'
Amplify.configure(awsconfig);
// Auth.configure({
//     authenticationFlowType: 'CUSTOM_AUTH'
// });

export class CognitoService {
    static signIn = async (email: string, password: string) => {
        const provider: FederatedSignInOptions = {
            provider: CognitoHostedUIIdentityProvider.Google
        }
        const result = await Auth.federatedSignIn(provider)
        return result
    }
    static signOut = async () => {
        const result = await Auth.signOut()
        return result
    }
}