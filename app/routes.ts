import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("ui/pages/home/home.tsx"),
	route("suprema-corte", "ui/pages/suprema-corte/suprema-corte.tsx"),
] satisfies RouteConfig;
