import { userAgent } from "next/server";
import sitemap from "./sitemap";

export default function robots(){
    const baseURL= "https://www.dulcesfran.cl";

    return{
        rules:{
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseURL}/sitemap.xml`,
    };
}