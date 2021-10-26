import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../utilities/routes';
import TemplatePage from '../pages/TemplatePage';

const MainRouter = (): JSX.Element => {
    return (
        <>
            <Switch>
                <Route exact path={routes.ROOT} component={TemplatePage} />
            </Switch>
        </>
    );
};

export default MainRouter;
