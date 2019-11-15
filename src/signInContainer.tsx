import { connect } from "react-redux";
import { AppState } from './store';
import { SignInComponent } from "./signInComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { CreatePizzaInput } from './API'
import * as mutations from './graphql/mutations'
import { FederatedSignInOptions, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib-esm/types/Auth';


Amplify.configure(awsconfig);
Auth.configure({
    authenticationFlowType: 'CUSTOM_AUTH'
});

export interface signInHundler {
    hundleInit(): void
    hundleSignIn(): void
    handleSignOut(): void
    hundleOrder(username: string, price: number): void
    hundleUpdateQuantity(event: any, newValue: number | number[]): void
}

const hundleInit = () => async (dispatch: Dispatch) => {
    Auth.currentSession()
        .then(data => {
            console.log(data)
            dispatch(Actions.updateUsername(data["accessToken"]["payload"]["username"]))
        })
        .catch(err => {
            console.log(err)
        })
    // Auth.currentAuthenticatedUser({
    //     bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    // }).then(user => console.log(user))
    //     .catch(err => console.log(err));
}

const hundleUpdateQuantity = (event: any, quantity: number) => async (dispatch: Dispatch) => {
    dispatch(Actions.updateQuantity(quantity))
    const price = quantity > 9 ? 9800 : quantity * 1000
    dispatch(Actions.updatePrice(price))
}

const hundleOrder = (username: string, price: number) => async () => {
    const input: CreatePizzaInput = {
        username: username,
        price: price.toString()
    }
    const result = await API.graphql(graphqlOperation(mutations.createPizza, {
        input: input
    }))
    console.log(result)
    console.log(username)
    console.log(price)
}

const hundleSignIn = () => async (dispatch: Dispatch) => {
    try {
        // dispatch(Actions.updateUsername(result.username))
        const provider: FederatedSignInOptions = {
            provider: CognitoHostedUIIdentityProvider.Google
        }
        const result = await Auth.federatedSignIn(provider)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
}


const handleSignOut = () => async (dispatch: Dispatch) => {
    const result = await Auth.signOut()
    console.log(result)
    dispatch(Actions.updateUsername(""))
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        username: appState.state.username,
    })
}
export default connect(mapStateToProps, {
    hundleInit,
    hundleSignIn,
    handleSignOut,
    hundleOrder,
    hundleUpdateQuantity,
})(SignInComponent)