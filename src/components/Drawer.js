import React from "react";
// import { Route, Router } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";

const styles = theme => ({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

class DrawerComponent extends React.Component {
    state = {
        left: false,
        showComponent: false
    };

    handleButtonClick = () => {
        this.setState({
            showComponent: true
        })
    }

    render() {
        const { classes } = this.props;

        const sideList = (side) => (
            <div
                className={classes.list}
                role="presentation"
                onClick={this.props.toggleDrawerHandler}
                onKeyDown={this.props.toggleDrawerHandler}
            >
                <List>
                    {["Home", "Get home", "Rent home", "About Us", "Contact Us"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}  onClick={() => this.handleButtonClick} />
                            {/* {this.state.showComponent ?  : null} */}
                        </ListItem>
                    ))}
                </List>

            </div>
        );

        return (
            <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
                {sideList("left")}
            </Drawer>
        );
    }
}

export default withStyles(styles)(DrawerComponent);
