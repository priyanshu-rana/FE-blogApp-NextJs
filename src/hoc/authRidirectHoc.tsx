import { observer } from "mobx-react";
import authStore from "../../store/authStore";
import { redirect } from "next/navigation";

const authRidirectHoc = (Component: any) => {
  const AuthRedirect = observer((props: any) => {
    const isAuthenticated = authStore.isAuthenticated;

    if (!isAuthenticated) {
      redirect("/login");
    }

    return <Component {...props} />;
  });

  return AuthRedirect;
};

export default authRidirectHoc;
