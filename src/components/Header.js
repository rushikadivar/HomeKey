import React from "react";
import ToolbarComponent from "../components/Toolbar";
import DrawerComponent from "../components/Drawer";

class Header extends React.Component{
    state = {
        left: false
    };

    toggleDrawer = () => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //   return;
        // }

        this.setState({ left: false });
    };

    openDrawer = () => {
        this.setState({
            left: true
        });
    };

    render(){
        return (
        <div>
            <ToolbarComponent openDrawerHandler={this.openDrawer} />
            <DrawerComponent
                left={this.state.left}
                toggleDrawerHandler={this.toggleDrawer}
            />
        </div>
    );
    }
};

export default Header;