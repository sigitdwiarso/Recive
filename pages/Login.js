import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, TextInput, Text, Button} from 'react-native';
import {login} from '../redux/actions/auth';
import Loader from '../components/Loader';

class Login extends Component{
    constructor (props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    userLogin(e){
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
    }

    render(){
        return(
            <ScrollView style={{padding: 20}}>
                <Loader loading={isLoading} />
                <Text style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput
                    placeholder='npp'
                    autoCapitalize='none'
                    autoCorrect = {false}
                    autoFocus= {true}
                    keyboardType = 'email-address'
                    value= {this.state.username}
                    onChangeText= {(text) => this.setState({username: text})}
                />
                <TextInput
                    placeholder='password'
                    autoCapitalize='none'
                    autoCorrect = {false}
                    secureTextEntry= {true}
                    keyboardType = 'default'
                    value= {this.state.password}
                    onChangeText= {(text) => this.setState({password: text})}
                />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(e)} title="LOGIN"/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);