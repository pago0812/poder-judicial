import type { Config } from "@react-router/dev/config";

export default {
	async prerender() {
		return ["/", "/suprema-corte"];
	},
} satisfies Config;
