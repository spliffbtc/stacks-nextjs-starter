import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: "Stacks NextJS Starter",
      icon: window.location.origin + "/logo.svg",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getUserProfile() {
  return new Person(getUserData().profile);
}

export function signUserOut() {
  return userSession.signUserOut("/");
}

export function isSignedIn() {
  return userSession.isUserSignedIn();
}
