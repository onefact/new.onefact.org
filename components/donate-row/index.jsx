import Link from 'next/link'

let DONATE_INFO = [
    {
        "url": "https://give.onefact.org/cash",
        "title": "Cashapp"
    },
    {
        "url": "https://give.onefact.org/stripe",
        "title": "Stripe"
    },
    {
        "url": "https://give.onefact.org/venmo",
        "title": "Venmo"
    },
    {
        "url": "https://give.onefact.org/paypal",
        "title": "Paypal"
    },
]

export const DonateRow = () => {
    return (
        <>
            {DONATE_INFO.map((info) => {
                return (
                    <Link
                        className="cta"
                        href={info.url}
                        target="_blank"
                        style={{background: "linear-gradient(to bottom, #238aff, #0077ff)"}}
                    >{info.title} <span>→</span></Link>
                )
            })}
        </>
    )
}