import logo from '../../../images/logo.svg'
import logoWhite from '../../../images/logo-white.svg'
import menu from '../../../images/menu.svg'
import close from '../../../images/close.svg'
import heroImg from '../../../images/illustration-working.svg'
import formImg from '../../../images/bg-shorten-desktop.svg'
import instagram from '../../../images/icon-instagram.svg'
import pinterest from '../../../images/icon-pinterest.svg'
import twitter from '../../../images/icon-twitter.svg'
import facebook from '../../../images/icon-facebook.svg'



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

export const previlegies = {
    title: "Advanced statistics",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",


    card1: {
        title: "Brand Recognition",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eaque cupiditate quibusdam facilis minima pariatur vel aut? Nobis, est quo.",
    },
    card2: {
        title: "Detailed Records",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eaque cupiditate quibusdam facilis minima pariatur vel aut? Nobis, est quo.",
    },
    card3: {
        title: "Fully customizable",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eaque cupiditate quibusdam facilis minima pariatur vel aut? Nobis, est quo.",
    },
}

export const footer = {
    social: [
        {
            link: "https://www.instagram.com/wnd.knd/",
            icon: instagram
        },
        {
            link: "https://www.facebook.com/viacheslav.demchenko.7",
            icon: facebook
        },
        {
            link: "https://pl.pinterest.com/wndknd/",
            icon: pinterest,
        },
        {
            link: "https://twitter.com/Viaches00065798",
            icon: twitter
        }
    ],
    features: {
        title: "Features",
        sublinks: [
            'Link Shortening',
            'Branded Links',
            'Analytics',
        ]
    },
    resources: {
        title: "Resources",
        sublinks: [
            "Blog",
            "Developers",
            "Support"
        ]
    },
    company: {
        title: "Company",
        sublinks: [
            "About",
            "Our Team",
            "Careers",
            "Contact"
        ]
    },
    logo: logoWhite
}