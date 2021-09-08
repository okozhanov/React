import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";
import './Menu.css'

let switcher = () => {
    let app = document.getElementsByClassName('App')[0]
    app.classList.toggle('App_light')

    let menu_elements = document.getElementsByClassName('menu_element')
    for (const menu_element of menu_elements) {
        menu_element.classList.toggle('menu_element_light')
    }

    let headers = document.getElementsByClassName('header')
    for (const header of headers) {
        header && header.classList.toggle('header_light')
    }


    let label = document.getElementsByClassName('label')[0]
    label && label.classList.toggle('label_light')

    let page_clickers = document.getElementsByClassName('page_clicker')
    for (const page_clicker of page_clickers) {
        page_clickers && page_clicker.classList.toggle('page_clicker_light')
    }

    let clicker_buttons = document.getElementsByClassName('clicker_button')
    for (const clicker_button of clicker_buttons) {
        clicker_buttons && clicker_button.classList.toggle('clicker_button_light')
    }

    let page_numbers = document.getElementsByClassName('page_number')
    for (const page_number of page_numbers) {
        page_numbers && page_number.classList.toggle('page_number_light')
    }

    let genre_items = document.getElementsByClassName('genre_item')
    for (const genre_item of genre_items) {
        genre_items && genre_item.classList.toggle('genre_item_light')
    }

    let movie_cards = document.getElementsByClassName('movie_card')
    for (const movie_card of movie_cards) {
        movie_cards && movie_card.classList.toggle('movie_card_light')
    }

    let movie_informs = document.getElementsByClassName('movie_info')
    for (const movie_info of movie_informs) {
        movie_informs && movie_info.classList.toggle('movie_info_light')
    }

    let overviews = document.getElementsByClassName('overview')
    for (const overview of overviews) {
        overviews && overview.classList.toggle('overview_light')
    }

    let switcher_button = document.getElementsByClassName('switcher')[0]
    switcher_button.classList.toggle('switcher_light')
}

export default function Menu() {
    return (
        <div className={'menu'}>
            <button className={'switcher'} onClick={switcher}>switch</button>
            <Link to={'/movies'}>
                <p className={'menu_element'}>Movies</p>
            </Link>
            <Link to={'/genres'}>
                <p className={'menu_element'}>Genres</p>
            </Link>
        </div>
    );
}