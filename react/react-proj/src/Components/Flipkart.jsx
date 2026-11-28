import Electronics from './electronics.jsx'

function Flipkart({ mobile }) {
    console.log(mobile)

    return (
        <section className="flipkart-components">

            <h2>Welcome to Flipkart</h2>
            <Electronics mobile={mobile} />
        </section>
    )
}
export default Flipkart