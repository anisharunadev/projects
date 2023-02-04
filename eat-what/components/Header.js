import styles from "../styles/Header.module.css"

function Header() {
    return ( 
        <header>
            <nav>
                <div className={styles.__logo}>
                    <a href="#">LOGO</a>
                </div>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">CAREEAR</a>
                    </li>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                </ul>
            </nav>

            <div className={styles.__hero}>
		        <h1 className={styles.__hero_heading}>Life changing product</h1>
		        <p className= {styles.__hero_sub_heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor?</p>
		        <button className= {styles.__hero_button}>Get Started</button>
	        </div>
        </header>
     );
}

export default Header;