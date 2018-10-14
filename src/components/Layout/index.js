/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import { Link } from 'dva/router'
// import logo from 'images/logo.svg'
import styles from './index.less'

const LayoutContent = (props) => (
  <div className={styles.App}>
    <div className={styles.AppHeader}>
      <img src='https://photo.tuchong.com/2345423/l/380240620.webp' className={styles.AppLogo} alt='logo' />
      <h2>Welcome to React</h2>
    </div>

    <header className={styles.AppNav}>
      <Link to='/home'> home </Link>
      <Link to='/async'> async </Link>
      <Link to='/404'> 404 </Link>
      <Link to='/login'> login </Link>
    </header>
    <div className={styles.AppContent}>
      {props.children}
    </div>
  </div>
)

export default LayoutContent
