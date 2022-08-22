import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Welcome} from '../pages/Welcome';

export default function AuthRoutes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Welcome}/>
            </Switch>
        </BrowserRouter>

    );
}


