import Link from 'next/link';
import Image from 'next/image';

const getAllItem = async() => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`, {cache: "no-store"});
  const dataJson = await response.json();
  //console.log(dataJson);
  const allItems = dataJson.allItems
  return allItems;
}

const ReadallItems = async() => {

    //console.log(process.env.NEXT_PUBLIC_URL);
    const allItems = await getAllItem();
    console.log(allItems);

  return(
    <div className="grid-container-in">
      {allItems.map(item => 
        
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
            <Image src={item.image} width={750} height={500} alt="item-image" priority/>
          <div>
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 50)}</p>
          </div>
        </Link>
      )};
    </div>
  );
}

export default ReadallItems;