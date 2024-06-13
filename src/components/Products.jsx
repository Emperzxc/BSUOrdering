import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Products = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider">Products</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((item, index)=>( 
                <div key={index} className="w-full lg:w-1/3 sm:1/2 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">
                            {item.title}
                            {item.title == 'Pro' && <span className="text-xl mb-4 ml-2 bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">(Recommended)</span>}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{item.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {item.features.map((item,index)=>(
                                <li key={index} className="flex mb-6 mt-8 items-center">
                                    <CheckCircle2 className="mr-3"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center h-full w-full px-2 py-3 mt-20 border border-red-900 rounded-xl tracking-tight text-xl hover:bg-gradient-to-r from-red-500 to-red-800 hover:border-none transition duration-200">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products
