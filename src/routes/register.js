function Register(){
    return (
        <div className="container mx-auto p-16 w-7/12 bg-gray-200 rounded-md">
            <h1 className="font-mono text-center tracking-wide text-4xl text-teal-800 font-bold">REGISTER</h1>
            <div className="mx-auto mt-7 grid place-content-center">
                <label className="text-gray-800 font-bold font-mono text-lg">Username</label>
                <input className="w-96 mt-1 p-4 font-mono" type="text" placeholder="Enter your username"></input>
            </div>
            <div className="mx-auto mt-7 grid place-content-center">
                <label className="text-gray-800 font-bold font-mono text-lg">Password</label>
                <input className="w-96 mt-1 p-4 font-mono" type="password" placeholder="Enter your password"></input>
            </div>
            <div className="mx-auto mt-7 grid place-content-center">
                <label className="text-gray-800 font-bold font-mono text-lg">Password confirmation</label>
                <input className="w-96 mt-1 p-4 font-mono" type="password" placeholder="Retape your password"></input>
            </div>
            <div className="mx-auto mt-7 grid place-content-center">
                <button type="submit" className="w-96 mt-1 p-4 bg-teal-800 text-lg text-gray-200 tracking-widest">SUBMIT</button>
            </div>
        </div>
    )
}

export default Register;