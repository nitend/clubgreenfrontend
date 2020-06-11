import React from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { PropertyList } from '../properties/PropertyList';
import { PropertyEditor } from '../properties/PropertyEditor';
import './AdminMenue.css'
import { SightList } from '../sights/SightList';
import { SightEditor } from '../sights/SightEditor';
import { UserList } from '../user/UserList';
import { BookingList } from '../bookings/BookingList';
import { RatingList } from '../ratings/RatingList';
import { RatingEditor } from '../ratings/RatingEditor';
import { ProductList } from '../products/ProductList';
import { ProductEditor } from '../products/PropertyEditor';

interface Props {
    
}

export const AdminMenu: React.FC<Props> = () => {

    return(
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink to={`/properties`}>Wochenendgrundstück</NavLink></li>
                    <li><NavLink to={`/product`}>Producte</NavLink></li>
                    <li><NavLink to={`/sights`}>Sehenswertes</NavLink></li>
                    <li><NavLink to={`/user`}>Nutzer</NavLink></li>
                    <li><NavLink to={`/bookings`}>Buchungen</NavLink></li>
                    <li><NavLink to={`/ratings`}>Bewertungen</NavLink></li>
                </ul>

                <div className='content'> 
                        <Route exact path={`/`} component={PropertyList} />      
                        <Route exact path={`/properties`} component={PropertyList} />
                        <Route exact path={`/product`} component={ProductList} />
                        <Route exact path={`/sights`} component={SightList} />
                        <Route exact path={`/user`} component={UserList} />
                        <Route exact path={`/bookings`} component={BookingList} />
                        <Route exact path={`/ratings`} component={RatingList} />
                        <Route path={`/properties/:propertyId`} component={PropertyEditor} />
                        <Route path={`/sights/:sightId`} component={SightEditor} />
                        <Route path={`/ratings/:ratingId`} component={RatingEditor} />
                        <Route path={`/product/:id`} component={ProductEditor} />
                </div>
            </div>
        </HashRouter>
    )
}