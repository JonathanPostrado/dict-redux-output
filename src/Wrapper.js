import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";

import { AddUser } from "./components/AddUser/AddUser";
import { EditUser } from "./components/EditUser/EditUser";
import { UserList } from "./components/UserList/UserList";
import Home from "./components/Homepage/Home";

const Wrapper = () => {

    const { path } = useRouteMatch()

    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path={path}>
                <Home />
            </Route>        
            <Route path={`${path}addUser`}>
                <AddUser />
            </Route>
            <Route path={`${path}editUser`}>
                <EditUser />
            </Route>
            <Route path={`${path}userList`}>
                <UserList />
            </Route>
        </Switch>      
        </>
    )

}

export default Wrapper;