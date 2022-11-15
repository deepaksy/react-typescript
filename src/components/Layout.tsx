import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { PageProps } from "gatsby";
import Button from "./Button";
export default function Layout({children}:{children:ReactNode}){

    const shortcodes ={Button}
    return(
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
    )
}