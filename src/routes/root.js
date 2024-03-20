import { Outlet, Link } from "react-router-dom";


function Root(){
    return (
        <>
        {/* Sidebar */}
        <div id="sidebar">
          <h1>React Router DOM</h1>
          
          <nav>
            <ul className="font-sans text-xl text-gray-700">
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
              <li>
                <Link to={`/register`}>Register</Link>
              </li>
              <li>
                App
                <ul>
                    <li>
                        <Link to={`app/dashboard`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={`app/user`}>User</Link>
                    </li>
                    <li>
                        <Link to={`app/setting`}>Settings</Link>
                    </li>
                </ul>
                
              </li>
            </ul>
          </nav>
        </div>
        {/* end Sidebar */}

        {/* Content */}
        <div id="detail"> <Outlet/> </div>
      </>
    )
}

export default Root;