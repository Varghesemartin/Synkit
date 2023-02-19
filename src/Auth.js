import { SignIn, useClerk } from  "@clerk/clerk-react";

import React from 'react';
import './index.css';

function LoginPage() {



    const handleSignUpClick = () => {

    };

    return (
        <div className="h-screen w-screen bg-black"  >
            <div className="flex justify-center items-center absolute top-20 left-20">

            <SignIn signUpUrl="https://paint-delta.vercel.app/" />

            </div>


        </div>
    );
}
export default LoginPage;

// function HomePage() {
//     const { user, signOut } = useClerk();
//
//     const handleSignOutClick = () => {
//         signOut();
//     };
//
//     return (
//         <div>
//             <h1>Welcome, {user.fullName}!</h1>
//             <button onClick={handleSignOutClick}>Sign Out</button>
//         </div>
//     );
// }