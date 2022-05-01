import React, {useEffect, useState} from "react";
import {Container, Row, ListGroup} from 'react-bootstrap';
import Product from './Product';
import axios from "axios";
import Cart from "./Cart";

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios('https://restcountries.com/v2/all').then(data => {
            setProducts([
                {id: 1, brand: 'adidas', price: 120.00, model: 'Кросівки OZWEEGO', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/3c930598e8784957a410aa76010d8421_9366/EE6999_00_plp_standard.WebP'},
                {id: 2, brand: 'adidas', price: 121.00, model: 'Кросівки OZWEEGO', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/1a970dae8a564defbb64aa7600ffadcf_9366/EE6464_00_plp_standard.WebP'},
                {id: 3, brand: 'adidas', price: 150.00, model: 'Кросівки Forum Low', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/949a39ad23254477a094ac310128aeb2_9366/FY7755_00_plp_standard.WebP'},
                {id: 4, brand: 'adidas', price: 125.00, model: 'Кросівки Ozelia', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/f404127b74e34844949cad2401575463_9366/H04250_00_plp_standard.WebP'},
                {id: 5, brand: 'adidas', price: 99.00, model: 'Кросівки BREAKNET', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/fdd569ca5caa416b9b3eac6400f6b253_9366/FZ1839_00_plp_standard.WebP'},
                {id: 6, brand: 'adidas', price: 1000.99, model: 'Високі кросівки Hoops 2.0', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/1a12ddf8f2fe479bbac9a92600ea29fa_9366/B44621_00_plp_standard.WebP'},
                {id: 7, brand: 'adidas', price: 91.00, model: 'Кросівки Forum Low', selected: false,  wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/ed1f85799cd94f358717ade9017d5235_9366/GV9766_00_plp_standard.WebP'},
                {id: 8, brand: 'adidas', price: 1345.97, model: 'Кросівки Courtmaster', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/e28154ea0b6b47ffac65ab5700f46ffa_9366/FV8108_00_plp_standard.WebP'},
                {id: 9, brand: 'adidas', price: 1124.00, model: 'Кросівки Superstar', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/8d3ab16a86e64571b405aad600bad099_9366/EG4958_00_plp_standard.WebP'},
                {id: 10, brand: 'adidas', price: 118.97, model: 'Кросівки NMD_R1 Primeblue', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/e95a999945064900bac6ad0800d365a1_9366/GZ9256_00_plp_standard.WebP'},
                {id: 11, brand: 'adidas', price: 100.00, model: 'Кросівки ZX 2K Boost 2.0', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/5aa3b36b5f064ca08fb0acf40099de0b_9366/GZ7735_00_plp_standard.WebP'},
                {id: 12, brand: 'adidas', price: 400.00, model: 'Кросівки Niteball', selected: false, wish: false,
                    imgSrc: 'https://assetmanagerpim-res.cloudinary.com/images/w_380/q_80/2295831eced14280922eadf300205f76_9366/GY8566_00_plp_standard.WebP'}
            ])
        });
    }, [])

    function selectProduct(id, value) {
        setProducts(products.map(product => {
            if(product.id === id) {
                return {...product, selected: value};
            }
            return {...product};
        }))
    }

    return <>
        <h1>Products</h1>
        <Cart products={products.filter(el => el.selected)} selectProduct={selectProduct}/>
        <Container>
            <Row>
                {products.map(product => <Product
                    selectProduct={selectProduct}
                    key={product.id} product={product}/>)}
            </Row>
        </Container>
    </>

}

export default Shop;
