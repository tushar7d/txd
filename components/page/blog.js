

import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";


 function BlogHeader() {
    return (
      <div className="max-w-screen-lg pt-4 pb-8 mx-auto mt-12 mb-6">
        
         <div className="font-serif text-5xl font-bold leading-tight text-center text-white">Writing</div>
        
      
      </div>
    );
  }
  
   function BlogIndex() {
    return getPagesUnderRoute("/blog").map((page) => {
      return (
        <div key={page.route} className="p-12 mb-3 bg-white/5 hover:bg-white/10 rounded-xl hover:cursor-pointer ">
          <Link href={page.route} >
          {page.frontMatter?.date ? (
            <p className="mb-3 text-sm opacity-50">{page.frontMatter.date}</p>
          ) : null}
  
          <h1 className="font-serif text-2xl font-semibold ">
            {page.meta?.title || page.frontMatter?.title || page.name}
         </h1>
          <p className="opacity-80">
            {page.frontMatter?.description}
          </p>
          
           </Link>
        </div>
      );
    });
  }

  let Blog = ()=>{
    return(
        <>
        
        <BlogHeader />
        <BlogIndex />
        </>
    )
  }

  export default Blog