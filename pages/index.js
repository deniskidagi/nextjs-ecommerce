import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import {FaShoppingCart} from 'react-icons/Fa'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Asus Gaming Store
          </h1>
        </div>

                 
        <p className={styles.description}>
        <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
          <FaShoppingCart className='cart-detail'/>
            <strong className='sr-only'>Cart:</strong>
            <span className="snipcart-total-price">$0.00</span>
          </a>
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`}/>
                <h3>{product.title}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <button className='snipcart-add-item'
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            )
          })}

        </div>
      </main>

      <footer className={styles.footer}>
      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key="Y2QyNjhjY2YtMzZiMy00ODA1LTgxY2ItMWU4OTQ0ZGUwYTc2NjM3ODA0OTg0OTUyNTExMjkz" />
        Powerd by &copy; UOE coders
      </footer>
    </div>
  )
}
