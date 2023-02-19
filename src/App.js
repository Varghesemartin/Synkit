import React from 'react';
import { ClerkProvider } from "@clerk/clerk-react";
import LoginPage from "./Auth";

const clerkSettings = {
  apiKey: 'pk_test_cG9wdWxhci1qYXliaXJkLTU3LmNsZXJrLmFjY291bnRzLmRldiQ',
  frontendApi: 'https://paint-delta.vercel.app/',
  signInRedirectUrl: 'https://yourapp.clerk.app/sign-in',
  signUpRedirectUrl: 'https://yourapp.clerk.app/sign-up',
};

function App() {
  return (
      <ClerkProvider publishableKey='pk_test_cG9wdWxhci1qYXliaXJkLTU3LmNsZXJrLmFjY291bnRzLmRldiQ' settings={clerkSettings}>
        <LoginPage/>
      </ClerkProvider>
  );
}

export default App;