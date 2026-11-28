import { useContext } from 'react'
import { MobileContext } from './MobileContext.jsx'

function Mobile() {
    const mobiles = useContext(MobileContext)
    console.log(mobiles)

    return (
        <section className="mobile-catalog" aria-labelledby="mobile-catalog-title">
            <header className="mobile-catalog-header">
                <p className="catalog-eyebrow">DEVICE CATALOG</p>
                <h2 id="mobile-catalog-title">Mobile phones</h2>
                <p className="catalog-description">Compare the latest phones</p>
            </header>
            <div className="mobile-product-list">
                {mobiles.map((mobile) => (
                    <article className="mobile-product" key={mobile.id}>
                        <div className="product-mark" aria-hidden="true">{mobile.brand.slice(0, 1)}</div>
                        <div className="product-details">
                            <p className="product-brand">{mobile.brand}</p>
                            <h3>{mobile.name}</h3>
                        </div>
                        <p className="product-price">${mobile.price}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Mobile