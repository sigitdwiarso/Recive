import axios from 'axios';

export const login = (username, password) =>{
    const token = 'v1m14A0flRIu0dHgX4SxfWwKyRr77YeoTERCecgDATobL9crmm1iBXLZcEEO';
    const data = {
        npp: username,
        password: password,
        token : token,
    };
    let namaPeserta = '';

    let _getPeserta = function(npp){
        axios.get('http://10.70.130.39:82/outing/index.php/api/peserta?npp='+npp+'&token='+token)
            .then((response) => {
                console.log(response.data);
                this.username = response.data.nama;

               
            })
            .catch((error) => {
                console.log(error);
            })
    }
    axios.post('http://10.70.130.39:82/outing/index.php/api/login',data)
        .then((response) => {
            console.log(response.data);
            _getPeserta(username);
        })
    return{
        type: 'LOGIN',
        username: username,
        password: password
    };
};

export const logout = () => {
    return{
        type: 'LOGOUT'
    };
};