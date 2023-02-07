import logo from '../../../images/logo.svg'
import menu from '../../../images/menu.svg'
import close from '../../../images/close.svg'
import heroImg from '../../../images/illustration-working.svg'
import formImg from '../../../images/bg-shorten-desktop.svg'



export const navbar = {
    logo: {
        img: logo
    },
    burger: {
        open: menu,
        close: close
    },
    links: [
        {
            href: "#features",
            name: "Features",
            id: 1
        },
        {
            href: "#pricing",
            name: "Pricing",
            id: 2
        },
        {
            href: "#resources",
            name: "Resources",
            id: 3
        },
    ]
}

export const hero = {
    img: heroImg,
    title: "More than just shorter links",
    subtitle: "Build your brand's recognition and get detailed insights on how your links are performing.",
}

export const form = {
    img: formImg,
    placeholder: "Shorten a link here..."
}