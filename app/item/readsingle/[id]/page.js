import Image from "next/image";
import Link from "next/link";

const getSingleItem = async(id) => {
    
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache: "no-store"});
    const jsonData = await response.json();
    const singleItem = jsonData.singleItem;
    return singleItem;
}


const ReadsingleItem = async(context) => {

    getSingleItem(context.params.id);
    const singleItem = await getSingleItem(context.params.id);

   // console.log(singleItem);
    return(
        <>
        <div>
            <div>
                <Image src={singleItem.image} width={750} height={500} 
                alt="item-image" priority />
            </div>

            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <p>{singleItem.description}</p>
            </div>
        </div>
        <Link href="/"><h2>topページへ</h2></Link>
        </>
    );
}

export default ReadsingleItem;