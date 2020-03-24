import React, { Component } from 'react'



// --- Images --- ///
import Car2 from "../asset/Car2.jpg"
import Lcd from "../asset/Lcd.jpg"
import Watch from "../asset/watch.jpg"
import Miller from "../asset/Miller.jpg"
import Usa from "../asset/Usa.jpg"
import Toy from "../asset/Toy.jpg"
import Jug from "../asset/Jug.jpg"
import Pan from "../asset/Pan.jpg"
import Bids from "../asset/Bids.jpg"
import Ring from "../asset/Ring.jpg"
import Your from "../asset/your.jpg"
import Ipad2 from "../asset/Ipad2.jpg"
import Jacket from "../asset/Jacket.jpg"
import Bid from "../asset/Bid.jpg"
import Ds from "../asset/ds.jpg"
import Fd from "../asset/fd.jpg"
import Jkl from "../asset/jkl.jpg"
import Hjk from "../asset/hjk.jpg"
import Clock from "../asset/Clock.jpg"
import Fbds from "../asset/fbds.jpg"
// --- Images --- ///


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        var Data = [
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            },
            {
                Image: Car2,
                Price: '$11',
                Descripition: 'Descripition'
            }
        ]
        this.setState({ data: Data });

    }




    render() {

        console.log(this.state.data)
        return (

            <div className='container'>
                <div className="row">


                    {
                        this.state.data.map((Item) => (
                            <div className="col-md-2 col-sm-6 mt-3" style = {{ paddingLeft : "10px", paddingRight : '0px' }} >
                                <div className="card">
                                    <img src={Item.Image} className="card-img-top" alt="..." />
                                    <div className="card-body ght">
                                        <h5 className="house">{Item.Price}</h5>
                                        <h8>{Item.Descripition}</h8>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

         
                </div>       
            </div>


        )
    }
}
export default Cards