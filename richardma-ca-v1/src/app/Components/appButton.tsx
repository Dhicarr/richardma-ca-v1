import React, { ReactNode } from "react";

interface AppButtonProps {
  name: String;
}

const AppButton = ({name}:AppButtonProps): JSX.Element => {
  return (
    <main className="text-sky-400/100 bg-sky-400/20 py-2 px-2 rounded-xl">
      {name}
    </main>
  );
}

export default AppButton
