import genshin from '../img/image.png'
import discord from '../img/discord.png'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function Header(props) {
    return (
          <header>
              <Link to="/">
                <img id="genshin-logo" src={genshin} alt="Логотип" onClick={() => props.reset()}></img>
              </Link>
              <img id="discord-logo" src={discord} alt="Дискорд"></img>

          </header>
    );
  }

const mapStateToProps = state => {
    return {
        eye: state.eye
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reset: () => dispatch({type: "ALL", eye: ""})
    };
};
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);