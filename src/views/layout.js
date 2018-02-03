import React from 'react'

const Layout = ({children}) => (
  <div>
    <div className="jumbotron">
        <div className="container">
        <svg width="121" height="30"><g><path fill="#000" d="M83.625 23.7h-7.07c.856-1.046 1.364-3.297 1.65-6.688.253-3.266.41-7.64.506-13.378h4.915V23.7h-.001zm1.902 5.072h1.236V23.7H85.21V2.334h-7.925c-.095 6.31-.19 11.317-.508 14.678-.317 3.233-.855 5.77-1.965 6.688h-.666v5.072h1.237L75.605 25h9.7l.222 3.772zM96.495 25h1.426V9.023h-1.298l-5.2 11.222c-.316.697-.633 1.395-.855 2.124h-.095c.063-.7.127-1.396.127-2.252V9.023h-1.396V25h1.268l5.2-11.254a14.38 14.38 0 0 0 .855-2.06h.095a21.851 21.851 0 0 0-.127 2.187V25zm9.478-.983c-2.472 0-3.582-2.6-3.582-6.974 0-4.5 1.142-7.07 3.583-7.07 1.363 0 2.378.825 3.075 1.808l.412-1.584c-.697-.856-1.838-1.49-3.487-1.49-3.265 0-5.072 3.075-5.072 8.337 0 5.2 1.84 8.274 5.04 8.274 2.506 0 3.68-1.775 3.68-1.775l-.477-1.237s-1.11 1.712-3.17 1.712l-.002-.001zm7.545-7.29L119.065 25h1.65l-5.644-8.56 5.263-7.417h-1.458l-5.357 7.513V9.023h-1.49V25h1.49v-8.274l-.001.001zM34.997 22.97V9.024l-7.26-.026v1.363c0 4.248-.316 9.22-1.775 12.61h-1.045v5.036H27.2V25h6.846v3.006h2.22V22.97h-1.27.001zm11.444-.95c-.633.444-1.743 1.078-3.138 1.078-1.965 0-2.948-1.57-2.948-5.184h6.657V16.55c0-5.42-1.774-7.75-4.437-7.75-3.392 0-4.818 3.742-4.818 8.877 0 4.914 2.03 7.545 5.325 7.545 1.585 0 2.917-.507 3.93-1.3l-.57-1.902h-.001zm-25.415-6h-3.523V9.034H15.03V25.01h2.472v-6.96h3.523v6.96h2.44V9.034h-2.44v6.987l.001-.001zM58.9 25l-4.534-8.464 3.962-7.513h-2.504l-3.836 7.386V9.022h-2.473V25h2.473v-7.957L56.204 25H58.9zm5.8.222c1.458 0 2.472-.476 3.328-1.205l-.57-1.838c-.57.506-1.49.98-2.695.98-1.997 0-2.948-2.28-2.948-6.275 0-4.026 1.268-6.023 3.043-6.023 1.015 0 1.966.54 2.63 1.11l.35-2.347c-.697-.443-1.522-.824-2.948-.824-3.74 0-5.674 3.203-5.674 8.212 0 5.452 2.06 8.21 5.484 8.21zm-32.144-2.25h-4.248c1.332-3.393 1.49-8.306 1.49-11.666v-.286h2.758v11.952zm11.834-8.886c.062.567.09 1.198.09 1.874h-4.09c.16-2.853.662-5.13 2.183-5.13 1.073 0 1.626 1.536 1.817 3.256z"></path><path fill="#F00" d="M9.547 25.006h2.44V2H8.343C4.761 2 1.728 4.377 1.728 9.132c0 3.39 1.352 5.572 3.35 6.586L.83 25.006h2.82l3.868-8.685h2.03v8.686l-.001-.001zM8.27 14.303c-2.125 0-3.864-1.357-3.864-5.003 0-.214.006-.422.018-.623.198-3.34 1.99-4.704 3.845-4.704h1.3v10.33h-1.3.001z"></path></g></svg>
        </div>
    </div>
    <div className="container">
        {children}
    </div>
  </div>
)

export default Layout