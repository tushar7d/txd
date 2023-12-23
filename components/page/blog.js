

import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";


 function BlogHeader() {
    return (
      <div className="max-w-screen-lg mx-auto pt-4 pb-8 mb-6 mt-12">
        
         <div className="font-bold leading-tight font-serif text-5xl text-center animate-text  text-transparent select-none bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">Writing</div>
        
      
      </div>
    );
  }
  
   function BlogIndex() {
    return getPagesUnderRoute("/blog").map((page) => {
      return (
        <div key={page.route} className="mb-3 p-12 bg-white/5  hover:bg-white/10 rounded-xl hover:cursor-pointer ">
          <Link href={page.route} >
          {page.frontMatter?.date ? (
            <p className="opacity-50 text-sm mb-3">{page.frontMatter.date}</p>
          ) : null}
  
          <h1 className="text-2xl  font-serif font-semibold ">
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