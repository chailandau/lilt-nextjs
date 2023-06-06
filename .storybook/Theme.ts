import { create } from "@storybook/theming";
import logo from "./public/logo.svg";

export default create({
    base: "light",
    brandTitle: "Long Island Laser Tag",
    brandUrl: process.env.NEXT_PUBLIC_BASE_URL,
    brandImage: logo,
    brandTarget: "_self",
});
