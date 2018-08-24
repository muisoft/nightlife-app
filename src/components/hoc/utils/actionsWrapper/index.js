
export const actionsWrapper = (props) => {
    return {
        getFoods: () => {
            props.getFoods();
        },
        addGoing: (bussid) => {
            props.addNewGoing(bussid);
            alert('Successfully added');
        },
        handleChange: (e, m) => {
            const target = m.target;
            const value = target.value;
            const name = target.name;
            props.partialState[name] = value;
        },
        onSearch: (location) => {
            if (location === "") {
                alert('Supply your location, thanks.');
                return;
            }
            //Reset previous search result
            props.resetPrevSearch();
            // then do new search
            props.searchLoc({ location: location });
        },
        onSignin: (e) => {
            e.preventDefault();
            props.signin(props.partialState);
        },
        onSignup: (e) => {
            e.preventDefault();
            let { username, email, password } = props.partialState;

            if (!username || !email || !password) {
                alert('Field(s) is empty, fill it up');
                return;
            } else {
                props.signup(props.partialState);
            }
        },
        handleSignout: () => {
            props.signout();
        },
        openDrawer: () => {
            props.openDrawer();
        }
    }
}