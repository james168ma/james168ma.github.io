import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NavItem from './navItem'
import SubnavSelector from './subnavSelector'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'James'
export const siteTitle = 'James Ma'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    const navbarExtended = this.props.project ? true : false
    this.state = {
      width: 0,
      height: 0,
      navbarExtended,
      mobileNavStyle: styles.mobileNavbarNone,
      svgRotate: { rotation: styles.svgButtonNotRotate, color: "#A5A5A5" }
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.navRef = React.createRef();
  }

  // for checking if on mobile
  componentDidMount() {
    this.updateWindowDimensions();
    global.addEventListener('resize', this.updateWindowDimensions)
  }

  // remove when layout unmounted (webpage closes)
  componentWillUnmount() {
    global.removeEventListener('resize', this.updateWindowDimensions)
  }

  // change the state
  updateWindowDimensions() {
    this.setState({ width: global.innerWidth, height: global.innerHeight })
  }

  // changing the nav button and navbar
  changeMobileNav() {
    if(this.state.mobileNavStyle === styles.mobileNavbarNone) {
      this.setState({
        mobileNavStyle: styles.mobileNavbarShow,
        svgRotate: { rotation: styles.svgButtonRotate, color: "#9932CC" }
      })
    } else {
      this.setState({
        mobileNavStyle: styles.mobileNavbarNone,
        svgRotate: { rotation: styles.svgButtonNotRotate, color: "#A5A5A5" }
      })
    }
  }

  // toggle nav width when subnav selected
  toggleNavWidth() {
    this.setState({ navbarExtended: !this.state.navbarExtended })
  }

  render() {
    let toggledStyle = this.state.navbarExtended ? styles["navbar-extended"] : styles["navbar-regular"]

    let navClass, ulClass, githubLogo
    if(this.state.width > 600) {
      navClass = styles.navbar + " " + toggledStyle
      ulClass = styles.navbarNav
      githubLogo = "/images/GitHub_Logo.png"
    } else {
      navClass = styles.mobileNavbar + " " + this.state.mobileNavStyle
      ulClass = styles.mobileNavbarNav
      githubLogo = "/images/GitHub-Mark-64px.png"
    }

    // the navbar
    const navBar = (
      <nav className={navClass} ref={this.navRef}>
        {(this.state.width <= 600) &&
          <text className={styles.nameLogo}>jm</text>
        }
        <ul className={ulClass}>
          <NavItem link="/" text="Home" selected={this.props.home}/>
          <NavItem link="/subpages/About" text="About" selected={this.props.about}/>
          <SubnavSelector text="Projects" selected={this.props.project} toggleNav={() => this.toggleNavWidth()}>
            {
              this.props.ids.map(id => {
                return (
                  <NavItem link={"/projects/" + id} text={id} selected={this.props.pageName === id} subItem key={id}/>
                )
              })
            }
          </SubnavSelector>
          <NavItem link="/subpages/Blog" text="Blog" selected={this.props.blog || this.props.blogPost}/>
          {/* <NavItem link="/documents/JamesMa2021Resume.pdf" target="_blank" text="Resume"/> */}
          <NavItem href="mailto:james168ma@gmail.com" text="Contact"/>
        </ul>
      </nav>
    )

    // the header, adjusted for mobile as well
    const headerDiv = (
      <div className={styles.headerDiv}>
        {(this.state.width <= 600) &&
          <button className={styles.svgButton} onClick={() => this.changeMobileNav()}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="48" height="48"
            viewBox="0 0 172 172"
            style={{fill: "#000000"}}
            className={this.state.svgRotate.rotation}>
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={this.state.svgRotate.color}>
                  <path d="M85.83203,17.04323c-6.32845,0.09274 -11.38527,5.2949 -11.2987,11.62344v45.86667h-45.86667c-4.13529,-0.05848 -7.98173,2.11417 -10.06645,5.68601c-2.08471,3.57184 -2.08471,7.98948 0,11.56132c2.08471,3.57184 5.93115,5.74449 10.06645,5.68601h45.86667v45.86667c-0.05848,4.13529 2.11417,7.98173 5.68601,10.06645c3.57184,2.08471 7.98948,2.08471 11.56132,0c3.57184,-2.08471 5.74449,-5.93115 5.68601,-10.06645v-45.86667h45.86667c4.13529,0.05848 7.98173,-2.11417 10.06645,-5.68601c2.08471,-3.57184 2.08471,-7.98948 0,-11.56132c-2.08471,-3.57184 -5.93115,-5.74449 -10.06645,-5.68601h-45.86667v-45.86667c0.04237,-3.09747 -1.17017,-6.08033 -3.36168,-8.26973c-2.1915,-2.18939 -5.17553,-3.39907 -8.27296,-3.35371z"></path>
                </g>
              </g>
            </svg>
          </button>
        }
        {(this.state.width > 600) &&
          <text className={styles.nameLogo}>jm</text>
        }
        <a href="https://github.com/james168ma" target="_blank" className={styles.logoLink + " " + styles.firstLogoLink}><img src={githubLogo} className={styles.logo}/></a>
        <a href="https://www.linkedin.com/in/james168ma" target="_blank" className={styles.logoLink + " " + styles.lastLogoLink}><img src="/images/LinkedIn_logo.png" className={styles.logo} /></a>
      </div>
    )

    return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <header className={styles.header}>
          {headerDiv}
        </header>

        <div className={styles.container}>
          {navBar}
          <main>{this.props.children}</main>
          {this.props.blogPost && (
            <div className={styles.backToHome}>
              <Link href="/subpages/Blog">
                <a>← Back to Blog</a>
              </Link>
            </div>
          )}
          {!this.props.home && !this.props.blogPost && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  }
}
