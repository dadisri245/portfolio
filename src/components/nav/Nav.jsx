import {React,Component} from 'react'
import './Nav.css'
class Nav extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <nav>
            <div>
                <ul id='navbar' className={this.state.clicked?"#navbar active":"#navbar"}>
                    <li><a className='active first' href="index.html">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div id='mobile' onClick={this.handleClick}>
                <i id='bar' className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
    )
}
}
export default Nav