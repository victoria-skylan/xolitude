import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useRouteMatch, useHistory } from 'react-router-dom'
import AppContext from './context'


function ProductCard(props) {
    const context = React.useContext(AppContext)
    const history = useHistory()

    const styleButton = {
        backgroundColor: "#254352",
        borderColor: "#254352",
        borderRadius: "10px",
        color: "white",
        width: "50%"
    };
    const titleArea = {
        textTransform: "uppercase"
    };

    return (
        <bs.Card className="mx-2 my-4">
            <bs.Card.Header className="text-center">
                <bs.Card.Title style={titleArea} className="mb-2">{props.url}</bs.Card.Title>
            </bs.Card.Header>
            <bs.Card.Img
                variant="top"
                alt={props.url}
                src={`${props.url}.jpg`}
            />
            <div class="text-center p-3">
            <bs.Button style={styleButton}
                    onClick={e => {
                        context.addToCart(props.url)
                        history.push('/cart')
                    }}
                >
                    Add to Cart
            </bs.Button>
            </div>
        </bs.Card>
    )
}
export default ProductCard
