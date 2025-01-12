"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import Google from "../../../../components/logos/google";
import { signIn } from "next-auth/react";
const SigninForm = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Button onClick={() => signIn("google")}>
        <Google />
        Continue with google
      </Button>
    </div>
  );
};

export default SigninForm;
