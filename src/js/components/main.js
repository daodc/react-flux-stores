var React = require("react");
var Catalog = require("../components/catalog");
var Cart = require("../components/cart");

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Shopping Items</h1>
                <Catalog />
                <h1>Cart</h1>
                <Cart />
            </div>
        );
    }
});

module.exports = Main;