import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';


class UserAvatar extends Component {

    firstLetter = this.props.author.charAt(0);

    render() {
        return (
            <MuiThemeProvider>

                <Avatar>
                    {this.firstLetter}
                </Avatar>

            </MuiThemeProvider>
        )
    }

}


export default UserAvatar;