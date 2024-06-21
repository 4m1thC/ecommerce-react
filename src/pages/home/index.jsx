import { useState, useEffect } from "react";

import { Layout } from "../../components/layout";
import { Card } from "../../components/card"
import { apiUrl } from "../../api";

function Home() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <Layout>
      Home
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
       justify-items-center gap-4 w-full max-w-screen-lg">
        {
          products?.map((product) => {
            return <Card key={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              category={product.category} />
          })
        }
      </div>
    </Layout>
  )
}

export { Home };
