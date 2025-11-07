// test constants.js

const API_BASE_URL = "https://api.example.com";

const USER_ROLES = {
  ADMIN: "admin",
  EDITOR: "editor",
  VIEWER: "viewer",
  DEV: "dev"
};

const FEATURE_FLAGS = {
  enableNewUI: true,
  showBetaBanner: false,
  useExperimentalAPI: true
};

const DEFAULT_TIMEOUT = 5000;

export {
  API_BASE_URL,
  USER_ROLES,
  FEATURE_FLAGS,
  DEFAULT_TIMEOUT
};
