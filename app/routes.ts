import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("ui/pages/home/home.tsx"),
	route("/:candidature", "ui/pages/candidature/candidature.tsx"),
	route("/:candidature/:candidate", "ui/pages/candidate/candidate.tsx"),
] satisfies RouteConfig;
