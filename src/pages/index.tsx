import React from "react";
import { HeadFC,PageProps } from "gatsby";
import siteinfo from "../data/siteinfo.json"
import Layout from "../components/Layout";

type SiteInfo={
  sitename:string
}
const {sitename}:SiteInfo=siteinfo

const Index:React.FC<PageProps> = () =>{
return(
  <>
  <Layout>
    <h1>Hello world</h1>
  </Layout>
  </>
)
}

export default Index

export const Head:HeadFC = () =><title>{sitename}</title>