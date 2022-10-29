import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import Helmet from 'react-helmet'   // для определения элементов тега <head>
import './style.css'


class ReactRoot extends React.Component {
    render() {
        return (
            <div id="react-root">
                <Helmet
                    title="Карандаш"
                    meta={[
                        { "charset": "UTF-8" },
                        { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
                        { "name": "viewport", "content": "width=device-width, initial-scale=1.0" }
                    ]}
                />

                <Logo path={require('./images/logo.png')} altText="Логотип" />
                <Header />
                <SearchForm />
                <Navigation />
                <Main />
                <Footer />
            </div>
        )
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={this.props.path} alt={this.props.altText} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Карандаш</h1>
                <i>интернет-магазин канцелярских принадлежностей</i>
            </div>
        )
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: ""
        }
    }

    changeSearchText(event) {
        var text = event.target.value;
        this.setState(() => {
            if (text.length === 0) {
                return {
                    searchText: ""
                }
            }
            else {
                return {
                    searchText: "Ваш запрос: " + text
                }
            }
        })
    }

    clearSearchText() {
        var searchLine = document.querySelector('.searchline').firstElementChild.firstElementChild;
        searchLine.value = "";

        this.setState(() => {
            return {
                searchText: ""
            }
        })
    }

    render() {
        return (
            <div className="searchline">
                <form>
                    <input
                        type="text"
                        onChange={this.changeSearchText.bind(this)} 
                        maxLength="50"
                    />
                    
                    <input
                        type="image"
                        src={require('./images/loupe.png')}
                        alt="Поиск"
                    />

                    <img 
                        src={require('./images/eraser.png')}
                        alt="Очистить"
                        onClick={() => this.clearSearchText()}
                        role="button"
                    />
                </form>
                <p>{this.state.searchText}</p>
            </div>
        )
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul className="categories">
                    <p><b>Каталог товаров</b></p>
                    <NavigationCategory href="#" text="Письменные принадлежности" />
                    <NavigationCategory href="#" text="Офисная бумага" />
                    <NavigationCategory href="#" text="Тетради и блокноты" />
                    <NavigationCategory href="#" text="Принадлежности для скрепления" />
                    <NavigationCategory href="#" text="Принадлежности для черчения" />
                    <NavigationCategory href="#" text="Клейкие принадлежности" />
                    <NavigationCategory href="#" text="Книги и учебники" />
                    <NavigationCategory href="#" text="Доски, таблички, бейджи" />
                    <NavigationCategory href="#" text="Товары для творчества" />
                    <NavigationCategory href="#" text="Календари" />
                    <NavigationCategory href="#" text="Открытки и сувениры" />
                    <NavigationCategory href="#" text="Офисная техника" />
                </ul>
            </div>
        )
    }
}

class NavigationCategory extends React.Component {
    render() {
        return (
            <a href={this.props.href}>
                <li>
                    <p>{this.props.text}</p>
                </li>
            </a>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h3>Каталог товаров</h3>
                <ul className="product-list">
                    <ProductItem
                        productTitle="Письменные принадлежности"
                        path={require('./images/writing.jpg')}
                        altText="Письменные принадлежности"
                    />

                    <ProductItem
                        productTitle="Тетради и блокноты"
                        path={require('./images/copybook.jpg')}
                        altText="Тетради и блокноты"
                    />

                    <ProductItem
                        productTitle="Принадлежности для скрепления"
                        path={require('./images/binding.jpg')}
                        altText="Принадлежности для скрепления"
                    />

                    <ProductItem
                        productTitle="Принадлежности для черчения"
                        path={require('./images/techdrawing.jpg')}
                        altText="Принадлежности для черчения"
                    />

                    <ProductItem
                        productTitle="Клейкие принадлежности"
                        path={require('./images/adhesive.jpg')}
                        altText="Клейкие принадлежности"
                    />

                    <ProductItem
                        productTitle="Книги и учебники"
                        path={require('./images/book.jpg')}
                        altText="Книги и учебники"
                    />

                    <ProductItem
                        productTitle="Доски, таблички, бейджи"
                        path={require('./images/board.jpg')}
                        altText="Доски, таблички, бейджи"
                    />

                    <ProductItem
                        productTitle="Товары для творчества"
                        path={require('./images/creativity.jpg')}
                        altText="Товары для творчества"
                    />

                    <ProductItem
                        productTitle="Календари"
                        path={require('./images/calendar.jpg')}
                        altText="Календари"
                    />

                    <ProductItem
                        productTitle="Открытки и сувениры"
                        path={require('./images/postcard.jpg')}
                        altText="Открытки и сувениры"
                    />

                    <ProductItem
                        productTitle="Офисная техника"
                        path={require('./images/equipment.jpg')}
                        altText="Офисная техника"
                    />                    
                </ul>
            </div>
        )
    }
}

class ProductItem extends React.Component {
    render() {
        return (
            <li className="product">
                <p>{this.props.productTitle}</p>
                <img src={this.props.path} alt={this.props.altText} />
            </li>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>
                    Интернет-магазин канцелярских товаров &laquo;Карандаш&raquo; <br />
                    &copy; Все права защищены <br />
                    2022
                </p>
            </div>
        )
    }
}


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<ReactRoot />);

document.documentElement.lang = "ru";
