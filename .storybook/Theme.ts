import { create } from "@storybook/theming";
import icon from "./public/icon.svg";

export default create({
    base: "light",
    brandTitle: "Long Island Laser Tag",
    brandUrl: process.env.NEXT_PUBLIC_BASE_URL,
    brandImage: icon,
    brandTarget: "_self",
});
