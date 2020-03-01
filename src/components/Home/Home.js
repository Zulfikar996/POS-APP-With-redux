import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    componentDidMount(){
        if(!localStorage.getItem('isAuth')){
            this.props.history.push('/login');
        }
    }

    onLogout(){
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }

    render(){
        console.log('render');
        return(
            <div >
                <h4 style={{ paddingTop: '10px' }}>Home</h4>
                <p>Welcome, {localStorage.getItem('name')} <Link to="#" onClick={this.onLogout.bind(this)}>Logout</Link></p>
                <div className='row' >
                    <div className='content col-md-9' style={{backgroundColor:'#d9d9d9'}} >
                        {/* <Product/> */}
                    </div>
                   </div>


              {/* <Modals /> */}
            </div>
        )
    }
}

export default Home;